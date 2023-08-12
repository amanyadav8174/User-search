import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App' 
import MatchMediaMock from 'jest-matchmedia-mock'

let matchMedia: MatchMediaMock

beforeAll(() => {
	matchMedia = new MatchMediaMock()
})

beforeAll(() => {
	window.matchMedia = jest.fn().mockImplementation(query => {
		return {
			matches: query.includes('min-width: 400px'),
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
		}
	})
})

afterEach(() => {
	matchMedia.clear()
})

jest.mock('axios')

describe('App Component', () => {
it('renders extended placeholder for wider screens', () => {
    window.matchMedia = jest.fn().mockImplementation(query => {
        return {
            matches: true, 
            addEventListener: jest.fn(),
            removeEventListener: jest.fn()
        };
    });

    render(<App />);
    expect(screen.getByPlaceholderText('Type / to search GitHub user...')).toBeInTheDocument();
});

it('renders shortened placeholder for narrower screens', () => {
    window.matchMedia = jest.fn().mockImplementation(query => {
        return {
            matches: false, 
            addEventListener: jest.fn(),
            removeEventListener: jest.fn()
        };
    });

    render(<App />);
    expect(screen.getByPlaceholderText('Search GitHub username...')).toBeInTheDocument();
});

})
