import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomeForm from 'fonoma/components/home/components/HomeForm'

describe('Home', () => {
  it('renders a form', () => {
    render(<HomeForm />)

    const heading = screen.getByRole('button', {
      name: /Convert/i,
    })

    expect(heading).toBeInTheDocument()
  })

  test('Show an error', async () => {
    render(<HomeForm />)

    fireEvent.click(screen.getByText('Convert'))

    await screen.getByTestId('form-error')

    expect(screen.getByTestId('form-error')).toHaveTextContent('enter the amount')
  })
})
