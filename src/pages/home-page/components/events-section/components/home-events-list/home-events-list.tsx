import { type FC, useState } from 'react'

import { HomeEvent } from 'src/pages/home-page/components/events-section/components/home-event/home-event'
import { type HomeEventItem } from 'src/types/home-page'
import { MainButton } from 'src/UI/MainButton/MainButton'

import styles from './index.module.scss'
import { FlexRow } from 'src/components/flex-row/flex-row'

type HomeEventsListProps = {
	homeEvents: HomeEventItem[]
	previewCount?: number
}

export const HomeEventsList: FC<HomeEventsListProps> = ({ homeEvents, previewCount = 3 }) => {
	const [expandedList, setExpandedList] = useState(false)
	const slicedEvents = homeEvents.slice(0, expandedList ? homeEvents.length : previewCount)

	if (homeEvents.length < 1) return <p>Нет событий</p>

	return (
		<>
			<ul className={styles.eventsList}>
				{slicedEvents?.map((item) => <HomeEvent key={item.id} {...item} />)}
			</ul>
			{homeEvents.length > previewCount && (
				<FlexRow $justifyContent='center'>
					<MainButton $variant='light' type='button' onClick={() => setExpandedList(!expandedList)}>
						{expandedList ? 'Скрыть' : 'Показать еще'}
					</MainButton>
				</FlexRow>
			)}
		</>
	)
}
