import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import App from './App'

// Mock the fetchData function to prevent actual API calls
vi.mock('@/utils/api', () => ({
  fetchData: vi.fn().mockReturnValue(new Promise(() => {})) // Never resolves to keep loading state
}))

describe('<App />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render the App component', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /Response/i,
        level: 1
      })
    ).toBeInTheDocument()
  })

  it('should show loading state initially', () => {
    render(<App />)

    expect(screen.getByText('Loading posts...')).toBeInTheDocument()
  })
})
