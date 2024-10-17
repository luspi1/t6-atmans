import { type ImageItem } from 'src/types/photos'

export type CultureItem = {
	id: string
	title: string
	logoUrl: string
	desc: string
	topDesc: string
	bottomDesc: string
	photos: ImageItem[]
}
