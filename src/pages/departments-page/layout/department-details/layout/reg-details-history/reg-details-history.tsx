import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { Loader } from 'src/components/loader/loader'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

import { AccordionItem } from 'src/components/accordion-item/accordion-item'
import { mainFormatDate } from 'src/helpers/utils'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'

import styles from './index.module.scss'

export const RegDetailsHistory: FC = () => {
	const { id } = useParams()
	const { data: regionDetails, isLoading } = useGetRegionByCodeQuery(id ?? '')

	if (isLoading) return <Loader />
	if (!regionDetails) return null

	const { history: regionHistory } = regionDetails

	return (
		<section className={styles.regionHistoryTab}>
			{regionHistory?.chronology?.map((el, idx) => (
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
