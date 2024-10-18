import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { SimpleLink } from 'src/components/simple-link/simple-link'

import { CustomText } from 'src/components/custom-text/custom-text'
import { useGetObjectByCodeQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const DepartmentHeader: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByCodeQuery(id ?? '')

	useAdditionalCrumbs(objectData?.fullTitle)

	return (
		<div className={styles.departmentHeader}>
			{objectData?.fullTitle && <h2>{objectData?.fullTitle}</h2>}
			<div className={styles.mainDescContainer}>
				{objectData?.logo && (
					<p className={styles.logoContainer}>
						<img src={objectData?.logo} alt={objectData?.fullTitle} />
					</p>
				)}
				{objectData?.mainDesc && (
					<CustomText $fontStyle='italic' $fontSize='16px' $padding='13px 0 0 0' $lineHeight='1.46'>
						{objectData?.mainDesc}
					</CustomText>
				)}
			</div>
			<InfoRow title='Руководитель Отделения:' label={<a href='#'>{objectData?.director}</a>} />
			<InfoRow title='Первый заместитель:' label={objectData?.vice} />
			<InfoRow title='Главный бухгалтер:' label={objectData?.accountant} $margin='0 0 35px 0' />

			<InfoRow
				title='Телефоны:'
				label={<RenderedArray strArray={objectData?.phones} as='span' />}
			/>
			<InfoRow
				title='Электронная почта:'
				label={<SimpleLink title={objectData?.email} link={objectData?.email} isEmail />}
			/>
			<InfoRow title='Сайт:' label={<a href={objectData?.site}>{objectData?.site}</a>} />
			<InfoRow title='Адрес отделения:' label={objectData?.address} />
		</div>
	)
}
