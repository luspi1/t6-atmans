import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { CustomText } from 'src/components/custom-text/custom-text'
import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { mainFormatDate } from 'src/helpers/utils'
import { SimpleLink } from 'src/components/simple-link/simple-link'

import styles from './index.module.scss'

export const EventInfo = () => {
	const { id } = useParams()
	const { data: eventData } = useGetEventByIdQuery(id ?? '')

	useAdditionalCrumbs(eventData?.title)

	return (
		<div className={styles.eventInfoWrapper}>
			<h2>{eventData?.title}</h2>
			<CustomText $fontSize='16px' $margin='0 0 20px 0'>
				{mainFormatDate(eventData?.date)}
			</CustomText>

			<div className={styles.mainInfo}>
				<div className={styles.avatarWrapper}>
					<img src={eventData?.imgUrl} alt={eventData?.title} />
				</div>
				<div className={styles.infoBlock}>
					<CustomText $fontSize='16px' $fontStyle='italic' $lineHeight='1.45' $margin='0 0 20px 0'>
						{eventData?.description}
					</CustomText>
					<InfoRow
						title='Категория:'
						label={eventData?.category?.title}
						$titleWidth='180px'
						$gap='24px'
					/>
					<InfoRow
						title='Разделы:'
						label={<RenderedArray strArray={eventData?.sections} as='span' />}
						$titleWidth='180px'
						$gap='24px'
					/>
					<InfoRow
						title='Регион:'
						label={eventData?.location?.title}
						$titleWidth='180px'
						$gap='24px'
					/>
					<InfoRow
						title='Организаторы:'
						label={
							<RenderedArray
								elArray={eventData?.organizerLinks.map((link, idx) => (
									<SimpleLink key={idx} title={link.title} link={link.link} />
								))}
							/>
						}
						$titleWidth='180px'
						$gap='24px'
					/>
				</div>
			</div>
		</div>
	)
}
