export type HomeRegion = {
	id: string
	name: string
	virtual: string
	image_url: string
}
export type HomePoster = {
	id: string
	title: string
	dates: [Date, Date]
	location: string
	image_url: string
}

export type HomeEthnoItems = HomeRegion

export type HomeEventItem = {
	id: string
	title: string
	date: [Date, Date]
	desc: string
	ismain: boolean
	ethnoType: 'rus' | 'bur'
}
