import { type ImageItem } from 'src/types/photos'

export type AboutGeneralPage = {
	logo: string
	caption: string
	mainDescs: string[]
	descs: string[]
	photoGallery: ImageItem[]
}
export type AboutHistoryPage = {
	topDescs: string[]
	mainPhoto: {
		original: string
		title: string
	}
	bottomDescs: string[]
}

type ShortCultureElement = {
	id: string
	title: string
	desc: string
}

export type AboutCulturePage = {
	topDesc: string
	bottomDesc: string
	photoGallery: ImageItem[]
	cultures: ShortCultureElement[]
}

export type AboutContactsPage = {
	mapCoords: [number, number]
	mailAddress: string
	phone: {
		contact: string
		phoneNumber: {
			formatNumber: string
			number: string
		}
	}
	email: string
}
