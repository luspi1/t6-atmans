import type { ShortDocument } from 'src/types/document'
import { type EventsItem } from 'src/types/events'
import type { ImageItem } from 'src/types/photos'
import { type SimpleLinkType, type SourceLink } from 'src/types/global'
import { type EthnosportDisciplineItem } from 'src/types/ethnosportDiscipline'
import { type UserItem } from 'src/types/users'

export type GroupItem = {
	id: string
	regionCode: string
	region: string
	avatar: string
	leader: string
	side: string
	phones: string[]
	email: string
	website: SimpleLinkType
	telegramSoc: SimpleLinkType
	vkSoc: SimpleLinkType
	address: string
	mainDesc: string
	descs: string[]
	level: string
	title: string
	role: string
	entryDate: string
	status: string
	category: string
	sections: string[]
	participantsCount: number
	subgroupsCount: number
	eventsCount: number
	rating: string
	subgroups: string
	relatedLinks: SourceLink[]
	documents: ShortDocument[]
	groups: GroupItem[]
	events: EventsItem[]
	photos: ImageItem[]
	disciplines: EthnosportDisciplineItem[]
	participants: UserItem[]
}
