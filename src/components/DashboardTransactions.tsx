import { FC } from 'react'
import TabButton from './TabButton'
import SearchInput from './SearchInput'
import DropDown from './DropDown'
import OutlinedButton from './OutlinedButton'
import Table from './Table'

const DashboardTransactions: FC = () => {
	return (
		<div className='w-full flex flex-col gap-6'>
			<div className='flex flex-col gap-6'>
				<h2 className='text-xl font-medium text-black-12 capitalize'>
					Transactions | This Month
				</h2>

				<div className='flex gap-3'>
					<TabButton title='Payouts' quantity={22} />
					<TabButton title='Refunds' quantity={6} isActive />
				</div>
			</div>

			<div className='w-full p-3 pb-2 rounded-lg bg-black-100 shadow flex flex-col gap-3'>
				<div className='flex gap-2 flex-col sm:flex-row items-end sm:justify-between sm:items-center'>
					<div className='flex-1 sm:flex-none w-full sm:w-fit'>
						<SearchInput
							label='Search Transaction'
							id='searchTransaction'
							name='searchTransaction'
							variant='outlined'
							placeholder='Order ID or transaction ID'
						/>
					</div>

					<div className='flex items-center gap-4'>
						<DropDown />
						<OutlinedButton handleClick={() => {}}>
							<img className='py-0.5' src='/download.svg' alt='download' />
						</OutlinedButton>
					</div>
				</div>

				<div className='max-w-[var(--ww)] t rounded-t overflow-x-auto'>
					<Table />
				</div>
			</div>
		</div>
	)
}

export default DashboardTransactions
