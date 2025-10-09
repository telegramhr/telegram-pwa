export default function ({ $axios, app }) {
  $axios.onError((error) => {
    console.error('=== AXIOS ERROR ===')
    console.error('URL:', error.config?.url)
    console.error('Method:', error.config?.method)
    console.error('Status:', error.response?.status)
    console.error('Component causing error:', app.context?.route?.name)
    console.trace('Call stack:')

    // Log response data if available
    if (error.response?.data) {
      console.error('Server response:', error.response.data)
    }
  })
}
