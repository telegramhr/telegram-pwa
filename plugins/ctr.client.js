// plugins/article-viewport-tracker.client.js

export default ({ app }) => {
  // Only run on client side
  if (process.server) return

  class ArticleViewportTracker {
    constructor() {
      this.trackedArticles = new Set()
      this.observer = null
      this.mutationObserver = null
      this.isInitialized = false
      this.currentPath = ''
      this.initTimeout = null

      // Debounce navigation events
      this.debouncedReset = this.debounce(this.resetForNewPage.bind(this), 200)
      this.debouncedObserveNew = this.debounce(
        this.observeNewArticles.bind(this),
        100
      )

      // Bind methods to preserve context
      this.handleRouteChange = this.handleRouteChange.bind(this)
      this.handlePopState = this.handlePopState.bind(this)
      this.handleBeforeUnload = this.handleBeforeUnload.bind(this)
      this.handleMutations = this.handleMutations.bind(this)
    }

    init() {
      if (this.isInitialized && this.currentPath === window.location.pathname) {
        return // Already initialized for this page
      }

      this.ensureDataLayer()
      this.setupIntersectionObserver()
      this.setupMutationObserver()

      // Clear any existing timeout
      if (this.initTimeout) {
        clearTimeout(this.initTimeout)
      }

      // Use requestAnimationFrame for better performance
      this.initTimeout = setTimeout(() => {
        requestAnimationFrame(() => this.observeArticles())
      }, 50)

      this.currentPath = window.location.pathname
      this.isInitialized = true
    }

    ensureDataLayer() {
      if (typeof window !== 'undefined' && !Array.isArray(window.dataLayer)) {
        window.dataLayer = []
      }
    }

    setupIntersectionObserver() {
      this.disconnectIntersectionObserver()

      const options = {
        threshold: [0.1, 0.5],
        rootMargin: '-50px 0px -50px 0px',
      }

      this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        options
      )
    }

    setupMutationObserver() {
      this.disconnectMutationObserver()

      this.mutationObserver = new MutationObserver(this.handleMutations)

      // Observe the entire document for changes
      this.mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-id', 'role'], // Only watch relevant attributes
      })
    }

    handleMutations(mutations) {
      let shouldCheckForNewArticles = false
      let shouldCheckForNavigation = false

      mutations.forEach((mutation) => {
        // Check for new articles added to DOM
        if (mutation.type === 'childList') {
          // Check if any added nodes are articles or contain articles
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Check if the node itself is an article
              if (this.isArticleElement(node)) {
                shouldCheckForNewArticles = true
              }
              // Check if the node contains articles
              else if (
                node.querySelector &&
                node.querySelector('[role="article"][data-id]')
              ) {
                shouldCheckForNewArticles = true
              }
            }
          })
        }

        // Check for attribute changes that might indicate new articles
        if (mutation.type === 'attributes') {
          const target = mutation.target
          if (this.isArticleElement(target)) {
            shouldCheckForNewArticles = true
          }
        }

        // Check for potential SPA navigation (title changes, etc.)
        if (
          mutation.type === 'childList' &&
          (mutation.target === document.head ||
            mutation.target.tagName === 'TITLE')
        ) {
          shouldCheckForNavigation = true
        }
      })

      // Debounce the operations to avoid excessive calls
      if (shouldCheckForNewArticles) {
        this.debouncedObserveNew()
      }

      if (
        shouldCheckForNavigation &&
        window.location.pathname !== this.currentPath
      ) {
        this.debouncedReset()
      }
    }

    isArticleElement(element) {
      return (
        element.getAttribute &&
        element.getAttribute('role') === 'article' &&
        element.getAttribute('data-id')
      )
    }

    handleIntersection(entries) {
      requestAnimationFrame(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.trackedArticles.has(entry.target)) {
            this.trackArticleView(entry.target)
          }
        })
      })
    }

    trackArticleView(articleElement) {
      this.trackedArticles.add(articleElement)

      const articleId = articleElement.getAttribute('data-id')
      if (!articleId) return

      const position = this.getArticlePosition(articleElement)

      const eventData = {
        event: 'article_view',
        article_id: articleId,
        article_position: position,
        page_url: window.location.pathname,
        timestamp: Date.now(),
      }

      try {
        window.dataLayer.push(eventData)
        console.log('✅ Article viewed:', eventData)
      } catch (error) {
        console.warn('Failed to track article view:', error)
      }
    }

    getArticlePosition(articleElement) {
      if (!this.cachedArticles || this.cachedArticles.length === 0) {
        this.cachedArticles = Array.from(
          document.querySelectorAll('[role="article"][data-id]')
        )
      }

      return this.cachedArticles.indexOf(articleElement) + 1
    }

    observeArticles() {
      const articles = document.querySelectorAll('[role="article"][data-id]')

      articles.forEach((article) => {
        const articleId = article.getAttribute('data-id')
        if (articleId && !this.trackedArticles.has(article)) {
          this.observer?.observe(article)
        }
      })

      // Update cached articles
      this.cachedArticles = Array.from(articles)
    }

    observeNewArticles() {
      // Find articles that aren't being observed yet
      const articles = document.querySelectorAll('[role="article"][data-id]')
      let newArticlesFound = false

      articles.forEach((article) => {
        const articleId = article.getAttribute('data-id')
        if (articleId && !this.trackedArticles.has(article)) {
          // Check if we're already observing this element
          const isBeingObserved = Array.from(this.trackedArticles).includes(
            article
          )

          if (!isBeingObserved) {
            this.observer?.observe(article)
            newArticlesFound = true
          }
        }
      })

      // Update cached articles if new ones were found
      if (newArticlesFound) {
        this.cachedArticles = Array.from(articles)
      }
    }

    disconnectIntersectionObserver() {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }
    }

    disconnectMutationObserver() {
      if (this.mutationObserver) {
        this.mutationObserver.disconnect()
        this.mutationObserver = null
      }
    }

    destroy() {
      // Clear all timeouts
      if (this.initTimeout) {
        clearTimeout(this.initTimeout)
        this.initTimeout = null
      }

      // Remove event listeners
      this.removeEventListeners()

      // Cleanup observers
      this.disconnectIntersectionObserver()
      this.disconnectMutationObserver()

      // Clear data
      this.trackedArticles.clear()
      this.cachedArticles = null
      this.isInitialized = false
      this.currentPath = ''
    }

    resetForNewPage() {
      // Clear tracked articles and cache
      this.trackedArticles.clear()
      this.cachedArticles = null
      this.currentPath = window.location.pathname

      // Reset intersection observer (mutation observer continues running)
      this.setupIntersectionObserver()

      requestAnimationFrame(() => {
        this.observeArticles()
      })
    }

    // Route change handlers
    handleRouteChange(to, from) {
      if (to.path !== from.path) {
        this.debouncedReset()
      }
    }

    handlePopState() {
      // Check if URL actually changed (some popstate events don't change URL)
      if (window.location.pathname !== this.currentPath) {
        this.debouncedReset()
      }
    }

    handleBeforeUnload() {
      this.destroy()
    }

    handleClick = (event) => {
      const target = event.target
      console.log(target)
    }

    // Utility methods
    debounce(func, wait) {
      let timeout
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout)
          func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
      }
    }

    addEventListeners() {
      if (typeof window === 'undefined') return

      // Click listener
      document.addEventListener('click', this.handleClick)
      // Browser navigation events (keep as fallback)
      window.addEventListener('popstate', this.handlePopState)
      window.addEventListener('beforeunload', this.handleBeforeUnload)

      // Optional: Listen for focus events to catch tab switches
      window.addEventListener('focus', () => {
        // Check if URL changed while tab was not focused
        if (window.location.pathname !== this.currentPath) {
          this.debouncedReset()
        }
      })
    }

    removeEventListeners() {
      if (typeof window === 'undefined') return

      window.removeEventListener('popstate', this.handlePopState)
      window.removeEventListener('beforeunload', this.handleBeforeUnload)
      window.removeEventListener('focus', this.handlePopState)
    }
  }

  // Create tracker instance
  const articleTracker = new ArticleViewportTracker()

  // Optimized initialization
  const initTracker = () => {
    if (document.readyState === 'loading') {
      document.addEventListener(
        'DOMContentLoaded',
        () => {
          requestAnimationFrame(() => articleTracker.init())
        },
        { once: true }
      )
    } else {
      requestAnimationFrame(() => articleTracker.init())
    }
  }

  // Setup route change handling
  if (app?.router) {
    app.router.afterEach(articleTracker.handleRouteChange)
  }

  // Setup event listeners
  articleTracker.addEventListeners()

  // Expose for debugging (only in development)
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    window.articleTracker = articleTracker
  }

  // Initialize
  initTracker()

  // Cleanup on app destroy
  if (app?.hook) {
    app.hook('app:beforeDestroy', () => {
      articleTracker.destroy()
    })
  }
}
