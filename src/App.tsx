import SearchInput from './components/SearchInput'

const App = () => {
	return (
		<div className='max-w-sm mx-auto my-20 flex flex-col gap-10'>
			<SearchInput
				placeholder='Search features, tutorials, etc...'
				label='search'
				name='search'
				id='search'
				variant='outlined'
			/>

			<SearchInput
				placeholder='Search features, tutorials, etc...'
				label='search'
				name='search'
				id='search'
				variant='primary'
			/>
		</div>
	)
}

export default App
