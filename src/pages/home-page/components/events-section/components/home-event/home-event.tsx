import { type FC } from 'react'
import { type HomeEventItem } from 'src/types/home-page'

import { Link } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'

import { getDayOfWeek, mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

type EventItemProps = HomeEventItem
export const HomeEvent: FC<EventItemProps> = ({
	id,
	category: { title: catTitle },
	location: { title: locTitle, address },
	title,
	date,
	imgUrl,
	description,
}) => {
	return (
		<li className={styles.eventItem}>
			<Link to={`/${AppRoute.Events}/${id}`}>
				<div className={styles.imgWrapper}>
					<img src={imgUrl} alt={title} />
					<span>{catTitle}</span>
				</div>
				<div className={styles.eventContent}>
					<h6>{title}</h6>
					<p className={styles.eventDate}>
						{mainFormatDate(date)}, {getDayOfWeek(date)}
					</p>
					<p className={styles.eventLocations}>
						<span>{locTitle}</span>
						<span>{address}</span>
					</p>
					{description && <p className={styles.eventDesc}>{description}</p>}
				</div>
			</Link>
		</li>
	)
}
