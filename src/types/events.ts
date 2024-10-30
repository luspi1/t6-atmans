import {
	type CategoryItem,
	type ChronologyItem,
	type SimpleLinkType,
	type SourceLink,
} from 'src/types/global'
import { type CardNewsItem } from 'src/types/news'
import { type CardVideoItem } from 'src/types/videos'
import { type ImageItem } from 'src/types/photos'
import { type ShortDocument } from 'src/types/document'
import { type PathwayItem } from 'src/types/location'
import { type ProgramDay } from 'src/types/program'

export type TeamItem = {
	id: string
	region: string
	title: string
	participantsCount: number
	disciplines: Array<{ id: string; title: string }>
	side: string
}

export type EventItem = {
	description: string
	sections: string[]
	mainBrand: SimpleLinkType
	brandImg: string
	partnerImg: string
	pathways: PathwayItem[]
	placement: PathwayItem[]
	faq: Array<{ title: string; content: string }>
	chronology: ChronologyItem[]
	program: ProgramDay[]
	descs: string[]
	sideDocs: ShortDocument[]
	organizerLinks: SimpleLinkType[]
	partnerLinks: SimpleLinkType[]
	news: CardNewsItem[]
	videos: CardVideoItem[]
	photos: ImageItem[]
	relatedLinks: SourceLink[]
} & CardEventItem

export type CardEventItem = {
	id: string
	imgUrl: string
	title: string
	category: CategoryItem
	date: Date
	location: {
		title: string
		address: string
	}
	description: string
}

export type EventsMonthsList = Record<string, CardEventItem[]>
