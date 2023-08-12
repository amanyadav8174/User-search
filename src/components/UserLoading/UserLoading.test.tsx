import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import UserLoading from './UserLoading'

describe('UserLoading Component', () => {
	test('displays "Loading..." text', () => {
		render(<UserLoading />)
		expect(screen.getByText('Loading...')).toBeInTheDocument()
		expect(screen.getByText('Loading...')).toHaveClass('text-primary dark:text-dark-primary text-sml animate-bounce')
	})
})
