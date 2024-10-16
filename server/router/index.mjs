import {
	deleteNews,
	getAllBrandEvents,
	getAllDisciplines,
	getAllEventMonths,
	getBrandEventById,
	getBrandEventNews,
	getBrandEventNewsById,
	getBrandEventNewsVideoById,
	getBrandEventNewsVideos,
	getBrandEventPhotos,
	getDisciplineById,
	getEthnosportById,
	getEthnosportGlobal,
	getEventById,
	getEventCategories,
	getEventDisciplinesById,
	getEventMonths,
	getEventNews,
	getEventNewsById,
	getEventNewsVideoById,
	getEventNewsVideos,
	getEventParticipantes,
	getEventPhotos,
	getEventProgramById,
	getEvents,
	getEventsByBrands,
	getEventTeams,
	getGroupById,
	getGroupDisciplinesById,
	getGroupEvent,
	getGroupNews,
	getGroupNewsById,
	getGroupNewsVideoById,
	getGroupNewsVideos,
	getGroupParticipantes,
	getGroupPhotos,
	getGroups,
	getGroupTable,
	getHomeDepartments,
	getHomeFaq,
	getHomeNews,
	getHomePartners,
	getHomePosters,
	getHomeRegions,
	getHomeVideos,
	getNews,
	getNewsById,
	getNewsVideoById,
	getNewsVideos,
	getObjectById,
	getObjects,
	getProjectById,
	getProjects,
	getRegionByCode,
	getRegionEvents,
	getRegionNews,
	getRegionNewsById,
	getRegionNewsVideoById,
	getRegionNewsVideos,
	getRegionParticipants,
	getRegionPhotos,
	getRegions,
	getRegionsInfo,
	getUserById,
	getUsers,
	getUsersDisciplines,
	getUsersEvent,
	getUsersGroup,
	getUsersMaterial,
	getUsersObject,
	getUsersPhotos,
	getUsersProject,
	getUsersVideos,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/regions-info', getRegionsInfo)
router.get('/regions', getRegions)
router.get('/regions/:code', getRegionByCode)
router.get('/regions/:code/participants', getRegionParticipants)
router.get('/regions/:code/events', getRegionEvents)
router.get('/regions/:code/photos', getRegionPhotos)
router.get('/regions/:code/news', getRegionNews)
router.get('/regions/:code/news-videos', getRegionNewsVideos)
router.get('/regions/:code/news/:newsId', getRegionNewsById)
router.get('/regions/:code/news-videos/:videoId', getRegionNewsVideoById)
router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.get('/users/:id/group', getUsersGroup)
router.get('/users/:id/event', getUsersEvent)
router.get('/users/:id/project', getUsersProject)
router.get('/users/:id/object', getUsersObject)
router.get('/users/:id/materials', getUsersMaterial)
router.get('/users/:id/disciplines', getUsersDisciplines)
router.get('/users/:id/photo', getUsersPhotos)
router.get('/users/:id/video', getUsersVideos)
router.get('/objects', getObjects)
router.get('/objects/:id', getObjectById)
router.get('/projects', getProjects)
router.get('/projects/:id', getProjectById)
router.get('/news', getNews)
router.get('/news-videos', getNewsVideos)
router.get('/news-videos/:id', getNewsVideoById)
router.get('/news/:id', getNewsById)
router.delete('/newsDelete/:id', deleteNews)
router.get('/events', getEvents)
router.get('/events/:id', getEventById)
router.get('/events/:id/participantes', getEventParticipantes)
router.get('/events/:id/teams', getEventTeams)
router.get('/events/:id/disciplines', getEventDisciplinesById)
router.get('/events/:id/photos', getEventPhotos)
router.get('/events/:id/news', getEventNews)
router.get('/events/:id/news-videos', getEventNewsVideos)
router.get('/events/:id/news/:newsId', getEventNewsById)
router.get('/events/:id/news-videos/:videoId', getEventNewsVideoById)
router.get('/events/:id/program/:dayId', getEventProgramById)
router.get('/ethnosport', getEthnosportGlobal)
router.get('/ethnosport/:id', getEthnosportById)
router.get('/disciplines', getAllDisciplines)
router.get('/disciplines/:id', getDisciplineById)
router.get('/groups', getGroups)
router.get('/groups/:id', getGroupById)
router.get('/groups/:id/event', getGroupEvent)
router.get('/groups/:id/participantes', getGroupParticipantes)
router.get('/groups/:id/table', getGroupTable)
router.get('/groups/:id/disciplines', getGroupDisciplinesById)
router.get('/groups/:id/photos', getGroupPhotos)
router.get('/groups/:id/news', getGroupNews)
router.get('/groups/:id/news-videos', getGroupNewsVideos)
router.get('/groups/:id/news/:newsId', getGroupNewsById)
router.get('/groups/:id/news-videos/:videoId', getGroupNewsVideoById)
router.get('/brand-events', getAllBrandEvents)
router.get('/brand-events/:id', getBrandEventById)
router.get('/brand-events/:id/news', getBrandEventNews)
router.get('/brand-events/:id/news-videos', getBrandEventNewsVideos)
router.get('/brand-events/:id/news/:newsId', getBrandEventNewsById)
router.get('/brand-events/:id/news-videos/:videoId', getBrandEventNewsVideoById)
router.get('/brand-events/:id/events', getEventsByBrands)
router.get('/brand-events/:id/photos', getBrandEventPhotos)
router.get('/home/regions', getHomeRegions)
router.get('/home/posters', getHomePosters)
router.get('/home/event-months', getEventMonths)
router.get('/home/all-event-months', getAllEventMonths)
router.get('/home/all-event-categories', getEventCategories)
router.get('/home/all-news', getHomeNews)
router.get('/home/all-videos', getHomeVideos)
router.get('/home/partners', getHomePartners)
router.get('/home/departments', getHomeDepartments)
router.get('/home/faq', getHomeFaq)
