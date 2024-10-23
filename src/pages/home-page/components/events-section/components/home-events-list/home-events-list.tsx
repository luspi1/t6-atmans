import { type FC } from 'react'

import { HomeEvent } from 'src/pages/home-page/components/events-section/components/home-event/home-event'
import { type HomeEventItem } from 'src/types/home-page'

import styles from './index.module.scss'

type HomeEventsListProps = {
	homeEvents: HomeEventItem[]
	previewCount?: number
}

export const HomeEventsList: FC<HomeEventsListProps> = ({ homeEvents, previewCount = 3 }) => {
	const slicedEvents = homeEvents.slice(0, previewCount ?? homeEvents.length)

	if (homeEvents.length < 1) return <p>Нет событий</p>

	return (
		<ul className={styles.eventsList}>
			{slicedEvents?.map((item) => <HomeEvent key={item.id} {...item} />)}
		</ul>
	)
}
