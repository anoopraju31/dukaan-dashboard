import { ComponentType, FC } from 'react'
import { RevenueCardType } from './RevenueCard'

const withBoxShadow = <P extends RevenueCardType>(
	Component: ComponentType<P>,
): FC<P> => {
	const WithBoxShadow: FC<P> = (props) => {
		return (
			<div className='rounded-lg bg-black-100 shadow'>
				<Component {...props} />
			</div>
		)
	}

	return WithBoxShadow
}

export default withBoxShadow
