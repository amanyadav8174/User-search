import React, { useState, useRef, useEffect } from 'react'
import search from '../assets/icon-search.svg'

interface SearchFormProps {
	onSearch: (userName: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
	const [userName, setUserName] = useState('')
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [isWideEnough, setIsWideEnough] = useState(window.matchMedia('(min-width: 400px)').matches)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSearch(userName)
		inputRef.current?.blur()
	}

	useEffect(() => {
		const detectKeySearch = (e: KeyboardEvent) => {
			if (e.key === '/') {
				inputRef.current?.focus()
				e.preventDefault()
			}
		}

		document.addEventListener('keydown', detectKeySearch)

		return () => {
			document.removeEventListener('keydown', detectKeySearch)
		}
	}, [])

	useEffect(() => {
		const handleResize = (e: MediaQueryListEvent) => {
			setIsWideEnough(e.matches)
		}

		const mediaQueryList = window.matchMedia('(min-width: 400px)')
		mediaQueryList.addEventListener('change', handleResize)
		setIsWideEnough(mediaQueryList.matches)

		return () => {
			mediaQueryList.removeEventListener('change', handleResize)
		}
	}, [])

	const searchInputPlaceholder = isWideEnough ? 'Type / to search GitHub user...' : 'Search GitHub username...'

	return (
		<form
			className='flex items-center gap-2 w-full mb-4 md:mb-6 h-15 rounded-[15px] bg-foreground shadow-custom dark:shadow-none dark:bg-dark-foreground'
			onSubmit={handleSubmit}>
			<img className='block w-5 h-5 ml-2 md:w-6 md:h-6 md:ml-8 md:mr-2' src={search} alt='icon-search' />
			<input
				ref={inputRef}
				className='w-full pt-5 md:pt-6 pb-4 md:pb-6 pl-1 text-xs md:text-base text-primary leading-25 border-0 outline-none  placeholder-primary dark:bg-dark-foreground dark:text-dark-primary dark:placeholder-dark-primary hover:cursor-pointer'
				type='text'
				placeholder={searchInputPlaceholder}
				aria-label='Search GitHub username…'
				value={userName}
				onChange={e => setUserName(e.target.value)}
				required
			/>
			<button
				className='mr-2 text-sml md:text-sm font-bold px-2 md:px-5 py-3 md:py-4 bg-blue rounded-[10px] text-foreground
        transition duration-300
        hover:cursor-pointer
        hover:bg-lightBlue
        transform active:scale-95'
				type='submit'>
				Search
			</button>
		</form>
	)
}

export default SearchForm
