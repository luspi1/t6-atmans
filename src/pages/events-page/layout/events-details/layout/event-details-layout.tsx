import { type FC } from 'react'

import { Outlet, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { EventInfoNavItems } from 'src/pages/events-page/layout/events-details/layout/consts'
import { EventInfo } from 'src/pages/events-page/layout/events-details/components/event-info/event-info'
import { DetailedAside } from 'src/modules/detailedAside/detailedAside'
import { useGetEventByIdQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'

export const EventDetailsLayout: FC = () => {
	const { id } = useParams()

	const { data: eventInfo } = useGetEventByIdQuery(id ?? '')
	return (
		<div className={styles.eventDetailsWrapper}>
			<PageContent className={styles.eventDetailsContent}>
				<Helmet>
					<title>Информация о событии</title>
				</Helmet>
				<EventInfo />
				<TabNav className={styles.eventTabs} navItems={EventInfoNavItems} />
				<Outlet />
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
