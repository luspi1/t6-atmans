import { type FC } from 'react'

import { useParams } from 'react-router-dom'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'

import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { SimpleLink } from 'src/components/simple-link/simple-link'

import styles from './index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'

export const DepartmentHeader: FC = () => {
	const { id } = useParams()

	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')

	useAdditionalCrumbs(regionData?.fullTitle)

	return (
		<div className={styles.departmentHeader}>
			{regionData?.fullTitle && <h2>{regionData?.fullTitle}</h2>}
			<div className={styles.mainDescContainer}>
				{regionData?.logo && (
					<p className={styles.logoContainer}>
						<img src={regionData?.logo} alt={regionData?.fullTitle} />
					</p>
				)}
				{regionData?.mainDesc && (
					<CustomText $fontStyle='italic' $fontSize='16px' $padding='13px 0 0 0' $lineHeight='1.46'>
						{regionData?.mainDesc}
					</CustomText>
				)}
			</div>
			<InfoRow title='Руководитель Отделения:' label={<a href='#'>{regionData?.director}</a>} />
			<InfoRow title='Первый заместитель:' label={regionData?.vice} />
			<InfoRow title='Главный бухгалтер:' label={regionData?.accountant} $margin='0 0 35px 0' />

			<InfoRow
				title='Телефоны:'
				label={<RenderedArray strArray={regionData?.phones} as='span' />}
			/>
			<InfoRow
				title='Электронная почта:'
				label={<SimpleLink title={regionData?.email} link={regionData?.email} isEmail />}
			/>
			<InfoRow title='Сайт:' label={<a href={regionData?.site}>{regionData?.site}</a>} />
			<InfoRow title='Адрес отделения:' label={regionData?.address} />
		</div>
	)
}
