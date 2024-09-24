import { type ChronologyItem, type SimpleLinkType, type SourceLink } from 'src/types/global'
import { type NewsItem } from 'src/types/news'
import { type VideoItem } from 'src/types/videos'
import { type ImageItem } from 'src/types/photos'
import { type ShortDocument } from 'src/types/document'
import { type PathwayItem, type PlacementItem } from 'src/types/location'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import { type UserItem } from 'src/types/users'
import { type ProgramDay } from 'src/types/program'

export type TeamItem = {
	id: string
	region: string
	title: string
	participantsCount: number
	disciplines: Array<{ id: string; title: string }>
	side: string
}

export type EventsItem = {
	id: string
	countHeld: number
	countHeldPlan: string
	eventsInterval: string
	category: string
	sections: string[]
	region: string
	relevance: string
	title: string
	mainBrand: SimpleLinkType
	contactPerson: string
	partGroup: string
	location: string
	preview: string
	brandImg: string
	partnerImg: string
	pathways: PathwayItem[]
	placement: PlacementItem[]
	faq: Array<{ title: string; content: string }>
	chronology: ChronologyItem[]
	disciplines: EthnosportDisciplineItem[]
	participants: UserItem[]
	program: ProgramDay[]
	teams: TeamItem[]
	dates: [Date, Date]
	type: string
	desc: string
	descs: string[]
	sideDocs: ShortDocument[]
	organizerLinks: SimpleLinkType[]
	partnerLinks: SimpleLinkType[]
	news: NewsItem[]
	newsVideos: VideoItem[]
	events: EventsItem[]
	photos: ImageItem[]
	relatedLinks: SourceLink[]
	tags: string[]
	designation: string
}
