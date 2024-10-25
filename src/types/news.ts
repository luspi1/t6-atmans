import { type CategoryItem } from 'src/types/global'

export type NewsItem = {
	id: string
	title: string
	imgUrl: string
	date: [Date, Date] | [Date]
	desc: string
	category: CategoryItem
	shortTitle: string
	shortDesc: string
	tags: string[]
	gallery: string
	hidden: boolean
	main: boolean
	preview: string
	textNews: string[]
}

export type CardNewsItem = {
	id: string
	title: string
	imgUrl: string
	date: [Date, Date] | [Date]
	desc: string
	category: CategoryItem
}

export type NewsMonthsList = Record<string, CardNewsItem[]>
