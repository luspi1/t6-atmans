import React, { type FC } from 'react'

import { DisciplinesList } from 'src/modules/disciplines-list/disciplines-list'
import { useParams } from 'react-router-dom'
import { useGetEventDisciplinesQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'

export const EventDisciplines: FC = () => {
	const { id } = useParams()

	const { data: eventDisciplines } = useGetEventDisciplinesQuery(id ?? '')
	return (
		<div className={styles.eventDisciplinesSection}>
			<DisciplinesList disciplinesData={eventDisciplines} />
		</div>
	)
}
