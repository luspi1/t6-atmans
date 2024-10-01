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
	category: string
	title: string
	imgUrl: string
	date: Date
	location: {
		title: string
		address: string
	}
	description: string
}
