import { type FC } from 'react'

import { HomeEvent } from 'src/pages/home-page/components/events-section/components/home-event/home-event'
import { useGetHomeEventsQuery } from 'src/store/home/home.api'

import styles from './index.module.scss'

export const HomeEventsList: FC = () => {
	const { data: eventsData } = useGetHomeEventsQuery(null)

	return (
		<ul className={styles.eventsList}>
			{eventsData?.map((item) => <HomeEvent key={item.id} {...item} />)}
		</ul>
	)
}
