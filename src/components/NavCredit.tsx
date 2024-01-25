import { FC } from 'react'
import Wallet from './svgs/Wallet'

const NavCredit: FC = () => {
	return (
		<div className='px-3 py-[6px] flex items-center gap-3 rounded bg-navbar-secondary'>
			<Wallet />

			<div className='flex flex-col gap-[2px] text-black-100 font-inter'>
				<p className='text-[13px] leading-4 opacity-80 whitespace-nowrap'>
					Available credits
				</p>
				<p className='font-medium text-base'> 222.10 </p>
			</div>
		</div>
	)
}

export default NavCredit
