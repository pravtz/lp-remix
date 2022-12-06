import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { FullScreenObjectiveAndDetailing } from '.'

describe('FullScreenObjectiveAndDetaling', () => {
  test('should receive the texts of the elements by the props', () => {
    render(
      <FullScreenObjectiveAndDetailing
        menssage="anyware"
        text="title"
        image={{
          path: 'aaa.png',
          titleImage: 'anyware'
        }}
      />
    )
    expect(screen.getByTestId('background')).toHaveStyle(
      `background-image: url("aaa.png")`
    )
    expect(screen.getByTestId('background')).toHaveAttribute('title', 'anyware')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('title')
    expect(screen.getByText(/anyware/i)).toBeInTheDocument()
  })
})
