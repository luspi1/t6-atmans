export type VideoItem = {
	id: string
	title: string
	date: Date
	url: string
	thumbnail: string
	similarVideos: VideoItem[]
}
