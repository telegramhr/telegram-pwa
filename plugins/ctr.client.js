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
      this.clickHandlerTarget = null
      this.browserListenersSetup = false

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
      this.handleClick = this.handleClick.bind(this)
      this.handleFocus = this.handleFocus.bind(this)
    }

    init() {
      if (this.isInitialized && this.currentPath === window.location.pathname) {
        return // Already initialized for this page
      }

      this.ensureDataLayer()
      this.setupIntersectionObserver()
      this.setupMutationObserver()
      this.setupEventListeners() // Re-attach event listeners

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

    getTargetNode() {
      return document.querySelector('.main-container') || document.body
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
      const targetNode = this.getTargetNode()
      this.mutationObserver.observe(targetNode, {
        childList: true,
        subtree: true,
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
      const widgetType = articleElement.getAttribute('data-widget-type')
      const widgetPosition = articleElement.getAttribute('data-widget-position')
      if (!articleId) return

      const position = this.getArticlePosition(articleElement)

      const eventData = {
        event: 'featured_article',
        action: 'view',
        article_id: articleId,
        article_position: position,
        widget_type: widgetType,
        widget_position: widgetPosition,
        pageUrl: window.location.pathname,
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
        const targetNode = this.getTargetNode()
        this.cachedArticles = Array.from(
          targetNode.querySelectorAll('[role="article"][data-id]')
        )
      }

      return this.cachedArticles.indexOf(articleElement) + 1
    }

    observeArticles() {
      const targetNode = this.getTargetNode()
      const articles = targetNode.querySelectorAll('[role="article"][data-id]')

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
      const targetNode = this.getTargetNode()
      const articles = targetNode.querySelectorAll('[role="article"][data-id]')
      let newArticlesFound = false

      articles.forEach((article) => {
        const articleId = article.getAttribute('data-id')
        if (articleId && !this.trackedArticles.has(article)) {
          // Check if we're already observing this element
          if (!this.trackedArticles.has(article)) {
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
      console.log('🔄 Resetting for new page:', window.location.pathname)

      // Clear tracked articles and cache
      this.trackedArticles.clear()
      this.cachedArticles = null
      this.currentPath = window.location.pathname

      // Re-setup everything for new page
      this.setupIntersectionObserver()
      this.setupMutationObserver()
      this.setupEventListeners() // Re-attach click handlers to new container

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.observeArticles()
          console.log('📊 Observing articles on new page')
        })
      }, 100)
    }

    // Route change handlers
    handleRouteChange(to, from) {
      if (to.path !== from.path) {
        console.log('🔀 Route changed:', from.path, '→', to.path)
        this.debouncedReset()
      }
    }

    checkAndHandleNavigation() {
      if (window.location.pathname !== this.currentPath) {
        this.debouncedReset()
      }
    }

    handlePopState() {
      // Check if URL actually changed (some popstate events don't change URL)
      this.checkAndHandleNavigation()
    }

    handleBeforeUnload() {
      this.destroy()
    }

    handleFocus() {
      // Check if URL changed while tab was not focused
      this.checkAndHandleNavigation()
    }

    handleClick(event) {
      const articleElement = event.target.closest('[role="article"]')

      if (articleElement) {
        const dataId = articleElement.getAttribute('data-id')
        const position = this.getArticlePosition(articleElement)
        const widgetType = articleElement.getAttribute('data-widget-type')
        const widgetPosition = articleElement.getAttribute(
          'data-widget-position'
        )

        const eventData = {
          event: 'featured_article',
          action: 'click',
          article_position: position,
          article_id: dataId,
          widget_type: widgetType,
          widget_position: widgetPosition,
          pageUrl: this.currentPath,
          timestamp: Date.now(),
        }

        window.dataLayer.push(eventData)
        console.log('✅ Article clicked:', eventData)
      }
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

    setupEventListeners() {
      // Remove old listeners first
      this.removeEventListeners()

      if (typeof window === 'undefined') return

      // Get fresh reference to container
      const targetNode = this.getTargetNode()

      // Store reference for removal later
      this.clickHandlerTarget = targetNode

      // Add click listener to current container
      targetNode.addEventListener('click', this.handleClick, true)
    }

    setupBrowserListeners() {
      if (typeof window === 'undefined') return
      if (this.browserListenersSetup) return

      // Browser navigation events (keep as fallback)
      window.addEventListener('popstate', this.handlePopState)
      window.addEventListener('beforeunload', this.handleBeforeUnload)
      window.addEventListener('focus', this.handleFocus)
      this.browserListenersSetup = true
    }

    removeEventListeners() {
      if (typeof window === 'undefined') return

      // Remove click handler from stored target
      if (this.clickHandlerTarget) {
        this.clickHandlerTarget.removeEventListener(
          'click',
          this.handleClick,
          true
        )
        this.clickHandlerTarget = null
      }

      window.removeEventListener('popstate', this.handlePopState)
      window.removeEventListener('beforeunload', this.handleBeforeUnload)
      window.removeEventListener('focus', this.handleFocus)
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

  // Setup browser listeners
  articleTracker.setupBrowserListeners()

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
