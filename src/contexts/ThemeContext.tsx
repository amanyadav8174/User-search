import React, { createContext, useState, ReactNode, useEffect } from 'react'

interface ThemeContextType {
	darkMode: boolean
	toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false)

	const toggleDarkMode = () => {
		setDarkMode(!darkMode)
	}

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode)
	}, [darkMode])

	return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}
