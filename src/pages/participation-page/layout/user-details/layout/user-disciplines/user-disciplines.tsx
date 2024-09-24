import React, { type FC } from 'react'

import { DisciplinesList } from 'src/modules/disciplines-list/disciplines-list'
import { useParams } from 'react-router-dom'
import { useGetUserDisciplinesQuery } from 'src/store/users/users.api'

import styles from './index.module.scss'

export const UserDisciplines: FC = () => {
	const { id } = useParams()

	const { data: userDisciplines } = useGetUserDisciplinesQuery(id ?? '')
	return (
		<section className={styles.userDisciplinesSection}>
			<DisciplinesList disciplinesData={userDisciplines} />
		</section>
	)
}
