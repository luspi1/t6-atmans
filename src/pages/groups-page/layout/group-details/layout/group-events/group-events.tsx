import React, { type FC, useState } from 'react'

import { useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'

import { Loader } from 'src/components/loader/loader'
import { EventsList } from 'src/modules/events-list/events-list'
import { useGetGroupEventQuery } from 'src/store/groups/groups.api'

import styles from './index.module.scss'
import mainGroupsStyles from '../index.module.scss'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { AppRoute } from 'src/routes/main-routes/consts'

export const GroupEvents: FC = () => {
	const [searchEvents] = useState<string>('')
	const debouncedSearch = useDebounce(searchEvents)

	const { id } = useParams()

	const { data: eventList, isLoading } = useGetGroupEventQuery([debouncedSearch, id ?? ''])

	if (isLoading || !eventList) return <Loader />

	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<section className={styles.groupEventsSection}>
				<EventsList
					className={styles.groupEventsList}
					eventsData={eventList}
					typeEventInfo='designation'
				/>
				<MainButton className={styles.allEventsLink} as='route' to={`/${AppRoute.Events}`}>
					Перейти в раздел Все события
				</MainButton>
			</section>
		</div>
	)
}
