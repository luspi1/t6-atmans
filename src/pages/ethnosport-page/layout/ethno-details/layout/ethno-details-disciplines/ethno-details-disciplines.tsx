import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { DisciplinesList } from 'src/modules/disciplines-list/disciplines-list'
import { useGetEthnosportByIdQuery } from 'src/store/ethnosport/ethnosport.api'
import { Loader } from 'src/components/loader/loader'

import styles from './index.module.scss'

export const EthnoDetailsDisciplines: FC = () => {
	const { id } = useParams()
	const { data: ethnoDetails, isLoading } = useGetEthnosportByIdQuery(id ?? '')
	if (isLoading) return <Loader />
	return (
		<section className={styles.detailsDisciplinesSection}>
			<DisciplinesList disciplinesData={ethnoDetails?.disciplines} />
		</section>
	)
}
