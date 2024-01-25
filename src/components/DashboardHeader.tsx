import { FC } from 'react'
import DropDown from './DropDown'
import { RevenueCardWithBoxShadow } from './RevenueCard'
import EnhancedReveneCard from './EnhancedReveneCard'

const DashboardHeader: FC = () => {
	return (
		<div className='flex flex-col gap-6'>
			<div className='flex justify-between items-center'>
				<h2 className='text-xl font-medium text-black-12'> Overview </h2>

				<DropDown />
			</div>

			<div className='flex flex-wrap gap-5'>
				<div className='flex-1'>
					<EnhancedReveneCard
						title='Next Payout'
						amount='₹2,312.23'
						payoutDate='Today, 04:00 PM'
						orderCount={23}
						textColor='text-black-95'
					/>
				</div>
				<div className='flex-1'>
					<RevenueCardWithBoxShadow
						title='Amount Pending'
						amount='₹92.312.20'
						orderCount={13}
					/>
				</div>
				<div className='flex-1'>
					<RevenueCardWithBoxShadow
						title='Amount Processed'
						amount='₹23,92,312.19'
					/>
				</div>
			</div>
		</div>
	)
}

export default DashboardHeader
