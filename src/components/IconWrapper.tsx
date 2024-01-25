import { FC, ReactNode } from 'react'

type IconWrapper = {
	children: ReactNode
}

const IconWrapper: FC<IconWrapper> = ({ children }) => {
	return (
		<div className='w-8 sm:w-10 h-8 sm:h-10 p-2 bg-black-90 flex justify-center items-center rounded-full'>
			{children}
		</div>
	)
}

export default IconWrapper
