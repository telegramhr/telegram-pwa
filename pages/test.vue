<!-- pages/test.vue -->
<template>
  <div style="padding: 30px; max-width: 800px; margin: 0 auto">
    <h1>GA4 API Test with Service Account</h1>

    <!-- Step 1: Paste JSON Key -->
    <div style="margin-bottom: 30px; padding: 20px; border: 1px solid #ddd">
      <h2>Step 1: Service Account Setup</h2>

      <div style="margin-bottom: 15px">
        <label>GA4 Property ID (9-digit number):</label>
        <input
          v-model="propertyId"
          type="text"
          placeholder="123456789"
          style="width: 100%; padding: 10px; margin: 5px 0"
        />
      </div>

      <div style="margin-bottom: 15px">
        <label>Service Account JSON Key:</label>
        <textarea
          v-model="serviceAccountJson"
          placeholder="Paste your entire service account JSON here..."
          style="
            width: 100%;
            height: 200px;
            padding: 10px;
            margin: 5px 0;
            font-family: monospace;
          "
        ></textarea>
        <small style="color: #666">
          Paste the entire contents of your service account JSON file here
        </small>
      </div>

      <button
        @click="testGA4API"
        :disabled="loading || !serviceAccountJson || !propertyId"
      >
        {{ loading ? 'Testing GA4 API...' : 'Test GA4 API' }}
      </button>
    </div>

    <!-- Results -->
    <div v-if="result" style="margin-top: 20px">
      <h2>Results:</h2>

      <div
        v-if="result.success"
        style="background: #e8f5e8; padding: 15px; border-radius: 5px"
      >
        <h3>✅ Success! Page Views by Source (Last 24hrs):</h3>
        <ul v-if="result.data.length > 0">
          <li
            v-for="item in result.data"
            :key="item.source"
            style="margin: 5px 0"
          >
            <strong>{{ item.source }}:</strong>
            {{ item.pageViews.toLocaleString() }} page views
          </li>
        </ul>
        <p v-else>No page view events found in the last 24 hours.</p>
        <p>
          <strong>Total:</strong> {{ result.total?.toLocaleString() || 0 }} page
          views
        </p>

        <div style="margin-top: 10px; font-size: 12px; color: #666">
          <p>✅ Token generated successfully</p>
          <p>✅ GA4 API connection working</p>
          <p>✅ Property access confirmed</p>
        </div>
      </div>

      <div
        v-else
        style="background: #ffe8e8; padding: 15px; border-radius: 5px"
      >
        <h3>❌ Error:</h3>
        <p>
          <strong>{{ result.error }}</strong>
        </p>

        <div style="margin-top: 10px">
          <h4>Troubleshooting:</h4>
          <ul style="font-size: 14px">
            <li v-if="result.step === 'json_parse'">
              ❌ Invalid JSON format - Check your service account JSON is valid
            </li>
            <li v-if="result.step === 'token_generation'">
              ❌ Token generation failed - Check your service account JSON keys
            </li>
            <li
              v-if="
                result.step === 'api_call' && result.details?.includes('403')
              "
            >
              ❌ Permission denied - Add your service account email to GA4 as
              Viewer
            </li>
            <li
              v-if="
                result.step === 'api_call' && result.details?.includes('400')
              "
            >
              ❌ Bad request - Check your Property ID is correct (9-digit
              number)
            </li>
            <li
              v-if="
                result.step === 'api_call' && result.details?.includes('401')
              "
            >
              ❌ Authentication failed - Check your service account credentials
            </li>
          </ul>

          <details style="margin-top: 10px">
            <summary>Technical Details</summary>
            <pre
              style="
                background: #f5f5f5;
                padding: 10px;
                font-size: 12px;
                overflow: auto;
              "
              >{{ JSON.stringify(result.details, null, 2) }}</pre
            >
          </details>
        </div>
      </div>
    </div>

    <!-- Instructions -->
    <div
      style="
        margin-top: 30px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 5px;
      "
    >
      <h3>Setup Instructions:</h3>
      <ol>
        <li>
          <strong>Property ID:</strong> GA4 → Admin → Property Settings →
          Property ID (9-digit number)
        </li>
        <li>
          <strong>Service Account:</strong> Google Cloud Console → IAM → Service
          Accounts → Create → Download JSON
        </li>
        <li>
          <strong>GA4 Permission:</strong> GA4 → Admin → Property Access
          Management → Add your service account email as Viewer
        </li>
        <li>
          <strong>Enable API:</strong> Google Cloud Console → APIs & Services →
          Enable "Google Analytics Data API"
        </li>
      </ol>

      <p
        style="
          margin-top: 15px;
          padding: 10px;
          background: #fff3cd;
          border-radius: 3px;
        "
      >
        <strong>⚠️ Security Note:</strong> This is for testing only! In
        production, never expose service account keys in frontend code.
      </p>
    </div>
  </div>
