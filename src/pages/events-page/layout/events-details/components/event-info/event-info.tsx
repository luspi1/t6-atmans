import { Link, useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useAdditionalCrumbs } from 'src/hooks/additional-crumbs/additional-crumbs'
import { CustomText } from 'src/components/custom-text/custom-text'
import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { mainFormatDate } from 'src/helpers/utils'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const EventInfo = () => {
	const { id } = useParams()
	const { data: eventData } = useGetEventByIdQuery(id ?? '')

	useAdditionalCrumbs(eventData?.title)

	return (
		<div className={styles.eventInfoWrapper}>
			<h2>{eventData?.title}</h2>
			<CustomText $fontSize='16px' $margin='0 0 28px 0'>
				{mainFormatDate(eventData?.date)}
			</CustomText>

			<div className={styles.mainInfo}>
				<div className={styles.avatarWrapper}>
					<img src={eventData?.imgUrl} alt={eventData?.title} />
				</div>
				<div className={styles.infoBlock}>
					<CustomText $fontSize='20px' $lineHeight='1.3' $margin='0 0 30px 0'>
						{eventData?.description}
					</CustomText>
					<InfoRow
						title='Место проведения:'
						label={eventData?.location?.address}
						$titleWidth='180px'
						$gap='34px'
					/>
					<InfoRow
						title='Объект:'
						label={
							<Link to={`/${AppRoute.Objects}/${eventData?.object.id}`}>
								{eventData?.object.title}
							</Link>
						}
						$titleWidth='180px'
						$gap='34px'
					/>
					<InfoRow
						title='Сайт события:'
						label={<a href={eventData?.site.link}>{eventData?.site.title}</a>}
						$titleWidth='180px'
						$gap='34px'
					/>
				</div>
			</div>
		</div>
	)
}
