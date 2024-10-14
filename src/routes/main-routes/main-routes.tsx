import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { MainLayout } from 'src/routes/main-layout/main-layout'

import { HomePage } from 'src/pages/home-page/home-page'

import { AboutLayout } from 'src/pages/about-page/about-layout'
import { AboutGeneral } from 'src/pages/about-page/layout/about-general/about-general'
import { AboutHistory } from 'src/pages/about-page/layout/about-history/about-history'
import { AboutDirection } from 'src/pages/about-page/layout/about-direction/about-direction'
import { AboutContacts } from 'src/pages/about-page/layout/about-contacts/about-contacts'
import { AboutDocuments } from 'src/pages/about-page/layout/about-documents/about-documents'
import { AboutMediakit } from 'src/pages/about-page/layout/about-mediakit/about-mediakit'

import { DepartmentsLayout } from 'src/pages/departments-page/layout/departments-layout'
import { DepartmentsList } from 'src/pages/departments-page/layout/departments-list/departments-list'
import { DepartmentsAbout } from 'src/pages/departments-page/layout/departments-about/departments-about'
import { DepartmentDetailsLayout } from 'src/pages/departments-page/layout/department-details/layout/department-details-layout'

import { RegDetailsInfo } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/reg-details-info'
import { RegDetailsHistory } from 'src/pages/departments-page/layout/department-details/layout/reg-details-history/reg-details-history'
import { RegDetailsParticipants } from 'src/pages/departments-page/layout/department-details/layout/reg-details-participants/reg-details-participants'
import { RegDetailsEvents } from 'src/pages/departments-page/layout/department-details/layout/reg-details-events/reg-details-events'
import { RegDetailsGallery } from 'src/pages/departments-page/layout/department-details/layout/reg-details-gallery/reg-details-gallery'
import { RegNewsLayout } from 'src/pages/departments-page/layout/department-details/layout/reg-details-news/layout/reg-news-layout'
import { RegNewsVideos } from 'src/pages/departments-page/layout/department-details/layout/reg-details-news/layout/reg-news-videos/reg-news-videos'
import { RegNewsVideoDetails } from 'src/pages/departments-page/layout/department-details/layout/reg-details-news/layout/reg-news-video-details/reg-news-video-details'
import { RegNewsDetails } from 'src/pages/departments-page/layout/department-details/layout/reg-details-news/layout/reg-news-details/reg-news-details'
import { RegNewsList } from 'src/pages/departments-page/layout/department-details/layout/reg-details-news/layout/reg-news-list/reg-news-list'

import { NewsDetails } from 'src/pages/news-page/layout/news-details/news-details'

import { NewsLayout } from 'src/pages/news-page/layout/news-layout'
import { VideosLayout } from 'src/pages/videos-page/layout/videos-layout'
import { Videos } from 'src/pages/videos-page/layout/videos/videos'
import { VideoDetails } from 'src/pages/videos-page/layout/video-details/video-details'
import { News } from 'src/pages/news-page/layout/news/news'

