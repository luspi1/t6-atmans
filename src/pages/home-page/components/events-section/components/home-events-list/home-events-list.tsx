import { type FC, useState } from 'react'

import { HomeEvent } from 'src/pages/home-page/components/events-section/components/home-event/home-event'
import { type HomeEventItem } from 'src/types/home-page'
import { MainButton } from 'src/UI/MainButton/MainButton'

import styles from './index.module.scss'

type HomeEventsListProps = {
	homeEvents: HomeEventItem[]
	previewCount?: number
}

export const HomeEventsList: FC<HomeEventsListProps> = ({ homeEvents, previewCount = 3 }) => {
	const [countEvents, setCountEvents] = useState(previewCount)
	const slicedEvents = [...homeEvents].slice(0, countEvents)
	return (
		<>
			<ul className={styles.eventsList}>
				{slicedEvents?.map((item) => <HomeEvent key={item.id} {...item} />)}
			</ul>
			{homeEvents.length > countEvents ? (
				<MainButton as='button' type='button' onClick={() => setCountEvents(homeEvents.length)}>
					Показать еще
				</MainButton>
			) : (
				<MainButton as='button' type='button' onClick={() => setCountEvents(previewCount)}>
					Скрыть
				</MainButton>
			)}
		</>
	)
}
