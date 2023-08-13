import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchForm from '../SearchForm/SearchForm'
import UserDetails from '../UserDetails/UserDetails'
import UserLoading from '../UserLoading/UserLoading'

interface User {
	avatar_url: string
	login: string
	name: string
	bio: string | null
	created_at: string
	public_repos: number
	followers: number
	following: number
	location?: string
	blog?: string
	twitter_username?: string
	company?: string
}

const SearchUser: React.FC = () => {
	const [userData, setUserData] = useState<User | null>(null)
	const [error, setError] = useState<string>('')
	const [loading, setLoading] = useState(false)

	const handleSearch = async (username: string) => {
		setLoading(true)
		try {
			const response = await axios.get(`https://api.github.com/users/${username}`)
			setUserData(response.data)
			setError('')
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					setError('User not found. Try again ...')
				} else {
					setError('Oops! Something went wrong. Please try again later.')
				}
				setUserData(null)
			}
		} finally {
			setTimeout(() => {
				setLoading(false)
			}, 1000)
		}
	}

	useEffect(() => {
		const defaultUsername = 'octocat'
		handleSearch(defaultUsername)
	}, [])

	return (
		<div>
			<SearchForm onSearch={handleSearch} />
			{loading ? <UserLoading /> : <UserDetails userData={userData} error={error} />}
		</div>
	)
}

export default SearchUser
