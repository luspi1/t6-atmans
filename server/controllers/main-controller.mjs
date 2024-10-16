import { regions, regionsInfo } from '../mockData/regions.mjs'
import { users } from '../mockData/users.mjs'
import { objects } from '../mockData/objects.mjs'
import { projects } from '../mockData/projects.mjs'
import { news } from '../mockData/news.mjs'
import { events } from '../mockData/events.mjs'
import { ethnosport } from '../mockData/ethnosport.mjs'
import { disciplines } from '../mockData/disciplines.mjs'
import { newsVideos } from '../mockData/newsVideos.mjs'
import { groups } from '../mockData/groups.mjs'
import { brandEvents } from '../mockData/brandEvents.mjs'
import {
	homeDepartments,
	homeEventMonths,
	homeEventsCategories,
	homeFaq,
	homeNews,
	homePartners,
	homePosters,
	homeRegions,
	homeVideos,
} from '../mockData/home.mjs'

export const getRegionsInfo = (req, res) => {
	res.status(200).json(regionsInfo)
}

export const getRegions = (req, res) => {
	const { q } = req.query

	const filteredRegions = regions.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredRegions)
}
export const getRegionParticipants = (req, res) => {
	const { q } = req.query
	const regionCode = req.params.code

	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const filteredRegionParticipants = foundRegion.participants.filter((item) =>
		item.fullname.toLowerCase().includes(q),
	)
	res.status(200).json(filteredRegionParticipants)
}

export const getRegionEvents = (req, res) => {
	const { q } = req.query
	const regionCode = req.params.code

	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const filteredRegionEvents = foundRegion.events.filter((item) =>
		item.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredRegionEvents)
}

export const getRegionPhotos = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)
	const regionPhotos = foundRegion.photos
	res.status(200).json(regionPhotos)
}

export const getRegionByCode = (req, res) => {
	const regionCode = req.params.code
	const foundRegion = regions.find((region) => region.regionCode === regionCode)

	res.status(200).json(foundRegion)
}

export const getRegionNews = (req, res) => {
	const regionCode = req.params.code
	const { q, y } = req.query
	const searchedRegion = regions.find((region) => region.regionCode === regionCode)
	const filteredNews = searchedRegion.news.filter((el) => {
		if (y) {
			return String(new Date(el.date).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredNews)
}

export const getRegionNewsVideos = (req, res) => {
	const regionCode = req.params.code
	const searchedRegion = regions.find((region) => region.regionCode === regionCode)
	res.status(200).json(searchedRegion.newsVideos)
}

export const getRegionNewsVideoById = (req, res) => {
	const regionCode = req.params.code
	const videoId = req.params.videoId
	const searchedRegion = regions.find((region) => region.regionCode === regionCode)
	const foundVideoNews = searchedRegion.newsVideos.find((videoItem) => videoItem.id === videoId)

	res.status(200).json(foundVideoNews)
}

export const getRegionNewsById = (req, res) => {
	const regionCode = req.params.code
	const newsId = req.params.newsId
	const searchedRegion = regions.find((region) => region.regionCode === regionCode)

	const foundNews = searchedRegion.news.find((newsItem) => newsItem.id === newsId)

	res.status(200).json(foundNews)
}

export const getUsers = (req, res) => {
	const { q } = req.query

	const filteredUsers = users.filter((el) => el.fullname.toLowerCase().includes(q))

	res.status(200).json(filteredUsers)
}
export const getUserById = (req, res) => {
	const userId = req.params.id
	const foundUser = users.find((user) => user.id === userId)

	res.status(200).json(foundUser)
}
export const getUsersGroup = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredGroups = searchedUser.groups.filter((group) =>
		group.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredGroups)
}
export const getUsersEvent = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredEvents = searchedUser.events.filter((event) =>
		event.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredEvents)
}
export const getUsersProject = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredProjects = searchedUser.projects.filter((project) =>
		project.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredProjects)
}
export const getUsersObject = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredObjects = searchedUser.objects.filter((object) =>
		object.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredObjects)
}
export const getUsersMaterial = (req, res) => {
	const { q } = req.query
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)
	const filteredMaterials = searchedUser.materials.filter((material) =>
		material.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredMaterials)
}

