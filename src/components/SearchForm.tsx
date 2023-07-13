import React, { useState, useRef, useEffect } from 'react'
import search from '../assets/icon-search.svg'
import { useMedia } from 'react-use-media'
interface SearchFormProps {
	onSearch: (userName: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
	const [userName, setUserName] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)

	const isWideEnough = useMedia({ minWidth: 400 })

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSearch(userName)
		inputRef.current?.blur()
	}

	const detectKeySearch = (e: KeyboardEvent) => {
		if (e.key === '/') {
			inputRef.current?.focus()
			e.preventDefault()
		}
	}
	useEffect(() => {
		document.addEventListener('keydown', detectKeySearch)
		return () => {
			document.removeEventListener('keydown', detectKeySearch)
		}
	}, [inputRef])

	return (
		<form
			className='flex items-center gap-2 w-full mb-4 h-15 rounded-[15px] bg-foreground shadow-custom dark:shadow-none dark:bg-dark-foreground'
			onSubmit={handleSubmit}>
			<img className='block w-5 h-5 ml-2' src={search} alt='icon-search' />
			<input
				ref={inputRef}
				className='w-full pt-5 pb-4 pl-1 text-xs text-primary leading-25 border-0 outline-none  placeholder-primary dark:bg-dark-foreground dark:text-dark-primary dark:placeholder-dark-primary hover:cursor-pointer'
				type='text'
				placeholder={isWideEnough ? 'Type / to search GitHub user...' : 'Search GitHub username...'}
				aria-label='Search GitHub username…'
				value={userName}
				onChange={e => setUserName(e.target.value)}
				required
			/>
			<button
				className='mr-2 text-sml font-bold pl-2 pr-2 pt-3 pb-3 bg-blue rounded-[10px] text-foreground
				transition duration-300
				hover:cursor-pointer
				hover:bg-lightBlue'
				type='submit'>
				Search
			</button>
		</form>
	)
}

export default SearchForm
