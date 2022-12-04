import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Footer } from '.'

describe('Footer', () => {
    test('should receive the texts of the elements by the props', () => {
        render(<Footer textCopyright='Tripular Digital - 2022 | Version 1.0.2'/>)

        expect(screen.getByText(/Tripular Digital - 2022 | Version 1.0.2/i)).toBeInTheDocument()

    })
    
})