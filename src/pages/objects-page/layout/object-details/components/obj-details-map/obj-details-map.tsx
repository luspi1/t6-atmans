import React, { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjDetailsMap: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	return (
		<section className={styles.mapSection}>
			<div className={styles.objLocation}>
				<iframe src={objectData?.location} width='100%' height='100%' loading='eager'></iframe>
			</div>
		</section>
	)
}
