import { ComponentType } from 'react'
import {
	Analytics,
	Appearance,
	Audience,
	Delivery,
	Discounts,
	Home,
	Marketing,
	Orders,
	Payouts,
	Plugins,
	Products,
} from './components/svgs'

export type NavItemType = {
	id: string
	Icon: ComponentType
	title: string
	isCurrentPage?: boolean
}

export const navItems: NavItemType[] = [
	{
		id: '1',
		Icon: Home,
		title: 'home',
	},
	{
		id: '2',
		Icon: Orders,
		title: 'Orders',
	},
	{
		id: '3',
		Icon: Products,
		title: 'Products',
	},
	{
		id: '4',
		Icon: Delivery,
		title: 'Delivery',
	},
	{
		id: '5',
		Icon: Marketing,
		title: 'Marketing',
	},
	{
		id: '6',
		Icon: Analytics,
		title: 'Analytics',
	},
	{
		id: '7',
		Icon: Payouts,
		title: 'Payouts',
		isCurrentPage: true,
	},
	{
		id: '8',
		Icon: Discounts,
		title: 'Discounts',
	},
	{
		id: '9',
		Icon: Audience,
		title: 'Audience',
	},
	{
		id: '10',
		Icon: Appearance,
		title: 'Appearance',
	},
	{
		id: '11',
		Icon: Plugins,
		title: 'Plugins',
	},
]
