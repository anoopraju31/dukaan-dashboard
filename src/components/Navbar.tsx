import { navItems } from '../constants'
import NavCredit from './NavCredit'
import NavItem from './NavItem'
import NavbarStoreProfile from './NavbarStoreProfile'

const Navbar = () => {
	return (
		<nav className='sticky top-0 w-full min-w-60 py-4 px-[10px] flex flex-col gap-6 bg-navbar min-h-screen'>
			<NavbarStoreProfile />

			<ul className='flex-1 flex flex-col gap-1'>
				{navItems.map((item) => (
					<NavItem key={item.id} {...item} />
				))}
			</ul>

			<NavCredit />
		</nav>
	)
}

export default Navbar
