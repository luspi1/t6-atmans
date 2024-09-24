export type ProgramListItem = {
	id: string
	time: string
	place: string
	title: string
}

export type ProgramDay = {
	id: string
	date: Date
	programList: ProgramListItem[]
}
