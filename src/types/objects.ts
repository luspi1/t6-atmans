import { type ImageItem } from 'src/types/photos'
import { type NewsItem } from 'src/types/news'
import { type VideoItem } from 'src/types/videos'
import { type EventItem } from 'src/types/events'

export type ObjectItem = {
	id: string
	title: string
	logo: string
	mainDesc: string
	phone: string
	email: string
	tgSoc: string
	vkSoc: string
	address: string
	photos: ImageItem[]
	descList: string[]
	events: EventItem[]
	news: NewsItem[]
	videos: VideoItem[]
	location: string
}

export type ObjectsInfo = {
	mainDescription: string
}
