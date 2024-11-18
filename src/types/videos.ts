export type VideoItem = {
	id: string
	title: string
	duration: string
	url: string | null
	thumbnail: string
	date: Date
	similarVideos: VideoItem[]
}
