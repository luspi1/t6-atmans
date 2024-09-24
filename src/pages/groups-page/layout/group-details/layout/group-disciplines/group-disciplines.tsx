import React, { type FC } from 'react'

import { DisciplinesList } from 'src/modules/disciplines-list/disciplines-list'
import { useParams } from 'react-router-dom'
import { useGetGroupDisciplinesQuery } from 'src/store/groups/groups.api'

import styles from './index.module.scss'
import mainGroupsStyles from '../index.module.scss'

export const GroupDisciplines: FC = () => {
	const { id } = useParams()

	const { data: groupDisciplines } = useGetGroupDisciplinesQuery(id ?? '')
	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<section className={styles.groupDisciplinesSection}>
				<DisciplinesList disciplinesData={groupDisciplines} />
			</section>
		</div>
	)
}
