import { type ImageItem } from 'src/types/photos'
import { type CardNewsItem } from 'src/types/news'
import { type CardVideoItem } from 'src/types/videos'
import { type CardEventItem } from 'src/types/events'

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
	events: CardEventItem[]
	news: CardNewsItem[]
	videos: CardVideoItem[]
	location: string
}

export type ObjectsInfo = {
	mainDescription: string
}
