import TabButton from './components/TabButton'

const App = () => {
	return (
		<div className='p-10 flex gap-5'>
			<TabButton title='Payouts' quantity={22} />
			<TabButton title='Refunds' quantity={6} isActive />
		</div>
	)
}

export default App
