import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { Loader } from 'src/components/loader/loader'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

import { AccordionItem } from 'src/components/accordion-item/accordion-item'
import { mainFormatDate } from 'src/helpers/utils'
import { useGetEventByIdQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'

export const EventHistory: FC = () => {
	const { id } = useParams()
	const { data: eventInfo, isLoading } = useGetEventByIdQuery(id ?? '')

	if (isLoading) return <Loader />
	if (!eventInfo) return null

	return (
		<div className={styles.chronologyTab}>
			{eventInfo?.chronology?.map((el, idx) => (
				<AccordionItem
					key={idx}
					className={styles.chronologyAccordion}
					trigger={
						<InfoRow
							title={mainFormatDate(el.date, 'dd MMMM yyyy года') ?? ''}
							label={el.text}
							$titleWidth='87px'
							$gap='10px'
							titleClassname='_accordion-open'
						/>
					}
					content={<InfoRow title='' label={el.hiddenText} $titleWidth='87px' $gap='10px' />}
				/>
			))}
		</div>
	)
}
