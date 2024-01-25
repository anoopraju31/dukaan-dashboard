import IconWrapper from './components/IconWrapper'
import Menu from './components/svgs/Menu'
import Message from './components/svgs/Message'

const App = () => {
	return (
		<div className='max-w-sm mx-auto my-20 flex flex-col gap-10'>
			<IconWrapper>
				<Message />
			</IconWrapper>

			<IconWrapper>
				<Menu />
			</IconWrapper>
		</div>
	)
}

export default App
