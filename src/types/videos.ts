export type VideoItem = {
	id: string
	title: string
	duration: string
	thumb: string
	date: Date
	url: string
	thumbnail: string
	similarVideos: VideoItem[]
}
