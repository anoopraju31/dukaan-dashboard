import RevenueCard, { RevenueCardWithBoxShadow } from './components/RevenueCard'

const App = () => {
	return (
		<div className='max-w-sm mx-auto my-20 flex flex-col gap-10'>
			<RevenueCard title='Amount Pending' amount='₹92.312.20' orderCount={13} />
			<RevenueCardWithBoxShadow
				title='Amount Pending'
				amount='₹92.312.20'
				orderCount={13}
			/>
		</div>
	)
}

export default App
