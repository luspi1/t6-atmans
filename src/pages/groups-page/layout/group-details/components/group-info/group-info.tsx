import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { CustomText } from 'src/components/custom-text/custom-text'
import { useGetGroupByIdQuery } from 'src/store/groups/groups.api'

import styles from './index.module.scss'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

export const GroupInfo = () => {
	const { id } = useParams()
	const { data: groupData } = useGetGroupByIdQuery(id ?? '')

	useAdditionalCrumbs(groupData?.title)

	return (
		<div className={styles.groupInfoWrapper}>
			<h2>{groupData?.title}</h2>

			<div className={styles.mainInfo}>
				<div className={styles.avatarWrapper}>
					<img src={groupData?.avatar} alt={groupData?.title} />
				</div>
				<div className={styles.infoBlock}>
					<CustomText $fontSize='16px' $fontStyle='italic' $lineHeight='1.45' $margin='0 0 20px 0'>
						{groupData?.mainDesc}
					</CustomText>
					<InfoRow title='Категория:' label={groupData?.category} $titleWidth='85px' />
					<InfoRow
						title='Разделы:'
						label={<RenderedArray strArray={groupData?.sections} as='span' />}
						$titleWidth='85px'
					/>
					<InfoRow title='Регион:' label={groupData?.region} $titleWidth='85px' />
				</div>
			</div>
		</div>
	)
}
