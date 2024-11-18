import { type CategoryFilterItem, type SimpleLinkType, type SourceLink } from 'src/types/global'
import { type CardNewsItem } from 'src/types/news'
import { type ImageItem } from 'src/types/photos'
import { type ShortDocument } from 'src/types/document'
import { type PathwayItem } from 'src/types/location'
import { type ProgramDay } from 'src/types/program'
import { type VideoItem } from 'src/types/videos'

export type EventItem = {
	description: string
	sections: string[]
	mainBrand: SimpleLinkType
	object: { id: string; title: string }
	site: SimpleLinkType
	brandImg: string
	partnerImg: string
	pathways: PathwayItem[]
	placement: PathwayItem[]
	faq: Array<{ title: string; content: string }>
	program: ProgramDay[]
	descs: string[]
	sideDocs: ShortDocument[]
	organizerLinks: SimpleLinkType[]
	partnerLinks: SimpleLinkType[]
	news: CardNewsItem[]
	videos: VideoItem[]
	photos: ImageItem[]
	relatedLinks: SourceLink[]
} & CardEventItem

export type CardEventItem = {
	id: string
	imgUrl: string
	title: string
	category: CategoryFilterItem
	date: Date
	location: {
		title: string
		address: string
	}
	description: string
}
