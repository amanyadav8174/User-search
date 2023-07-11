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
		<form className='' onSubmit={handleSubmit}>
			<img className='' src={search} alt='icon-search' />
			<input
				ref={inputRef}
				className=''
				type='text'
				placeholder={isWideEnough ? 'Type / to search GitHub user...' : 'Search GitHub username...'}
				aria-label='Search GitHub username…'
				value={userName}
				onChange={e => setUserName(e.target.value)}
				required
			/>
			<button className='' type='submit'>
				Search
			</button>
		</form>
	)
}

export default SearchForm
