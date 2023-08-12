import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import UserDetails from './UserDetails'

type UserDataType = {
	avatar_url: string
	login: string
	name: string
	created_at: string
	bio: string | null
	public_repos: number
	followers: number
	following: number
	location: string
	blog: string
	twitter_username: string
	company: string
} | null

const MOCK_USER_DATA = {
	avatar_url: 'test-avatar.jpg',
	login: 'testUser',
	name: 'Test User',
	created_at: '2023-01-01T12:00:00Z',
	bio: 'Test Bio',
	public_repos: 10,
	followers: 20,
	following: 30,
	location: 'Test Location',
	blog: 'test.com',
	twitter_username: '@testUser',
	company: 'TestCompany',
}

const renderUserDetails = (userData?: UserDataType, error?: string) => {
	render(<UserDetails userData={userData || null} error={error || ''} />)
}

describe('UserDetails Component', () => {
	test('displays error message when user data is null', () => {
		renderUserDetails(null, 'User not found. Try again ...')
		expect(screen.getByText(/User not found. Try again .../)).toBeInTheDocument()
	})

	test('displays error message when error prop is provided', () => {
		renderUserDetails(null, 'Oops! Something went wrong. Please try again later.')
		expect(screen.getByText('Oops! Something went wrong. Please try again later.')).toBeInTheDocument()
	})

	test('renders user details correctly', () => {
		renderUserDetails(MOCK_USER_DATA)
		expect(screen.getByAltText('testUser')).toHaveAttribute('src', 'test-avatar.jpg')
		expect(screen.getByText('Test User')).toBeInTheDocument()
		expect(screen.getByText('Test Bio')).toBeInTheDocument()
	})

	test('renders message for user with no bio', () => {
		const userDataWithNoBio = { ...MOCK_USER_DATA, bio: null }
		renderUserDetails(userDataWithNoBio)
		expect(screen.getByText('This profile has no bio')).toBeInTheDocument()
	})
})
