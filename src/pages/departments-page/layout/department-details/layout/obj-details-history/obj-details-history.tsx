import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { Loader } from 'src/components/loader/loader'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

import { AccordionItem } from 'src/components/accordion-item/accordion-item'
import { mainFormatDate } from 'src/helpers/utils'
import { useGetObjectByCodeQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjDetailsHistory: FC = () => {
	const { id } = useParams()
	const { data: objectDetails, isLoading } = useGetObjectByCodeQuery(id ?? '')

	if (isLoading) return <Loader />
	if (!objectDetails) return null

	const { history: objectHistory } = objectDetails

	return (
		<section className={styles.objectHistoryTab}>
			{objectHistory?.chronology?.map((el, idx) => (
				<AccordionItem
					key={idx}
					className={styles.chronologyAccordion}
					trigger={
						<InfoRow
							title={mainFormatDate(el.date) ?? ''}
							label={el.text}
							$titleWidth='87px'
							$gap='10px'
							titleClassname='_accordion-open'
						/>
					}
					content={<InfoRow title='' label={el.hiddenText} $titleWidth='87px' $gap='10px' />}
				/>
			))}
		</section>
	)
}
