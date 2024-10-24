import {
	type CategoryItem,
	type ChronologyItem,
	type SimpleLinkType,
	type SourceLink,
} from 'src/types/global'
import { type NewsItem } from 'src/types/news'
import { type VideoItem } from 'src/types/videos'
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
	id: string
	imgUrl: string
	category: CategoryItem
	date: Date
	location: {
		title: string
		address: string
	}
	description: string
	countHeld: number
	countHeldPlan: string
	eventsInterval: string
	sections: string[]
	region: string
	relevance: string
	title: string
	mainBrand: SimpleLinkType
	contactPerson: string
	partGroup: string
	preview: string
	brandImg: string
	partnerImg: string
	pathways: PathwayItem[]
	placement: PathwayItem[]
	faq: Array<{ title: string; content: string }>
	chronology: ChronologyItem[]
	program: ProgramDay[]
	teams: TeamItem[]
	type: string
	descs: string[]
	sideDocs: ShortDocument[]
	organizerLinks: SimpleLinkType[]
	partnerLinks: SimpleLinkType[]
	news: NewsItem[]
	newsVideos: VideoItem[]
	photos: ImageItem[]
	relatedLinks: SourceLink[]
	tags: string[]
	designation: string
}

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
