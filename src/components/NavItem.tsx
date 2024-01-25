import { FC } from 'react'
import { NavItemType } from '../constants'

const NavItem: FC<NavItemType> = (props) => {
	const { Icon, title, isCurrentPage } = props

	return (
		<li
			className={`${
				isCurrentPage && 'bg-navbar-hover'
			} group px-4 py-2 flex gap-3 rounded hover:bg-navbar-hover font-inter cursor-pointer opacity-80 group-hover:opacity-100 transition-colors duration-300`}>
			<Icon />

			<p
				className={`${
					isCurrentPage && 'opacity-100'
				} text-sm font-medium text-slate-100 whitespace-nowrap opacity-80 group-hover:opacity-100 transition-colors duration-300`}>
				{title}
			</p>
		</li>
	)
}

export default NavItem
