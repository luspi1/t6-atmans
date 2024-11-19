import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { useGetObjectsInfoQuery } from 'src/store/objects/objects.api'
import { ObjectCard } from 'src/components/object-card/object-card'

import styles from './index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'

export const ObjectsList: FC = () => {
	const { data: objectsInfo } = useGetObjectsInfoQuery(null)
	return (
		<PageContent className={styles.objectsListPage}>
			<Helmet>
				<title>Объекты сообщества</title>
			</Helmet>

			<h2>Объекты сообщества</h2>
			<CustomText $fontSize='20px' $lineHeight='1.25' $margin='0 0 45px 0'>
				{objectsInfo?.description}
			</CustomText>
			<div className={styles.objectsList}>
				{objectsInfo?.objects?.map((objEL) => <ObjectCard key={objEL.id} {...objEL} />)}
			</div>
		</PageContent>
	)
}
