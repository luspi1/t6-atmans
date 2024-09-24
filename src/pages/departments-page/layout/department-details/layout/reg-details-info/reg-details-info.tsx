import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { DepartmentDocuments } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-documents/department-documents'
import { DepartmentLinks } from 'src/pages/departments-page/layout/department-details/layout/reg-details-info/components/department-links/department-links'

import { RenderedArray } from 'src/components/rendered-array/rendered-array'

import styles from './index.module.scss'

export const RegDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')

	return (
		<div>
			<Helmet>
				<title>Информация о регионе</title>
			</Helmet>
			<RenderedArray
				className={styles.descList}
				strArray={regionData?.descList}
				as='div'
				asStr='p'
				separator=''
			/>
			<DepartmentDocuments {...regionData} />
			<DepartmentLinks {...regionData} />
		</div>
	)
}
