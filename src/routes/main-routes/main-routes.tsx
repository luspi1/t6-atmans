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

import { EthnosportLayout } from 'src/pages/ethnosport-page/ethnosport-layout'
import { EthnoGeneral } from 'src/pages/ethnosport-page/layout/ethno-general/ethno-general'
import { EthnoDetails } from 'src/pages/ethnosport-page/layout/ethno-details/ethno-details'
import { EthnoDetailsInfo } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-info/ethno-details-info'
import { EthnoDetailsHistory } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-history/ethno-details-history'
import { EthnoDetailsDisciplines } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-disciplines/ethno-details-disciplines'
import { EthnoDetailsEvents } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-events/ethno-details-events'
import { EthnoDetailsParticipants } from 'src/pages/ethnosport-page/layout/ethno-details/layout/ethno-details-participants/ethno-details-participants'

import { DisciplinesLayout } from 'src/pages/disciplines-page/disciplines-layout'
import { Disciplines } from 'src/pages/disciplines-page/layout/disciplines/disciplines'
import { DisciplineDetails } from 'src/pages/disciplines-page/layout/discipline-details/discipline-details'
import { DisDetailsInfo } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-info/dis-details-info'
import { DisDetailsEvents } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-events/dis-details-events'
import { DisDetailsGallery } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-gallery/dis-details-gallery'
import { DisGalleryPhotos } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-gallery/layout/dis-gallery-photos/dis-gallery-photos'
import { DisGalleryVideos } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-gallery/layout/dis-gallery-videos/dis-gallery-videos'

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

import { ParticipationLayout } from 'src/pages/participation-page/layout/participation-layout'

import { UsersList } from 'src/pages/participation-page/layout/users-list/users-list'
import { UserDetailsLayout } from 'src/pages/participation-page/layout/user-details/layout/user-details-layout'
import { UserDetails } from 'src/pages/participation-page/layout/user-details/layout/user-details/user-details'
import { UserEvents } from 'src/pages/participation-page/layout/user-details/layout/user-events/user-events'
import { UserGroups } from 'src/pages/participation-page/layout/user-details/layout/user-groups/user-groups'
import { UserDisciplines } from 'src/pages/participation-page/layout/user-details/layout/user-disciplines/user-disciplines'
import { UserGallery } from 'src/pages/participation-page/layout/user-details/layout/user-gallery/user-gallery'
import { UserAuthors } from 'src/pages/participation-page/layout/user-details/layout/user-authors/user-authors'

import { NewsDetails } from 'src/pages/news-page/layout/news-details/news-details'

import { GroupsLayout } from 'src/pages/groups-page/layout/groups-layout'
import { GroupsList } from 'src/pages/groups-page/layout/groups-list/groups-list'
import { GroupDetailsLayout } from 'src/pages/groups-page/layout/group-details/layout/group-details-layout'
import { GroupDetails } from 'src/pages/groups-page/layout/group-details/layout/group-details/group-details'
import { GroupContacts } from 'src/pages/groups-page/layout/group-details/layout/group-contacts/group-contacts'
import { GroupEvents } from 'src/pages/groups-page/layout/group-details/layout/group-events/group-events'
import { GroupParticipantes } from 'src/pages/groups-page/layout/group-details/layout/group-participantes/group-participantes'
import { GroupTable } from 'src/pages/groups-page/layout/group-details/layout/group-table/group-table'
import { GroupDisciplines } from 'src/pages/groups-page/layout/group-details/layout/group-disciplines/group-disciplines'
import { GroupGallery } from 'src/pages/groups-page/layout/group-details/layout/group-gallery/group-gallery'
import { GroupNewsLayout } from 'src/pages/groups-page/layout/group-details/layout/group-news/layout/group-news-layout'
import { GroupNewsList } from 'src/pages/groups-page/layout/group-details/layout/group-news/layout/group-news-list/group-news-list'
import { GroupNewsVideos } from 'src/pages/groups-page/layout/group-details/layout/group-news/layout/news-videos/group-news-videos'
import { GroupNewsVideoDetails } from 'src/pages/groups-page/layout/group-details/layout/group-news/layout/group-news-video-details/group-news-video-details'
import { GroupNewsDetails } from 'src/pages/groups-page/layout/group-details/layout/group-news/layout/group-news-details/group-news-details'
import { NewsLayout } from 'src/pages/news-page/layout/news-layout'
import { VideosLayout } from 'src/pages/videos-page/layout/videos-layout'
import { Videos } from 'src/pages/videos-page/layout/videos/videos'
import { VideoDetails } from 'src/pages/videos-page/layout/video-details/video-details'
import { News } from 'src/pages/news-page/layout/news/news'

