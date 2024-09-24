import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { CustomText } from 'src/components/custom-text/custom-text'
import { useGetEventByIdQuery } from 'src/store/events/events.api'

import styles from './index.module.scss'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { formatDateRange } from 'src/helpers/utils'
import { SimpleLink } from 'src/components/simple-link/simple-link'

export const EventInfo = () => {
	const { id } = useParams()
	const { data: eventData } = useGetEventByIdQuery(id ?? '')

	useAdditionalCrumbs(eventData?.title)

	return (
		<div className={styles.eventInfoWrapper}>
			<h2>{eventData?.title}</h2>
			<CustomText $fontSize='16px' $fontStyle='italic' $margin='0 0 20px 0'>
				{formatDateRange(eventData?.dates ?? [])}
			</CustomText>

			<div className={styles.mainInfo}>
				<div className={styles.avatarWrapper}>
					<img src={eventData?.preview} alt={eventData?.title} />
				</div>
				<div className={styles.infoBlock}>
					<CustomText $fontSize='16px' $fontStyle='italic' $lineHeight='1.45' $margin='0 0 20px 0'>
						{eventData?.desc}
					</CustomText>
					<InfoRow title='Категория:' label={eventData?.category} $titleWidth='180px' $gap='24px' />
					<InfoRow
						title='Разделы:'
						label={<RenderedArray strArray={eventData?.sections} as='span' />}
						$titleWidth='180px'
						$gap='24px'
					/>
					<InfoRow title='Регион:' label={eventData?.location} $titleWidth='180px' $gap='24px' />
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
					<InfoRow
						title='Бренд событий:'
						label={<a href={eventData?.mainBrand.link}>{eventData?.mainBrand.title}</a>}
						$titleWidth='180px'
						$gap='24px'
					/>
				</div>
			</div>
		</div>
	)
}
