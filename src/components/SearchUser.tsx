import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import UserDetails from './UserDetails'

const SearchUser: React.FC = () => {
	const [userData, setUserData] = useState<any>(null)
	const [error, setError] = useState<string>('')

	const handleSearch = async (username: string) => {
		try {
			const response = await axios.get(`https://api.github.com/users/${username}`)
			setUserData(response.data)
			setError('')
		} catch (error: any) {
			if (error.response && error.response.status === 404) {
				setError('User not found. Try again ...')
			} else {
				setError('Oops! Something went wrong. Please try again later.')
			}
			setUserData(null)
		}
	}

	useEffect(() => {
		const defaultUsername = 'octocat'
		handleSearch(defaultUsername)
	}, [])

	return (
		<div>
			<SearchForm onSearch={handleSearch} />
			<UserDetails
				userData={userData !== null && error === '' ? userData : null}
				error={userData === null && error !== '' ? error : ''}
			/>
		</div>
	)
}

export default SearchUser
