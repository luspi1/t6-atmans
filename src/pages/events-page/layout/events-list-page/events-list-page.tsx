import React, { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { FilteredEventsList } from 'src/pages/events-page/layout/events-list-page/components/filtered-events-list/filtered-events-list'
import { EventPoster } from 'src/pages/events-page/layout/events-list-page/components/event-poster/event-poster'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const EventsListPage: FC = () => {
	return (
		<Container $paddingAdaptive='0'>
			<PageContent
				className={styles.eventsPageContent}
				$padding='0 0 70px 0'
				$borderRadius='25px 25px 0 0'
			>
				<Helmet>
					<title>Cобытия</title>
				</Helmet>
				<EventPoster />
				<FilteredEventsList />
			</PageContent>
		</Container>
	)
}
