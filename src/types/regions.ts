import { type ShortDocument } from './document'
import { type ChronologyItem, type RelatedLink, type SourceLink } from 'src/types/global'
import { type UserItem } from './users'
import { type EventsItem } from 'src/types/events'

export type RegionItem = {
	title: string
	fullTitle: string
	mainDesc: string
	regionCode: string
	status: string
	type: string
	director: string
	vice: string
	accountant: string
	phones: string[]
	email: string
	address: string
	descList: string[]
	openDate: Date
	logo: string
	mainInfoLogo: string
	site: string
	events: EventsItem[]
	relatedObjects: RelatedLink[]
	relatedLinks: SourceLink[]
	documents: ShortDocument[]
	participants: UserItem[]
	history: {
		mainDesc: string
		chronology: ChronologyItem[]
	}
}

export type RegionsInfo = {
	mainDescription: string
	aboutDescriptions: string[]
	secondaryDescriptions: string[]
	aboutPhoto: {
		url: string
		caption: string
	}
	sideDocs: ShortDocument[]
}
