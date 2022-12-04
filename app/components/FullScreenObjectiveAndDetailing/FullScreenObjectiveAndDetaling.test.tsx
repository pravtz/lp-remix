import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { FullScreenObjectiveAndDetailing } from '.'

describe('FullScreenObjectiveAndDetaling', () => {
    test('should receive the texts of the elements by the props', () => {
        render(<FullScreenObjectiveAndDetailing menssage='anyware' text='title' />)

        //expect(screen.getByText(/Tripular Digital - 2022 | Version 1.0.2/i)).toBeInTheDocument()

    })
    
})