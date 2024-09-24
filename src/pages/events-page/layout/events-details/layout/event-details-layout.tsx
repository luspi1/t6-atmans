import { type FC } from 'react'
import { type ContentNav } from 'src/types/navigation'

import { Outlet, Navigate, Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/routes/main-routes/consts'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { EventInfoNavItems } from 'src/pages/events-page/layout/events-details/layout/consts'
import { EventInfo } from 'src/pages/events-page/layout/events-details/components/event-info/event-info'

import styles from './index.module.scss'
import { DetailedAside } from 'src/modules/detailedAside/detailedAside'
import { useGetEventByIdQuery } from 'src/store/events/events.api'

export const EventDetailsLayout: FC = () => {
	const [matchesLocation] = useLocationMatch<ContentNav>([`${AppRoute.Events}/:id`])
	const { id } = useParams()
	const { data: eventInfo } = useGetEventByIdQuery(id ?? '')

	if (matchesLocation) return <Navigate to={AppRoute.News} replace />

	return (
		<div className={styles.eventDetailsWrapper}>
			<PageContent
				className={styles.eventDetailsContent}
				$padding='30px 30px 40px 30px'
				$maxWidth='985px'
			>
				<Helmet>
					<title>Информация о событии</title>
				</Helmet>
				<EventInfo />
				<TabNav className={styles.eventTabs} navItems={EventInfoNavItems} />
				<Outlet />
				<Link className={styles.allEventsLink} to={`/${AppRoute.Events}`}>
					На страницу списка событий
				</Link>
			</PageContent>
			<DetailedAside
				brandImg={eventInfo?.brandImg}
				genPartnerImg={eventInfo?.partnerImg}
				partners={eventInfo?.partnerLinks}
				organizers={eventInfo?.organizerLinks}
				documents={eventInfo?.sideDocs}
				links={eventInfo?.relatedLinks}
			/>
		</div>
	)
}
