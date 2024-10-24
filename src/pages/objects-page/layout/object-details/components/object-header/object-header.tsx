import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { SimpleLink } from 'src/components/simple-link/simple-link'

import { CustomText } from 'src/components/custom-text/custom-text'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjectHeader: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	useAdditionalCrumbs(objectData?.title)

	return (
		<div className={styles.departmentHeader}>
			{objectData?.title && <h2>{objectData?.title}</h2>}
			<div className={styles.mainDescContainer}>
				{objectData?.logo && (
					<p className={styles.logoContainer}>
						<img src={objectData?.logo} alt={objectData?.title} />
					</p>
				)}
				{objectData?.mainDesc && (
					<CustomText $fontStyle='italic' $fontSize='16px' $padding='13px 0 0 0' $lineHeight='1.46'>
						{objectData?.mainDesc}
					</CustomText>
				)}
			</div>

			<InfoRow title='Телефон:' label={objectData?.phone} $titleWidth='172px' />
			<InfoRow
				title='Электронная почта:'
				label={<SimpleLink title={objectData?.email} link={objectData?.email} isEmail />}
				$titleWidth='172px'
			/>
			<InfoRow title='Адрес объекта:' label={objectData?.address} $titleWidth='172px' />
		</div>
	)
}
