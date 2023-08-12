import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchForm from './SearchForm'

describe('SearchForm Component', () => {
	const onSearchMock = jest.fn()

	beforeEach(() => {
		window.matchMedia = jest.fn().mockImplementation(query => ({
			matches: query === '(min-width: 400px)',
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
		}))
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('renders with the correct placeholder based on window width', () => {
		render(<SearchForm onSearch={onSearchMock} />)
		const inputEl = screen.getByPlaceholderText('Type / to search GitHub user...')
		expect(inputEl).toBeInTheDocument()
	})

	it('calls onSearch with correct username on form submission', () => {
		render(<SearchForm onSearch={onSearchMock} />)
		const inputEl = screen.getByPlaceholderText('Type / to search GitHub user...') as HTMLInputElement
		fireEvent.change(inputEl, { target: { value: 'testUser' } })
		fireEvent.submit(screen.getByRole('form', { name: /search form/i }))
		expect(onSearchMock).toHaveBeenCalledWith('testUser')
	})

	it('focuses the input field when "/" key is pressed', () => {
		render(<SearchForm onSearch={onSearchMock} />)
		fireEvent.keyDown(document, { key: '/' })
		const inputEl = screen.getByPlaceholderText('Type / to search GitHub user...')
		expect(inputEl).toHaveFocus()
	})

	it('updates username state when input changes', () => {
		render(<SearchForm onSearch={onSearchMock} />)
		const inputEl = screen.getByPlaceholderText('Type / to search GitHub user...') as HTMLInputElement
		fireEvent.change(inputEl, { target: { value: 'newUser' } })
		expect(inputEl.value).toBe('newUser')
	})
})
