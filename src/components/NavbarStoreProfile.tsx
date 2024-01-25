import { FC } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi'

const NavbarStoreProfile: FC = () => {
	return (
		<div className='flex items-center gap-3 text-black-100'>
			<div className='w-10 h-10 rounded-md bg-black-100'>
				<img
					src='/nishyan.png'
					alt='nishyan logo'
					className='w-full h-full rounded-md'
				/>
			</div>

			<div className='flex-1 flex flex-col justify-center gap-1'>
				<h6 className='text-[15px] leading-[22px] font-medium font-inter'>
					Nishyan
				</h6>
				<p className='text-[13px] leading-4 underline opacity-80'>
					Visit store
				</p>
			</div>

			<HiOutlineChevronDown size={20} />
		</div>
	)
}

export default NavbarStoreProfile
