import NavbarStoreProfile from './NavbarStoreProfile'

const Navbar = () => {
	return (
		<nav className='sticky top-0 w-full min-w-60 py-4 px-[10px] flex flex-col gap-6 bg-navbar min-h-screen'>
			<NavbarStoreProfile />
		</nav>
	)
}

export default Navbar
