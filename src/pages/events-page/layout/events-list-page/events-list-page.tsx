import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'

import { useGetAllEventsQuery } from 'src/store/events/events.api'
import { EventCard } from 'src/components/event-card/event-card'

import styles from './index.module.scss'

export const EventsListPage: FC = () => {
	const { data: eventsList } = useGetAllEventsQuery({ year: '' })

	return (
		<PageContent>
			<Helmet>
				<title>Cобытия</title>
			</Helmet>
			<h2>Cобытия</h2>
			<div className={styles.eventsList}>
				{eventsList?.map((eventEl) => <EventCard key={eventEl.id} {...eventEl} />)}
			</div>
		</PageContent>
	)
}
