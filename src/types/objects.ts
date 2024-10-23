import { type EventsItem } from 'src/types/events'
import { type ImageItem } from 'src/types/photos'
import { type NewsItem } from 'src/types/news'
import { type VideoItem } from 'src/types/videos'

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
	events: EventsItem[]
	news: NewsItem[]
	videos: VideoItem[]
	location: string
}

export type ObjectsInfo = {
	mainDescription: string
}