import { BrandsLayout } from 'src/pages/brands-page/layout/brands-layout'
import { BrandsList } from 'src/pages/brands-page/layout/brands-list/brands-list'
import { BrandDetailsLayout } from 'src/pages/brands-page/layout/brand-details/layout/brand-details-layout'
import { BrandNewsLayout } from 'src/pages/brands-page/layout/brand-details/layout/brand-news/layout/brand-news-layout'
import { BrandNewsList } from 'src/pages/brands-page/layout/brand-details/layout/brand-news/layout/brand-news-list/brand-news-list'
import { BrandNewsVideos } from 'src/pages/brands-page/layout/brand-details/layout/brand-news/layout/brand-news-videos/brand-news-videos'
import { BrandNewsVideoDetails } from 'src/pages/brands-page/layout/brand-details/layout/brand-news/layout/brand-news-video-details/brand-news-video-details'
import { BrandNewsDetails } from 'src/pages/brands-page/layout/brand-details/layout/brand-news/layout/brand-news-details/brand-news-details'
import { BrandDetails } from 'src/pages/brands-page/layout/brand-details/layout/brand-details/brand-details'
import { BrandEvents } from 'src/pages/brands-page/layout/brand-details/layout/brand-events/brand-events'
import { BrandGallery } from 'src/pages/brands-page/layout/brand-details/layout/brand-gallery/brand-gallery'

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

				<Route path={AppRoute.Ethnosport} element={<EthnosportLayout />}>
					<Route index element={<EthnoGeneral />} />
					<Route path=':id' element={<EthnoDetails />}>
						<Route index element={<EthnoDetailsInfo />} />
						<Route path={AppRoute.EthnoHistory} element={<EthnoDetailsHistory />} />
						<Route path={AppRoute.EthnoDisciplines} element={<EthnoDetailsDisciplines />} />
						<Route path={AppRoute.EthnoEvents} element={<EthnoDetailsEvents />} />
						<Route path={AppRoute.EthnoParticipants} element={<EthnoDetailsParticipants />} />
					</Route>
				</Route>

				<Route path={AppRoute.Disciplines} element={<DisciplinesLayout />}>
					<Route index element={<Disciplines />} />
					<Route path=':id' element={<DisciplineDetails />}>
						<Route index element={<DisDetailsInfo />} />
						<Route path={AppRoute.DisEvents} element={<DisDetailsEvents />} />
						<Route path={AppRoute.DisGallery} element={<DisDetailsGallery />}>
							<Route index element={<DisGalleryPhotos />} />
							<Route path={AppRoute.DisGalleryVideos} element={<DisGalleryVideos />} />
						</Route>
					</Route>
				</Route>

				<Route path={AppRoute.Users} element={<ParticipationLayout />}>
					<Route index element={<UsersList />} />
					<Route path=':id' element={<UserDetailsLayout />}>
						<Route path={AppRoute.UserInfo} element={<UserDetails />} />
						<Route path={AppRoute.UserEvents} element={<UserEvents />} />
						<Route path={AppRoute.UserGroups} element={<UserGroups />} />
						<Route path={AppRoute.UserDisciplines} element={<UserDisciplines />} />
						<Route path={AppRoute.UserGallery} element={<UserGallery />} />
						<Route path={AppRoute.UserAuthors} element={<UserAuthors />} />
					</Route>
				</Route>
				<Route path={AppRoute.Groups} element={<GroupsLayout />}>
					<Route index element={<GroupsList />} />
					<Route path=':id' element={<GroupDetailsLayout />}>
						<Route path={AppRoute.News} element={<GroupNewsLayout />}>
							<Route index element={<GroupNewsList />} />
							<Route path={AppRoute.Videos} element={<GroupNewsVideos />} />
							<Route path={`${AppRoute.Videos}/:vidId`} element={<GroupNewsVideoDetails />} />
							<Route path=':newsId' element={<GroupNewsDetails />} />
						</Route>
						<Route path={AppRoute.GroupInfo} element={<GroupDetails />} />
						<Route path={AppRoute.GroupContacts} element={<GroupContacts />} />
						<Route path={AppRoute.GroupEvents} element={<GroupEvents />} />
						<Route path={AppRoute.GroupParticipantes} element={<GroupParticipantes />} />
						<Route path={AppRoute.GroupTable} element={<GroupTable />} />
						<Route path={AppRoute.GroupDisciplines} element={<GroupDisciplines />} />
						<Route path={AppRoute.GroupGallery} element={<GroupGallery />} />
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
			<Route path={AppRoute.Brands} element={<BrandsLayout />}>
				<Route index element={<BrandsList />} />
				<Route path=':id' element={<BrandDetailsLayout />}>
					<Route path={AppRoute.News} element={<BrandNewsLayout />}>
						<Route index element={<BrandNewsList />} />
						<Route path={AppRoute.Videos} element={<BrandNewsVideos />} />
						<Route path={`${AppRoute.Videos}/:vidId`} element={<BrandNewsVideoDetails />} />
						<Route path=':newsId' element={<BrandNewsDetails />} />
					</Route>
					<Route path={AppRoute.BrandInfo} element={<BrandDetails />} />
					<Route path={AppRoute.BrandEventsList} element={<BrandEvents />} />
					<Route path={AppRoute.BrandGallery} element={<BrandGallery />} />
				</Route>
			</Route>
		</Routes>
	)
}
