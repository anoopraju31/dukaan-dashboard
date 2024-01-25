import { FC } from 'react'
import { PiQuestion } from 'react-icons/pi'
import { HiOutlineChevronRight } from 'react-icons/hi'

type RevenueCardType = {
	title: string
	amount: string
	orderCount?: number
	textColor?: string
}

const RevenueCard: FC<RevenueCardType> = (props) => {
	const { title, amount, orderCount, textColor } = props
	return (
		<section className='p-5 flex flex-col gap-4'>
			<div className={`flex items-center gap-2 text-black-30 ${textColor}`}>
				<h5 className='whitespace-nowrap'> {title} </h5>
				<PiQuestion size={20} />
			</div>

			<div className='flex justify-between items-center gap-2'>
				<h5 className={`text-4xl font-medium text-black-12 ${textColor}`}>
					{amount}
				</h5>

				{orderCount ? (
					<div className='flex items-center cursor-pointer'>
						<p
							className={`text-primary-blue text-base font-medium underline whitespace-nowrap ${textColor}`}>
							{orderCount} orders
						</p>
						<HiOutlineChevronRight className={textColor} />
					</div>
				) : null}
			</div>
		</section>
	)
}

export default RevenueCard
