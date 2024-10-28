import { type CategoryItem } from 'src/types/global'
import { type ImageItem } from 'src/types/photos'

export type NewsItem = {
	id: string
	title: string
	date: [Date, Date] | [Date]
	imgGallery: ImageItem[]
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
