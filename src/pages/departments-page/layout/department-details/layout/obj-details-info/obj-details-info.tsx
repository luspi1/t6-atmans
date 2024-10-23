import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'
import { Placement } from 'src/modules/placement/placement'
import { formatSourceLinks } from 'src/helpers/utils'
import { LinksList } from 'src/components/links-list/links-list'

import styles from './index.module.scss'

export const ObjDetailsInfo: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	return (
		<div className={styles.regionInfoPage}>
			<Helmet>
				<title>Информация о регионе</title>
			</Helmet>
			<section>
				<RenderedArray
					className={styles.descList}
					strArray={objectData?.descList}
					as='div'
					asStr='p'
					separator=''
				/>
			</section>
			<section>
				<LinksList dataList={formatSourceLinks(objectData?.relatedLinks)} title='Ссылки' />
			</section>
			<section>
				<Placement placeVariants={objectData?.pathways} title='Маршруты' />
			</section>
		</div>
	)
}
