import { FC } from 'react'
import Search from './svgs/Search'

type SearchInputType = {
	variant?: 'outlined' | 'primary'
	label: string
	id: string
	name: string
	placeholder: string
}

const SearchInput: FC<SearchInputType> = (props) => {
	const { variant = 'primary', label, id, name, placeholder } = props
	const style = {
		outlined: 'bg-black-100 border border-black-85',
		primary: 'bg-black-95',
	}

	return (
		<>
			<label htmlFor='search' className='sr-only'>
				{label}
			</label>

			<div
				className={`py-[10px] px-4 flex items-center gap-2 rounded ${style[variant]}`}>
				<Search />

				<input
					type='text'
					id={id}
					name={name}
					placeholder={placeholder}
					className='text-black-50 text-[15px] leading--[22px] flex-shrink-0 flex-1 bg-transparent outline-none border-none'
				/>
			</div>
		</>
	)
}

export default SearchInput