import { EventsLayout } from 'src/pages/events-page/events-layout'
import { EventsListPage } from 'src/pages/events-page/layout/events-list-page/events-list-page'
import { EventDetailsLayout } from 'src/pages/events-page/layout/events-details/layout/event-details-layout'
import { EventNewsLayout } from 'src/pages/events-page/layout/events-details/layout/event-news/layout/event-news-layout'
import { EventNewsList } from 'src/pages/events-page/layout/events-details/layout/event-news/layout/event-news-list/event-news-list'
import { EventNewsVideos } from 'src/pages/events-page/layout/events-details/layout/event-news/layout/news-videos/event-news-videos'
import { EventNewsVideoDetails } from 'src/pages/events-page/layout/events-details/layout/event-news/layout/event-news-video-details/event-news-video-details'
import { EventNewsDetails } from 'src/pages/events-page/layout/events-details/layout/event-news/layout/event-news-details/event-news-details'
import { EventHistory } from 'src/pages/events-page/layout/events-details/layout/event-history/event-history'
import { EventDisciplines } from 'src/pages/events-page/layout/events-details/layout/event-disciplines/event-disciplines'
import { EventParticipantesLayout } from 'src/pages/events-page/layout/events-details/layout/event-participantes/layout/event-participantes-layout'
import { TeamsParticipantesTable } from 'src/pages/events-page/layout/events-details/layout/event-participantes/layout/teams-participantes-table/teams-participantes-table'
import { LonesParticipantesTable } from 'src/pages/events-page/layout/events-details/layout/event-participantes/layout/lones-participantes-table/lones-participantes-table'
import { EventGallery } from 'src/pages/events-page/layout/events-details/layout/event-gallery/event-gallery'
import { EventProgramLayout } from 'src/pages/events-page/layout/events-details/layout/event-program/layout/event-program-layout'
import { EventProgramDay } from 'src/pages/events-page/layout/events-details/layout/event-program/layout/event-program-day/event-program-day'
import { EventDetails } from 'src/pages/events-page/layout/events-details/layout/event-details/event-details'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<MainLayout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />

				<Route path={AppRoute.About} element={<AboutLayout />}>
					<Route index element={<AboutGeneral />} />
					<Route path={AppRoute.AboutHistory} element={<AboutHistory />} />
					<Route path={AppRoute.AboutDirection} element={<AboutDirection />} />
					<Route path={AppRoute.AboutContacts} element={<AboutContacts />} />
					<Route path={AppRoute.AboutDocuments} element={<AboutDocuments />} />
					<Route path={AppRoute.AboutMediakit} element={<AboutMediakit />} />
				</Route>

				<Route path={AppRoute.Departments} element={<DepartmentsLayout />}>
					<Route index element={<DepartmentsList />} />
					<Route path={AppRoute.DepartmentsAbout} element={<DepartmentsAbout />} />
					<Route path=':id' element={<DepartmentDetailsLayout />}>
						<Route index element={<RegDetailsInfo />} />
						<Route path={AppRoute.News} element={<RegNewsLayout />}>
							<Route index element={<RegNewsList />} />
							<Route path={AppRoute.Videos} element={<RegNewsVideos />} />
							<Route path={`${AppRoute.Videos}/:vidId`} element={<RegNewsVideoDetails />} />
							<Route path=':newsId' element={<RegNewsDetails />} />
						</Route>
						<Route path={AppRoute.DepartmentsDetailsHistory} element={<RegDetailsHistory />} />
						<Route
							path={AppRoute.DepartmentsDetailsParticipant}
							element={<RegDetailsParticipants />}
						/>
						<Route path={AppRoute.DepartmentsDetailsEvents} element={<RegDetailsEvents />} />
						<Route path={AppRoute.DepartmentsDetailsGallery} element={<RegDetailsGallery />} />
					</Route>
				</Route>

				<Route path={AppRoute.News} element={<NewsLayout />}>
					<Route index element={<News />} />
					<Route path=':id' element={<NewsDetails />} />
				</Route>

				<Route path={AppRoute.Videos} element={<VideosLayout />}>
					<Route index element={<Videos />} />
					<Route path=':id' element={<VideoDetails />} />
				</Route>

				<Route path={AppRoute.Events} element={<EventsLayout />}>
					<Route index element={<EventsListPage />} />
					<Route path=':id' element={<EventDetailsLayout />}>
						<Route path={AppRoute.News} element={<EventNewsLayout />}>
							<Route index element={<EventNewsList />} />
							<Route path={AppRoute.Videos} element={<EventNewsVideos />} />
							<Route path={`${AppRoute.Videos}/:vidId`} element={<EventNewsVideoDetails />} />
							<Route path=':newsId' element={<EventNewsDetails />} />
						</Route>
						<Route path={AppRoute.EventInfo} element={<EventDetails />} />
						<Route path={AppRoute.EventHistory} element={<EventHistory />} />
						<Route path={`${AppRoute.EventProgram}`} element={<EventProgramLayout />}>
							<Route path=':dayId' element={<EventProgramDay />} />
						</Route>
						<Route path={AppRoute.EventDisciplines} element={<EventDisciplines />} />
						<Route path={AppRoute.EventParticipantes} element={<EventParticipantesLayout />}>
							<Route index element={<TeamsParticipantesTable />} />
							<Route
								path={AppRoute.EventLonesParticipantes}
								element={<LonesParticipantesTable />}
							/>
						</Route>
						<Route path={AppRoute.EventGallery} element={<EventGallery />} />
					</Route>
				</Route>
			</Route>
		</Routes>
	)
}
