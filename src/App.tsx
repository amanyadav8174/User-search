import Header from './components/Header/Header'
import SearchUser from './components/SearchUser/SearchUser'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
	return (
		<div className='flex flex-col mx-6 md:mx-0 w-[21rem] md:min-w-[36rem] lg:min-w-[46rem]'>
			<ThemeProvider>
				<Header />
				<SearchUser />
			</ThemeProvider>
		</div>
	)
}

export default App
