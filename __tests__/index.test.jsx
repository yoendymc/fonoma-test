import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from 'fonoma/pages'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Exchange rate calculator/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
