import { FC } from 'react'
import { PiQuestion } from 'react-icons/pi'
import SearchInput from '../SearchInput'
import IconWrapper from '../IconWrapper'
import Search from './Search'
import Message from './Message'
import Menu from './Menu'

const Header: FC = () => {
	return (
		<header className='sticky top-0 right-0 w-full p-3 sm:px-8 flex items-center gap-4 border-b border-black-85 bg-black-100 z-50'>
			{/* Logo */}
			<div className='flex items-center gap-4'>
				<h4 className='text-black-12 text-xl font-medium'> Payouts </h4>

				<div className='hidden sm:flex items-center gap-[6px] text-black-30'>
					<PiQuestion size={20} />
					<p className='text-xs'>How it works</p>
				</div>
			</div>

			{/* Search Bar */}
			<div className='flex-1 flex items-center justify-center'>
				<div className='w-full max-w-sm hidden md:block'>
					<SearchInput
						id='search'
						name='search'
						label='search'
						placeholder='Search features, tutorials, etc.'
					/>
				</div>
			</div>

			{/* Icon Container */}
			<div className='flex justify-end gap-2'>
				<div className='hidden sm:block md:hidden'>
					<IconWrapper>
						<Search />
					</IconWrapper>
				</div>

				<div className='hidden sm:block'>
					<IconWrapper>
						<Message />
					</IconWrapper>
				</div>

				<div>
					<IconWrapper>
						<Menu />
					</IconWrapper>
				</div>
			</div>
		</header>
	)
}

export default Header
