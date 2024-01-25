import { FC } from 'react'

const Table: FC = () => {
	return (
		<table className='w-full text-sm text-black-30 font-medium'>
			<thead className='text-left'>
				<tr>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap rounded-s'>
						Order ID
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap'>
						Status
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap'>
						Transaction ID
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap'>
						Refund Date
					</th>
					<th className='px-3 py-[10px] bg-black-95 whitespace-nowrap text-right rounded-e'>
						Order Amount
					</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	)
}

export default Table
