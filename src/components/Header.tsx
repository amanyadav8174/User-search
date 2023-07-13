import React, { useContext } from 'react'
import Sun from '../assets/icon-sun.svg'
import Moon from '../assets/icon-moon.svg'
import { ThemeContext } from '../contexts/ThemeContext'

const Header = () => {
	const themeContext = useContext(ThemeContext)

	if (!themeContext) {
		return null
	}

	const { darkMode, toggleDarkMode } = themeContext

	const handleThemeToggle = () => {
		toggleDarkMode()
	}

	return (
		<header className='flex flex-wrap justify-between pt-8 pb-9'>
			<a href='/' className='text-2xl font-bold text-tertiary dark:text-dark-primary'>
				devfinder
			</a>
			<div className='flex items-center justify-center gap-4 hover:cursor-pointer' onClick={handleThemeToggle}>
				{!themeContext?.darkMode ? (
					<>
						<span className='tracking-wider-custom text-xs font-normal  text-primary'>DARK</span>
						<img className='w-5 h-5' src={Moon} alt='icon-moon' />
					</>
				) : (
					<>
						<span className='tracking-wider-custom text-xs font-normal dark:text-dark-primary'>LIGHT</span>
						<img className='w-5 h-5' src={Sun} alt='icon-sun' />
					</>
				)}
			</div>
		</header>
	)
}

export default Header
