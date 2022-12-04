import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Header } from '.'

describe('Header', () => {
    test('should receive the texts of the elements by the props', () => {
        render(<Header  
            title='Procurando um Landing Page de resultados?'
            subtitle='Sua Landing Page está aqui'
            mensageCTAButoon='Agende agora mesmo!'
        />)

        expect(screen.getByRole('heading', {level:1})).toHaveTextContent('Procurando um Landing Page de resultados?')
        expect(screen.getByRole('heading', {level:2})).toHaveTextContent('Sua Landing Page está aqui')

        expect(screen.getByRole('button', {name:/Agende agora mesmo!/i})).toBeInTheDocument()
    })
    
})