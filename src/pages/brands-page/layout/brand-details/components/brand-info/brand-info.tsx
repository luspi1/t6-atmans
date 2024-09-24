import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { CustomText } from 'src/components/custom-text/custom-text'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { useGetBrandEventByIdQuery } from 'src/store/brandEvents/brand-events.api'

import styles from './index.module.scss'

export const BrandInfo = () => {
	const { id } = useParams()
	const { data: brandEventData } = useGetBrandEventByIdQuery(id ?? '')

	useAdditionalCrumbs(brandEventData?.title)

	return (
		<div className={styles.brandInfoWrapper}>
			<h2>{brandEventData?.title}</h2>
			<CustomText $fontSize='16px' $fontStyle='italic' $margin='0 0 25px 0'>
				Бренд события
			</CustomText>
			<div className={styles.mainInfo}>
				<div className={styles.avatarWrapper}>
					<img src={brandEventData?.preview} alt={brandEventData?.title} />
				</div>
				<div className={styles.infoBlock}>
					<CustomText
						$fontSize='16px'
						$fontStyle='italic'
						$lineHeight='1.45'
						$maxWidth='950px'
						$margin='-7px 0 20px 0'
					>
						{brandEventData?.desc}
					</CustomText>
					<InfoRow title='Категория:' label={brandEventData?.category} $titleWidth='85px' />
					<InfoRow
						title='Разделы:'
						label={<RenderedArray strArray={brandEventData?.sections} as='span' />}
						$titleWidth='85px'
					/>
					<InfoRow title='Регион:' label={brandEventData?.region} $titleWidth='85px' />
				</div>
			</div>
		</div>
	)
}
