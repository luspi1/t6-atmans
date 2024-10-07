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

export type HomeEventCategory = {
	title: string
	id: string
}

export type HomeEventItem = {
	id: string
	category: HomeEventCategory
	title: string
	imgUrl: string
	date: Date
	location: {
		title: string
		address: string
	}
	description: string
}

export type HomeNewsItem = {
	id: string
	title: string
	imgUrl: string
	date: [Date, Date] | [Date]
	desc: string
}

export type HomeVideoItem = {
	id: string
	title: string
	duration: string
	thumb: string
}
