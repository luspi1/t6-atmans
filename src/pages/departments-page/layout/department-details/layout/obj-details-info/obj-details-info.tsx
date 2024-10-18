import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { useGetObjectByCodeQuery } from 'src/store/objects/objects.api'
import { DepartmentDocuments } from 'src/pages/departments-page/layout/department-details/layout/obj-details-info/components/department-documents/department-documents'
import { DepartmentLinks } from 'src/pages/departments-page/layout/department-details/layout/obj-details-info/components/department-links/department-links'

import styles from './index.module.scss'

export const ObjDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByCodeQuery(id ?? '')

	return (
		<div>
			<Helmet>
				<title>Информация о регионе</title>
			</Helmet>
			<RenderedArray
				className={styles.descList}
				strArray={objectData?.descList}
				as='div'
				asStr='p'
				separator=''
			/>
			<DepartmentDocuments {...objectData} />
			<DepartmentLinks {...objectData} />
		</div>
	)
}
