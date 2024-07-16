import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeContext } from '../../contexts/ThemeContext'
import Header from './Header'

describe('Header Component', () => {
	const mockToggleDarkMode = jest.fn()

	const renderHeaderInContext = (darkModeValue = false) => {
		return render(
			<ThemeContext.Provider value={{ darkMode: darkModeValue, toggleDarkMode: mockToggleDarkMode }}>
				<Header />
			</ThemeContext.Provider>
		)
	}

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('renders the userfinder title', () => {
		renderHeaderInContext()
		expect(screen.getByText('useerfinder')).toBeInTheDocument()
	})

	it('displays the DARK theme text and dark icon when dark mode is off', () => {
		renderHeaderInContext(false)
		expect(screen.getByText('DARK')).toBeInTheDocument()
		expect(screen.getByAltText('icon-moon')).toBeInTheDocument()
	})

	it('displays the LIGHT theme text and sun icon when dark mode is on', () => {
		renderHeaderInContext(true)
		expect(screen.getByText('LIGHT')).toBeInTheDocument()
		expect(screen.getByAltText('icon-sun')).toBeInTheDocument()
	})

	it('toggles the dark mode when theme text is clicked', () => {
		renderHeaderInContext(false)
		const themeText = screen.getByText('DARK')
		fireEvent.click(themeText)
		expect(mockToggleDarkMode).toHaveBeenCalledTimes(1)
	})

	it('toggles the dark mode when theme icon is clicked', () => {
		renderHeaderInContext(false)
		const themeIcon = screen.getByAltText('icon-moon')
		fireEvent.click(themeIcon)
		expect(mockToggleDarkMode).toHaveBeenCalledTimes(1)
	})
})
