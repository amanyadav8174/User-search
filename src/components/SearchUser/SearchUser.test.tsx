import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import SearchUser from './SearchUser'
import '@testing-library/jest-dom'
//import userEvent from '@testing-library/user-event'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('<SearchUser />', () => {
	beforeEach(() => {
		window.matchMedia = jest.fn().mockImplementation(query => ({
			matches: query.includes('min-width: 400px'),
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
		}))
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('fetches default user data on mount', async () => {
		const dummyData = {
			avatar_url: 'avatar-url',
			login: 'octocat',
			name: 'Octocat',
			bio: 'Hello, I am Octocat',
			created_at: '2022-01-01',
			public_repos: 10,
			followers: 10,
			following: 5,
		}

		mockedAxios.get.mockResolvedValueOnce({ data: dummyData })

		render(<SearchUser />)
		await waitFor(
			() => {
				expect(screen.getByText(/Hello, I am Octocat/)).toBeInTheDocument()
			},
			{ timeout: 2000 }
		)
	})

	/*  OPEN ISSUE https://github.com/axios/axios/issues/4833
	 	it('displays error message when user not found', async () => {
		const mockError = {
			response: {
				status: 404,
			},
			isAxiosError: true,
		}

		mockedAxios.get.mockRejectedValueOnce(mockError)

		render(<SearchUser />)

		await screen.findByText(/User not found. Try again .../, {}, { timeout: 2000 })
	}) 
	it('displays error message when other error occurs', async () => {
		mockedAxios.get.mockRejectedValueOnce({ response: { status: 500 } })

		render(<SearchUser />)

		const input = screen.getByPlaceholderText('Type / to search GitHub user...') as HTMLInputElement
		userEvent.type(input, 'testuser')
		userEvent.click(screen.getByText('Search'))
		await screen.findByText(/Oops! Something went wrong. Please try again later./, {}, { timeout: 2000 })
	})  */
})
