import { type CategoryItem } from 'src/types/global'

export type VideoItem = {
	id: string
	title: string
	duration: string
	thumb: string
	date: Date
	url: string
	thumbnail: string
	similarVideos: VideoItem[]
}

export type CardVideoItem = {
	id: string
	title: string
	duration: string
	thumb: string
	date?: Date
	category: CategoryItem
}
export type VideosMonthsList = Record<string, CardVideoItem[]>