export const getUsersDisciplines = (req, res) => {
	const userId = req.params.id
	const searchedUser = users.find((user) => user.id === userId)
	res.status(200).json(searchedUser.disciplines)
}
export const getUsersPhotos = (req, res) => {
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)

	res.status(200).json(searchedUser.photos)
}
export const getUsersVideos = (req, res) => {
	const userId = req.params.id

	const searchedUser = users.find((user) => user.id === userId)

	res.status(200).json(searchedUser.videos)
}
export const getObjects = (req, res) => {
	const { q } = req.query

	const filteredObjects = objects.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredObjects)
}

export const getObjectById = (req, res) => {
	const objectId = req.params.id
	const foundObject = objects.find((object) => object.id === objectId)

	res.status(200).json(foundObject)
}
export const getProjects = (req, res) => {
	const { q } = req.query

	const filteredProjects = projects.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredProjects)
}

export const getProjectById = (req, res) => {
	const projectId = req.params.id
	const foundProject = projects.find((project) => project.id === projectId)

	res.status(200).json(foundProject)
}

export const getNews = (req, res) => {
	const { q, y } = req.query

	const filteredNews = news.filter((el) => {
		if (y) {
			return String(new Date(el.date).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredNews)
}

export const getNewsVideos = (req, res) => {
	res.status(200).json(newsVideos)
}

export const getNewsVideoById = (req, res) => {
	const newsId = req.params.id
	const foundVideoNews = newsVideos.find((newsItem) => newsItem.id === newsId)

	res.status(200).json(foundVideoNews)
}

export const getNewsById = (req, res) => {
	const newsId = req.params.id
	const foundNews = news.find((newsItem) => newsItem.id === newsId)

	res.status(200).json(foundNews)
}

export const deleteNews = (req, res) => {
	const newsId = req.params.id
	let deleteIdx
	news.forEach((el, idx) => {
		if (el.id === newsId) {
			deleteIdx = idx
		}
	})
	news.splice(deleteIdx, 1)

	res.status(200).json(deleteIdx)
}

export const getEthnosportGlobal = (req, res) => {
	res.status(200).json(ethnosport)
}

export const getEthnosportById = (req, res) => {
	const ethnoId = req.params.id
	const foundEthno = ethnosport.directions.find((ethno) => ethno.id === ethnoId)

	res.status(200).json(foundEthno)
}

export const getAllDisciplines = (req, res) => {
	res.status(200).json(disciplines)
}

export const getDisciplineById = (req, res) => {
	const disId = req.params.id
	const foundDiscipline = disciplines.find((dis) => dis.id === disId)

	res.status(200).json(foundDiscipline)
}

export const getGroups = (req, res) => {
	const { q } = req.query

	const filteredGroups = groups.filter((el) => el.title.toLowerCase().includes(q))

	res.status(200).json(filteredGroups)
}
export const getGroupById = (req, res) => {
	const groupId = req.params.id
	const foundGroup = groups.find((group) => group.id === groupId)

	res.status(200).json(foundGroup)
}

export const getGroupEvent = (req, res) => {
	const { q } = req.query
	const groupId = req.params.id

	const searchedGroup = groups.find((group) => group.id === groupId)
	const filteredEvents = searchedGroup.events.filter((event) =>
		event.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredEvents)
}
export const getGroupParticipantes = (req, res) => {
	const { q } = req.query
	const groupId = req.params.id

	const searchedGroup = groups.find((group) => group.id === groupId)
	const filteredParticipantes = searchedGroup.participants.filter((participant) =>
		participant.fullname.toLowerCase().includes(q),
	)

	res.status(200).json(filteredParticipantes)
}
export const getGroupTable = (req, res) => {
	const { q } = req.query
	const groupId = req.params.id

	const searchedGroup = groups.find((group) => group.id === groupId)
	const filteredGroups = searchedGroup.groups.filter((group) =>
		group.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredGroups)
}
export const getGroupDisciplinesById = (req, res) => {
	const groupId = req.params.id
	const searchedGroup = groups.find((group) => group.id === groupId)

	res.status(200).json(searchedGroup.disciplines)
}
export const getGroupPhotos = (req, res) => {
	const groupId = req.params.id

	const searchedGroup = groups.find((group) => group.id === groupId)

	res.status(200).json(searchedGroup.photos)
}

export const getGroupNews = (req, res) => {
	const groupId = req.params.id
	const { q, y } = req.query
	const searchedGroup = groups.find((group) => group.id === groupId)
	const filteredNews = searchedGroup.news.filter((el) => {
		if (y) {
			return String(new Date(el.date).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredNews)
}

export const getGroupNewsVideos = (req, res) => {
	const groupId = req.params.id
	const searchedGroup = groups.find((group) => group.id === groupId)
	res.status(200).json(searchedGroup.newsVideos)
}

export const getGroupNewsVideoById = (req, res) => {
	const groupId = req.params.id
	const videoId = req.params.videoId
	const searchedGroup = groups.find((group) => group.id === groupId)
	const foundVideoNews = searchedGroup.newsVideos.find((videoItem) => videoItem.id === videoId)

	res.status(200).json(foundVideoNews)
}

export const getGroupNewsById = (req, res) => {
	const groupId = req.params.id
	const newsId = req.params.newsId
	const searchedGroup = groups.find((group) => group.id === groupId)

	const foundNews = searchedGroup.news.find((newsItem) => newsItem.id === newsId)

	res.status(200).json(foundNews)
}

export const getAllBrandEvents = (req, res) => {
	res.status(200).json(brandEvents)
}
export const getBrandEventById = (req, res) => {
	const brandEventId = req.params.id
	const foundBrandEvent = brandEvents.find((brandEvent) => brandEvent.id === brandEventId)

	res.status(200).json(foundBrandEvent)
}

export const getEventsByBrands = (req, res) => {
	const { q } = req.query
	const brandEventId = req.params.id

	const searchedBrandEvent = brandEvents.find((brandEvent) => brandEvent.id === brandEventId)
	const filteredEvents = searchedBrandEvent.events.filter((event) =>
		event.title.toLowerCase().includes(q),
	)

	res.status(200).json(filteredEvents)
}

export const getBrandEventPhotos = (req, res) => {
	const brandEventId = req.params.id

	const searchedBrandEvent = brandEvents.find((brandEvent) => brandEvent.id === brandEventId)

	res.status(200).json(searchedBrandEvent.photos)
}

export const getBrandEventNews = (req, res) => {
	const brandEventId = req.params.id
	const { q, y } = req.query
	const searchedBrandEvent = brandEvents.find((brandEvent) => brandEvent.id === brandEventId)
	const filteredNews = searchedBrandEvent.news.filter((el) => {
		if (y) {
			return String(new Date(el.date).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredNews)
}

export const getBrandEventNewsVideos = (req, res) => {
	const brandEventId = req.params.id
	const searchedBrandEvent = brandEvents.find((brandEvent) => brandEvent.id === brandEventId)
	res.status(200).json(searchedBrandEvent.newsVideos)
}

export const getBrandEventNewsVideoById = (req, res) => {
	const brandEventId = req.params.id
	const videoId = req.params.videoId
	const searchedBrandEvent = brandEvents.find((brandEvent) => brandEvent.id === brandEventId)
	const foundVideoNews = searchedBrandEvent.newsVideos.find((videoItem) => videoItem.id === videoId)

	res.status(200).json(foundVideoNews)
}

export const getBrandEventNewsById = (req, res) => {
	const brandEventId = req.params.id
	const newsId = req.params.newsId
	const searchedBrandEvent = brandEvents.find((brandEvent) => brandEvent.id === brandEventId)

	const foundNews = searchedBrandEvent.news.find((newsItem) => newsItem.id === newsId)

	res.status(200).json(foundNews)
}

export const getEvents = (req, res) => {
	const { q, y } = req.query

	const filteredEvents = events.filter((el) => {
		if (y) {
			return String(new Date(el.dates[0]).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredEvents)
}

export const getEventById = (req, res) => {
	const eventId = req.params.id
	const foundEvent = events.find((eventItem) => eventItem.id === eventId)

	res.status(200).json(foundEvent)
}

export const getEventParticipantes = (req, res) => {
	const { q } = req.query
	const eventId = req.params.id

	const searchedEvent = events.find((event) => event.id === eventId)
	const filteredParticipantes = searchedEvent.participants.filter((participant) =>
		participant.fullname.toLowerCase().includes(q),
	)

	res.status(200).json(filteredParticipantes)
}
export const getEventTeams = (req, res) => {
	const { q } = req.query
	const eventId = req.params.id

	const searchedEvent = events.find((event) => event.id === eventId)
	const filteredTeams = searchedEvent.teams.filter((team) => team.title.toLowerCase().includes(q))

	res.status(200).json(filteredTeams)
}

export const getEventDisciplinesById = (req, res) => {
	const eventId = req.params.id
	const searchedEvent = events.find((event) => event.id === eventId)

	res.status(200).json(searchedEvent.disciplines)
}

export const getEventPhotos = (req, res) => {
	const eventId = req.params.id

	const searchedEvent = events.find((event) => event.id === eventId)

	res.status(200).json(searchedEvent.photos)
}

export const getEventNews = (req, res) => {
	const eventId = req.params.id
	const { q, y } = req.query
	const searchedEvent = events.find((event) => event.id === eventId)
	const filteredNews = searchedEvent.news.filter((el) => {
		if (y) {
			return String(new Date(el.date).getFullYear()) === y && el.title.toLowerCase().includes(q)
		}
		return el.title.toLowerCase().includes(q)
	})

	res.status(200).json(filteredNews)
}

export const getEventNewsVideos = (req, res) => {
	const eventId = req.params.id
	const searchedEvent = events.find((event) => event.id === eventId)
	res.status(200).json(searchedEvent.newsVideos)
}

export const getEventNewsVideoById = (req, res) => {
	const eventId = req.params.id
	const videoId = req.params.videoId
	const searchedEvent = events.find((event) => event.id === eventId)
	const foundVideoNews = searchedEvent.newsVideos.find((videoItem) => videoItem.id === videoId)

	res.status(200).json(foundVideoNews)
}

export const getEventNewsById = (req, res) => {
	const eventId = req.params.id
	const newsId = req.params.newsId
	const searchedEvent = events.find((event) => event.id === eventId)

	const foundNews = searchedEvent.news.find((newsItem) => newsItem.id === newsId)

	res.status(200).json(foundNews)
}

export const getEventProgramById = (req, res) => {
	const eventId = req.params.id
	const dayId = req.params.dayId
	const searchedEvent = events.find((event) => event.id === eventId)

	const searchedProgramList = searchedEvent.program.find((programEl) => programEl.id === dayId)

	res.status(200).json(searchedProgramList.programList)
}
export const getHomeRegions = (req, res) => {
	res.status(200).json(homeRegions)
}
export const getHomePosters = (req, res) => {
	res.status(200).json(homePosters)
}

export const getHomeNews = (req, res) => {
	res.status(200).json(homeNews)
}
export const getHomeVideos = (req, res) => {
	res.status(200).json(homeVideos)
}
export const getHomePartners = (req, res) => {
	res.status(200).json(homePartners)
}
export const getAllEventMonths = (req, res) => {
	res.status(200).json(homeEventMonths)
}
export const getHomeDepartments = (req, res) => {
	res.status(200).json(homeDepartments)
}

export const getEventMonths = (req, res) => {
	const { d, cat } = req.query
	const currentMonthEvents = homeEventMonths[d] || []

	const filteredEvents = currentMonthEvents.filter(
		(event) => cat === '0' || event.category.id === cat,
	)

	res.status(200).json(filteredEvents)
}

export const getEventCategories = (req, res) => {
	res.status(200).json(homeEventsCategories)
}

export const getHomeFaq = (req, res) => {
	res.status(200).json(homeFaq)
}
