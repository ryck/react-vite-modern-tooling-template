// Define the type for a single post from JSONPlaceholder API
export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface FetchDataOptions {
  timeout?: number
  signal?: AbortSignal
}

/**
 * Fetches data from any API endpoint
 * @param endpoint - The API endpoint to fetch from
 * @param options - Optional configuration including timeout and abort signal
 * @returns Promise that resolves to data of type T
 * @throws Error if the request fails, times out, or returns a non-ok status
 */
export const fetchData = async <T = unknown>(
  endpoint: string,
  options: FetchDataOptions = {}
): Promise<T> => {
  const { timeout = 10000, signal } = options

  // Create AbortController for timeout if no signal provided
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  // Use provided signal or our timeout controller
  const fetchSignal = signal || controller.signal

  try {
    const response = await fetch(endpoint, {
      signal: fetchSignal
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: T = await response.json()
    return data
  } catch (error) {
    clearTimeout(timeoutId)

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout or cancelled')
      }
      throw error
    }

    throw new Error('An unknown error occurred')
  }
}
