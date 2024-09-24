import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { DepartmentParticipantsTable } from './components/participants-table/participants-table'
import { useGetRegionParticipantsQuery } from 'src/store/regions/regions.api'
import { Pagination } from 'src/components/pagination/pagination'

import styles from './index.module.scss'

export const RegDetailsParticipants: FC = () => {
	const { id } = useParams()
	const { data: participants } = useGetRegionParticipantsQuery(['', id ?? ''])

	return (
		<div className={styles.participantsTablePage}>
			<p className={styles.participantsCount}>
				Участников отобрано: <b>{participants?.length ?? 0}</b>{' '}
			</p>
			<DepartmentParticipantsTable />
			<Pagination pagesCount={7} activePage={4} />
		</div>
	)
}
