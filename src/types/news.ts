import { type ImageItem } from 'src/types/photos'

export type NewsItem = {
	id: string
	title: string
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
