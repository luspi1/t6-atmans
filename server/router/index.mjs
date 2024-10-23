import {
	deleteNews,
	getAllBrandEvents,
	getAllDisciplines,
	getAllHomeEvents,
	getBrandEventById,
	getBrandEventNews,
	getBrandEventNewsById,
	getBrandEventNewsVideoById,
	getBrandEventNewsVideos,
	getBrandEventPhotos,
	getCultureById,
	getCultures,
	getDisciplineById,
	getEthnosportById,
	getEthnosportGlobal,
	getEventById,
	getEventDisciplinesById,
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
	getHomeFaq,
	getHomeNews,
	getHomeObjects,
	getHomePartners,
	getHomePosters,
	getHomeRegions,
	getHomeVideos,
	getNews,
	getNewsById,
	getNewsVideoById,
	getNewsVideos,
	getObjectByCode,
	getObjectEvents,
	getObjectNews,
	getObjectNewsById,
	getObjectNewsVideoById,
	getObjectNewsVideos,
	getObjectPhotos,
	getObjects,
	getObjectsInfo,
	getProjectById,
	getProjects,
} from '../controllers/main-controller.mjs'
import { Router } from 'express'

export const router = new Router()

router.get('/objects-info', getObjectsInfo)
router.get('/objects', getObjects)
router.get('/objects/:code', getObjectByCode)
router.get('/objects/:code/events', getObjectEvents)
router.get('/objects/:code/photos', getObjectPhotos)
router.get('/objects/:code/news', getObjectNews)
router.get('/objects/:code/news-videos', getObjectNewsVideos)
router.get('/objects/:code/news/:newsId', getObjectNewsById)
router.get('/objects/:code/news-videos/:videoId', getObjectNewsVideoById)
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
router.get('/home/all-events', getAllHomeEvents)
router.get('/home/all-news', getHomeNews)
router.get('/home/all-videos', getHomeVideos)
router.get('/home/partners', getHomePartners)
router.get('/home/objects', getHomeObjects)
router.get('/home/faq', getHomeFaq)
router.get('/cultures', getCultures)
router.get('/cultures/:id', getCultureById)
