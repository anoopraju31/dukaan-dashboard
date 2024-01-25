import EnhancedReveneCard from './components/EnhancedReveneCard'
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
			<EnhancedReveneCard
				title='Next Payout'
				amount='₹2,312.23'
				orderCount={23}
				textColor='!text-black-100'
				payoutDate='Today, 04:00PM'
			/>
		</div>
	)
}

export default App
