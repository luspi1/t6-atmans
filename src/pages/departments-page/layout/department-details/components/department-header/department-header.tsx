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
			<CustomText $fontStyle='italic' $fontSize='16px' $margin='0 0 15px 0'>
				{objectData?.type}
			</CustomText>
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
			<InfoRow
				title='Начальник объекта:'
				label={<a href='#'>{objectData?.director}</a>}
				$titleWidth='172px'
				$margin='0 0 36px 0'
			/>

			<InfoRow
				title='Телефоны:'
				label={<RenderedArray strArray={objectData?.phones} as='span' />}
				$titleWidth='172px'
			/>
			<InfoRow
				title='Электронная почта:'
				label={<SimpleLink title={objectData?.email} link={objectData?.email} isEmail />}
				$titleWidth='172px'
			/>
			<InfoRow title='Адрес объекта:' label={objectData?.address} $titleWidth='172px' />
		</div>
	)
}
