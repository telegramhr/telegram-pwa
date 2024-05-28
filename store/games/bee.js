import { differenceInDays, isSameDay } from 'date-fns'
import { epoch, generateAnswerObjs, incrementDups } from './utils'

export const state = () => ({
  // todays puzzle
  // correctGuesses as array caused infinite update issue when game was open in multiple tabs. see #6
  correctGuesses: new Set([]),
  answers: [],
  availableLetters: '',
  middleLetter: 'middleLetter',
  gameDate: epoch,
  lastGameDate: new Date(),
  theme: 'light',
  // don't need to be in local storage because they doesn't change
  pointsMessages: {
    1: 'good',
    5: 'nice',
    6: 'great',
    7: 'excellent',
    8: 'amazing',
  },
})

export const getters = {
  // TODO: move getMaxScore, getScoreLevels to state? compute once at startGame
  getMaxScore() {
    return this.answers.reduce((acc, word) => {
      // @ts-ignore issue with this ref? says .calculatePoints is undefined here but not outside arrow funcs
      return acc + this.calculatePoints({ word })
    }, 0)
  },
  getMinScore() {
    // 19 4-letter words @ 1 point each, 1 pangram @ min 14 points.
    const minNumWords = 20
    return minNumWords - 1 + 14 // 33
  },
  getScoreLevels() {
    // TODO: fix tests, getMaxScore 50 should produce dups
    // difficulty levels
    const levels = [
      // return [
      0,
      5,
      Math.floor(this.getMaxScore * 0.1),
      Math.floor(this.getMaxScore * 0.2),
      Math.floor(this.getMaxScore * 0.3),
      Math.floor(this.getMaxScore * 0.4),
      Math.floor(this.getMaxScore * 0.5),
      Math.floor(this.getMaxScore * 0.55),
      Math.floor(this.getMaxScore * 0.6),
    ].sort((a, b) => a - b)
    const uniqueLevels = incrementDups(levels)
    const minUniqueLevel = Math.min(...uniqueLevels)
    // ensure there are never any 2 levels with the same points requirements.
    // ensure the first level is 0.
    return uniqueLevels.map((l) => l - minUniqueLevel)
  },
  // as getter so result can be cached
  getCorrectGuesses() {
    return Array.from(this.correctGuesses)
  },
  getProgressIndex() {
    return this.getScoreLevels.filter((v) => v <= this.getUserScore).length - 1
  },
  getProgressPercentage() {
    const progressPercentages = [0, 20, 40, 50, 60, 70, 80, 90, 100]
    return progressPercentages[this.getProgressIndex]
  },
  getUserScore() {
    return this.getCorrectGuesses.reduce((acc, word) => {
      // @ts-ignore issue with this ref? says .calculatePoints is undefined here but not outside arrow funcs
      return acc + this.calculatePoints({ word })
    }, 0)
  },
  getColor() {
    return this.theme === 'light' ? 'white' : '#1c1b22'
  },
  getGameDate() {
    // handle case where gameDate may still be string in localStorage from previous code
    return typeof this.gameDate === 'string'
      ? new Date(this.gameDate)
      : this.gameDate
  },
  getGameDateString() {
    return this.getGameDate.toISOString().split('T')[0]
  },
}
export const actions = {
  showMessage(args) {
    // popup message
  },
  submitGuess({ guess }) {
    if (guess.length < 4) {
      return this.showMessage({
        message: 'too short',
      })
    }
    if (!guess.split('').includes(this.middleLetter)) {
      return this.showMessage({
        message: 'missing middle letter',
      })
    }
    if (!this.answers.includes(guess)) {
      return this.showMessage({
        message: 'not in word list',
      })
    }
    if (this.correctGuesses.has(guess)) {
      return this.showMessage({
        message: 'already found',
      })
    }

    this.correctGuesses.add(guess)
    const points = this.calculatePoints({ word: guess })
    if (this.isPangram({ word: guess })) {
      this.showMessage({
        type: 'success',
        message: `Pangram! +${points}`,
      })
    } else {
      this.showMessage({
        type: 'success',
        message: this.generatePointsMessage({ points }),
      })
    }
  },
  startGame({ allAnswers }) {
    const now = new Date()
    // if it's the same day, don't restart the game
    if (isSameDay(this.getGameDate, now)) return false

    // set gameDate to clear guesses tomorrow
    this.gameDate = now
    // new game so reset guesses
    this.correctGuesses = new Set([])

    const { todaysAnswerObj } = generateAnswerObjs({
      allAnswers,
      gameDate: this.gameDate,
    })

    // set yesterday and todays answers and letters
    const { answers, availableLetters, middleLetter } = todaysAnswerObj

    this.answers = answers
    this.availableLetters = availableLetters
    this.middleLetter = middleLetter
  },
  calculatePoints({ word }) {
    if (word.length === 4) return 1
    if (this.isPangram({ word })) return word.length + 7
    return word.length
  },
  // If word has 7 unique letters, assume pangram. Handles case where it is a pangram from yesterday.
  isPangram({ word }) {
    return new Set(word).size === 7
  },
  // points per word, score is total of points.
  generatePointsMessage({ points }) {
    const message = this.pointsMessages[points] || 'awesome'
    return `points.${message}! +${points}`
  },
  cellClassName({ row, columnIndex }) {
    const word = row[columnIndex + 1]
    if (word && this.isPangram({ word })) {
      return 'pangram'
    }
  },
}
