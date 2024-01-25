import { FC, ReactNode } from 'react'

type OutlinedButtonType = {
	children: ReactNode
	handleClick: () => void
}

const OutlinedButton: FC<OutlinedButtonType> = (props) => {
	const { children, handleClick } = props
	return (
		<button
			type='button'
			onClick={handleClick}
			className='py-[6px] px-3 flex items-center gap-[6px] rounded border border-black-85 bg-black-100'>
			{children}
		</button>
	)
}

export default OutlinedButton
