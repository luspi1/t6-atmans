export type NewsCategory = {
	title: string
	id: string
}
export type NewsItem = {
	id: string
	title: string
	imgUrl: string
	date: [Date, Date] | [Date]
	desc: string
	category: NewsCategory
	shortTitle: string
	shortDesc: string
	tags: string[]
	gallery: string
	hidden: boolean
	main: boolean
	preview: string
	textNews: string[]
}

export type NewsItemsList = Record<string, NewsItem[]>

export type CardNewsItem = {
	id: string
	title: string
	imgUrl: string
	date: [Date, Date] | [Date]
	desc: string
}
