import { type FC } from 'react'

import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { EventInfoNavItems } from 'src/pages/events-page/layout/events-details/layout/consts'

import styles from './index.module.scss'

export const EventDetailsLayout: FC = () => {
	return (
		<div className={styles.eventDetailsWrapper}>
			<PageContent className={styles.eventDetailsContent} $padding='30px 30px 40px 30px'>
				<Helmet>
					<title>Информация о событии</title>
				</Helmet>
				{/* <EventInfo /> */}
				<TabNav className={styles.eventTabs} navItems={EventInfoNavItems} />
				<Outlet />
				<h2>Страница в разработке...</h2>
			</PageContent>
			{/* <DetailedAside */}
			{/* 	brandImg={eventInfo?.brandImg} */}
			{/* 	genPartnerImg={eventInfo?.partnerImg} */}
			{/* 	partners={eventInfo?.partnerLinks} */}
			{/* 	organizers={eventInfo?.organizerLinks} */}
			{/* 	documents={eventInfo?.sideDocs} */}
			{/* 	links={eventInfo?.relatedLinks} */}
			{/* /> */}
		</div>
	)
}
