import { FC } from 'react'
import DashboardHeader from './DashboardHeader'

const Dashboard: FC = () => {
	return (
		<main className='w-full p-3 md:p-8 flex flex-col gap-8'>
			<DashboardHeader />
		</main>
	)
}

export default Dashboard
