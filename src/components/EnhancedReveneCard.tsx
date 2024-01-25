import { FC } from 'react'
import RevenueCard, { RevenueCardType } from './RevenueCard'

interface EnhancedReveneCardType extends RevenueCardType {
	payoutDate: string
}

const EnhancedReveneCard: FC<EnhancedReveneCardType> = (props) => {
	return (
		<div className='rounded-lg shadow flex flex-col text-black-95 bg-primary-blue'>
			<RevenueCard {...props} />
			<div className='py-2 px-6 flex justify-between text-sm bg-hover-blue rounded-lg'>
				<p>Next payout date:</p>
				<p className='font-medium'> {props.payoutDate} </p>
			</div>
		</div>
	)
}

export default EnhancedReveneCard
