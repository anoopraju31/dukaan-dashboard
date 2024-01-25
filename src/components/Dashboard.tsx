import { FC } from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardTransactions from './DashboardTransactions'

const Dashboard: FC = () => {
	return (
		<main className='w-full p-3 md:p-8 flex flex-col gap-8'>
			<DashboardHeader />

			<DashboardTransactions />
		</main>
	)
}

export default Dashboard
