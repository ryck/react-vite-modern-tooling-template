import { describe, it, expect, vi } from 'vitest'

import { fetchData } from './api'

// Mock fetch
global.fetch = vi.fn()

describe('fetchData', () => {
  it('should fetch data successfully', async () => {
    const mockData = [{ id: 1, title: 'Test', body: 'Test body', userId: 1 }]

    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData)
    } as Response)

    const result = await fetchData('https://api.example.com/posts')

    expect(result).toEqual(mockData)
  })

  it('should throw error when request fails', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 404
    } as Response)

    await expect(fetchData('https://api.example.com/posts')).rejects.toThrow(
      'HTTP error! status: 404'
    )
  })

  it('should timeout after specified time', async () => {
    vi.mocked(fetch).mockImplementation(() => {
      return new Promise((_, reject) => {
        setTimeout(() => {
          const error = new Error('AbortError')
          error.name = 'AbortError'
          reject(error)
        }, 50)
      })
    })

    await expect(
      fetchData('https://api.example.com/posts', { timeout: 100 })
    ).rejects.toThrow('Request timeout or cancelled')
  })
})
