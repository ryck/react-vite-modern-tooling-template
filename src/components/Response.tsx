import { useEffect, useState } from 'react'

import { fetchData as apiFetchData, type Post } from '@/utils/api'

const Response = () => {
  const [data, setData] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchDataHandler = async () => {
    try {
      setLoading(true)
      const posts = await apiFetchData<Post[]>(
        'https://jsonplaceholder.typicode.com/posts',
        { timeout: 5000 }
      )
      setData(posts)
      setError(null)
      console.log(posts)
    } catch (error) {
      console.error('Error fetching data:', error)
      setError(
        error instanceof Error ? error.message : 'An unknown error occurred'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDataHandler()
  }, [])

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        API Response
      </h1>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="text-lg text-blue-600">
            <span className="mr-2">⏳</span>
            Loading posts...
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-6 text-center">
          <div className="text-lg font-medium text-red-800">
            <span className="mr-2">❌</span>
            Error: {error}
          </div>
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-4">
          <ul className="space-y-3">
            {data.map((element) => (
              <li
                key={element.id}
                className="group rounded-lg border border-gray-200 bg-linear-to-r from-blue-50 to-indigo-50 p-4 shadow-sm transition-all duration-300 hover:border-blue-300 hover:from-blue-100 hover:to-indigo-100 hover:shadow-md"
              >
                <div className="flex items-start space-x-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                    {element.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 transition-colors duration-200 group-hover:text-blue-800">
                      {element.title}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Response
