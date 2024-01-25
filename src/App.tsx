import { FC } from 'react'
import Header from './components/svgs/Header'
import Navbar from './components/Navbar'

const App: FC = () => {
	return (
		<div className='flex bg-black-98'>
			<div className='hidden lg:block'>
				<Navbar />
			</div>
			<div className='flex-1 relative'>
				<Header />
			</div>
		</div>
	)
}

export default App
