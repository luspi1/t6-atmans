export type HomePoster = {
	id: string
	title: string
	date: Date
	location: string
	image_url: string
}

export type HomeEventItem = {
	id: string
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
export type HomePartnerItem = {
	id: string
	imgUrl: string
	link: string
}
export type HomeFaq = {
	id: string
	title: string
	content: string
}
export type HomeObject = {
	id: string
	title: string
	logo: string
}