</template>

<script setup>
const propertyId = ref('')
const serviceAccountJson = ref('')
const loading = ref(false)
const result = ref(null)

// JWT generation functions (simplified)
const base64UrlEncode = (str) => {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

const generateJWT = async (serviceAccount) => {
  try {
    const now = Math.floor(Date.now() / 1000)
    const exp = now + 3600 // 1 hour

    const header = {
      alg: 'RS256',
      typ: 'JWT',
    }

    const payload = {
      iss: serviceAccount.client_email,
      scope: 'https://www.googleapis.com/auth/analytics.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      exp: exp,
      iat: now,
    }

    const encodedHeader = base64UrlEncode(JSON.stringify(header))
    const encodedPayload = base64UrlEncode(JSON.stringify(payload))
    const unsignedToken = `${encodedHeader}.${encodedPayload}`

    // Import the private key
    const privateKey = await crypto.subtle.importKey(
      'pkcs8',
      new TextEncoder().encode(serviceAccount.private_key),
      {
        name: 'RSASSA-PKCS1-v1_5',
        hash: 'SHA-256',
      },
      false,
      ['sign']
    )

    // Sign the token
    const signature = await crypto.subtle.sign(
      'RSASSA-PKCS1-v1_5',
      privateKey,
      new TextEncoder().encode(unsignedToken)
    )

    const encodedSignature = base64UrlEncode(
      String.fromCharCode(...new Uint8Array(signature))
    )

    return `${unsignedToken}.${encodedSignature}`
  } catch (error) {
    throw new Error(`JWT generation failed: ${error.message}`)
  }
}

const getAccessToken = async (jwt) => {
  const response = await $fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })

  return response.access_token
}

const testGA4API = async () => {
  loading.value = true
  result.value = null

  try {
    // Step 1: Parse service account JSON
    let serviceAccount
    try {
      serviceAccount = JSON.parse(serviceAccountJson.value)
    } catch (error) {
      throw { step: 'json_parse', message: 'Invalid JSON format' }
    }

    // Step 2: Generate JWT and get access token
    let accessToken
    try {
      const jwt = await generateJWT(serviceAccount)
      accessToken = await getAccessToken(jwt)
    } catch (error) {
      throw { step: 'token_generation', message: error.message }
    }

    // Step 3: Make GA4 API call
    try {
      const apiUrl = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId.value}:runReport`

      const requestBody = {
        dateRanges: [
          {
            startDate: 'yesterday',
            endDate: 'today',
          },
        ],
        dimensions: [{ name: 'source' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: {
              value: 'page_view',
            },
          },
        },
        orderBys: [
          {
            metric: { metricName: 'eventCount' },
            desc: true,
          },
        ],
        limit: 20,
      }

      const response = await $fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: requestBody,
      })

      // Process results
      const processedData =
        response.rows?.map((row) => ({
          source: row.dimensionValues[0]?.value || 'Unknown',
          pageViews: parseInt(row.metricValues[0]?.value || 0),
        })) || []

      const total = processedData.reduce((sum, item) => sum + item.pageViews, 0)

      result.value = {
        success: true,
        data: processedData,
        total: total,
        serviceAccountEmail: serviceAccount.client_email,
      }
    } catch (error) {
      throw {
        step: 'api_call',
        message: error.message || 'GA4 API call failed',
        details: error.data || error,
      }
    }
  } catch (error) {
    console.error('GA4 Test Error:', error)

    result.value = {
      success: false,
      error: error.message || 'Unknown error',
      step: error.step || 'unknown',
      details: error.details || error,
    }
  } finally {
    loading.value = false
  }
}

// Auto-fill Property ID if found in localStorage
onMounted(() => {
  const savedPropertyId = localStorage.getItem('ga4-property-id')
  if (savedPropertyId) {
    propertyId.value = savedPropertyId
  }
})

// Save Property ID to localStorage when changed
watch(propertyId, (newValue) => {
  if (newValue) {
    localStorage.setItem('ga4-property-id', newValue)
  }
})
</script>
