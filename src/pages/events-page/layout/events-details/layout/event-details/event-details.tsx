import { type FC } from 'react'

import { useParams } from 'react-router-dom'

import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { Placement } from 'src/modules/placement/placement'
import { AccordionItem } from 'src/components/accordion-item/accordion-item'
import styles from './index.module.scss'

export const EventDetails: FC = () => {
	const { id } = useParams()

	const { data: eventInfo } = useGetEventByIdQuery(id ?? '')
	return (
		<div className={styles.eventDetailTab}>
			<section>
				<RenderedArray
					className={styles.eventDescs}
					strArray={eventInfo?.descs}
					as='div'
					asStr='p'
					separator=''
				/>
			</section>
			<section>
				<Placement placeVariants={eventInfo?.pathways} title='Как добраться' />
			</section>
			<section>
				<Placement placeVariants={eventInfo?.placement} title='Размещение' />
			</section>
			<section>
				<h4>Часто задаваемые вопросы</h4>
				<div className={styles.faqList}>
					{eventInfo?.faq?.map((faqEl, idx) => (
						<AccordionItem
							className={styles.eventFaqItem}
							key={idx}
							trigger={faqEl.title}
							content={faqEl.content}
						/>
					))}
				</div>
			</section>
		</div>
	)
}
