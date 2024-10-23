import { type ImageItem } from 'src/types/photos'

export type NewsCategory = {
	title: string
	id: string
}
export type NewsItem = {
	id: string
	title: string
	category: NewsCategory
	shortTitle: string
	shortDesc: string
	date: string
	tags: string[]
	gallery: string
	hidden: boolean
	main: boolean
	preview: string
	imgGallery: ImageItem[]
	textNews: string[]
	desc: string
}
export type NewsItemsList = Record<string, NewsItem[]>
