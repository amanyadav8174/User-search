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
		<header className=''>
			<a href='/' className=''>
				devfinder
			</a>
			<div className='' onClick={handleThemeToggle}>
				{!themeContext?.darkMode ? (
					<>
						<span className=''>DARK</span>
						<img className='' src={Moon} alt='icon-moon' />
					</>
				) : (
					<>
						<span className=''>LIGHT</span>
						<img className='' src={Sun} alt='icon-sun' />
					</>
				)}
			</div>
		</header>
	)
}

export default Header
