import React, { useContext } from 'react'
import Sun from '../../assets/icon-sun.svg'
import Moon from '../../assets/icon-moon.svg'
import { ThemeContext } from '../../contexts/ThemeContext'

const Header = () => {
	const themeContext = useContext(ThemeContext)

	if (!themeContext) {
		return null
	}

	const { darkMode, toggleDarkMode } = themeContext

	const handleThemeToggle = () => {
		toggleDarkMode()
	}

	const isDarkMode = darkMode
	const themeName = isDarkMode ? 'LIGHT' : 'DARK'
	const iconSrc = isDarkMode ? Sun : Moon
	const iconAlt = isDarkMode ? 'icon-sun' : 'icon-moon'
	const textColorClass = isDarkMode ? 'dark:text-dark-primary' : 'text-primary'

	return (
		<header className='flex flex-wrap justify-between pt-8 pb-9'>
			<a href='/' className='text-2xl font-bold text-tertiary dark:text-dark-primary'>
				devfinder
			</a>
			<div className='flex items-center justify-center gap-4 hover:cursor-pointer' onClick={handleThemeToggle}>
				<span className={`tracking-wider-custom text-xs font-normal ${textColorClass}`}>{themeName}</span>
				<img className='w-5 h-5' src={iconSrc} alt={iconAlt} />
			</div>
		</header>
	)
}

export default Header
