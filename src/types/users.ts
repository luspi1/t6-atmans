import { type ShortDocument } from 'src/types/document'
import { type RelatedLink, type SourceLink } from 'src/types/global'
import { type GroupItem } from 'src/types/groups'
import { type EventsItem } from 'src/types/events'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import type { ImageItem } from 'src/types/photos'

export type UserItem = {
	id: string
	avatar: string
	region: string
	mainGroup: string
	rating: string
	fullname: string
	statuses: string[]
	mainStatus: string
	mainDesc: string
	birthday: Date
	position: string
	role: string
	side: string
	group: string
	regDate: string
	locality: string
	gender: 'Мужской' | 'Женский'
	phones: string[]
	email: string
	website: string
	regalia: string[]
	relatedObjects: RelatedLink[]
	relatedLinks: SourceLink[]
	documents: ShortDocument[]
	groups: GroupItem[]
	events: EventsItem[]
	disciplines: EthnosportDisciplineItem[]
	photos: ImageItem[]
}
