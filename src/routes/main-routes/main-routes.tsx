import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { MainLayout } from 'src/routes/main-layout/main-layout'

import { HomePage } from 'src/pages/home-page/home-page'

import { AboutLayout } from 'src/pages/about-page/about-layout'
import { AboutGeneral } from 'src/pages/about-page/layout/about-general/about-general'
import { AboutHistory } from 'src/pages/about-page/layout/about-history/about-history'
import { AboutContacts } from 'src/pages/about-page/layout/about-contacts/about-contacts'

import { DepartmentsLayout } from 'src/pages/departments-page/departments-layout'
import { DepartmentsList } from 'src/pages/departments-page/layout/departments-list/departments-list'
import { DepartmentsAbout } from 'src/pages/departments-page/layout/departments-about/departments-about'
import { DepartmentDetailsLayout } from 'src/pages/departments-page/layout/department-details/department-details-layout'

import { ObjDetailsHistory } from 'src/pages/departments-page/layout/department-details/layout/obj-details-history/obj-details-history'
import { ObjDetailsEvents } from 'src/pages/departments-page/layout/department-details/layout/obj-details-events/obj-details-events'
import { ObjDetailsGallery } from 'src/pages/departments-page/layout/department-details/layout/obj-details-gallery/obj-details-gallery'
import { ObjDetailsInfo } from 'src/pages/departments-page/layout/department-details/layout/obj-details-info/obj-details-info'
import { ObjNewsLayout } from 'src/pages/departments-page/layout/department-details/layout/obj-details-news/layout/obj-news-layout'
import { ObjNewsList } from 'src/pages/departments-page/layout/department-details/layout/obj-details-news/layout/obj-news-list/obj-news-list'
import { ObjNewsVideos } from 'src/pages/departments-page/layout/department-details/layout/obj-details-news/layout/obj-news-videos/obj-news-videos'
import { ObjNewsVideoDetails } from 'src/pages/departments-page/layout/department-details/layout/obj-details-news/layout/obj-news-video-details/obj-news-video-details'
import { ObjNewsDetails } from 'src/pages/departments-page/layout/department-details/layout/obj-details-news/layout/obj-news-details/obj-news-details'

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
import { EventGallery } from 'src/pages/events-page/layout/events-details/layout/event-gallery/event-gallery'
import { EventProgramLayout } from 'src/pages/events-page/layout/events-details/layout/event-program/layout/event-program-layout'
import { EventProgramDay } from 'src/pages/events-page/layout/events-details/layout/event-program/layout/event-program-day/event-program-day'
import { EventDetails } from 'src/pages/events-page/layout/events-details/layout/event-details/event-details'
import { AboutCultureLayout } from 'src/pages/about-page/layout/about-culture/about-culture-layout'
import { CultureGeneral } from 'src/pages/about-page/layout/about-culture/layout/culture-general/culture-general'
import { CultureDetails } from 'src/pages/about-page/layout/about-culture/layout/culture-details/culture-details'
import { SearchPage } from 'src/pages/search-page/search-page'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<MainLayout />}>
				<Route path={AppRoute.Home} element={<HomePage />} />
				<Route path={AppRoute.Search} element={<SearchPage />} />

				<Route path={AppRoute.About} element={<AboutLayout />}>
					<Route index element={<AboutGeneral />} />
					<Route path={AppRoute.AboutHistory} element={<AboutHistory />} />
					<Route path={AppRoute.AboutCulture} element={<AboutCultureLayout />}>
						<Route index element={<CultureGeneral />} />
						<Route path=':id' element={<CultureDetails />} />
					</Route>
					<Route path={AppRoute.AboutContacts} element={<AboutContacts />} />
				</Route>

				<Route path={AppRoute.Departments} element={<DepartmentsLayout />}>
					<Route index element={<DepartmentsList />} />
					<Route path={AppRoute.DepartmentsAbout} element={<DepartmentsAbout />} />
					<Route path=':id' element={<DepartmentDetailsLayout />}>
						<Route index element={<ObjDetailsInfo />} />
						<Route path={AppRoute.News} element={<ObjNewsLayout />}>
							<Route index element={<ObjNewsList />} />
							<Route path={AppRoute.Videos} element={<ObjNewsVideos />} />
							<Route path={`${AppRoute.Videos}/:vidId`} element={<ObjNewsVideoDetails />} />
							<Route path=':newsId' element={<ObjNewsDetails />} />
						</Route>
						<Route path={AppRoute.DepartmentsDetailsHistory} element={<ObjDetailsHistory />} />
						<Route path={AppRoute.DepartmentsDetailsEvents} element={<ObjDetailsEvents />} />
						<Route path={AppRoute.DepartmentsDetailsGallery} element={<ObjDetailsGallery />} />
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
						<Route path={AppRoute.EventGallery} element={<EventGallery />} />
					</Route>
				</Route>
			</Route>
		</Routes>
	)
}
