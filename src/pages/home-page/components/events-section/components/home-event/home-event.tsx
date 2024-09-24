import { type FC } from 'react'
import { type HomeEventItem } from 'src/types/home-page'

import { Link } from 'react-router-dom'
import cnBind from 'classnames/bind'
import { AppRoute } from 'src/routes/main-routes/consts'

import { formatDateRange } from 'src/helpers/utils'

import styles from './index.module.scss'

type EventItemProps = HomeEventItem
export const HomeEvent: FC<EventItemProps> = ({
	title,
	date,
	desc,
	ismain,
	id,
	ethnoType = 'rus',
}) => {
	const cx = cnBind.bind(styles)

	return (
		<li className={cx(styles.eventItem, { _main: ismain }, ethnoType)}>
			<Link to={`/${AppRoute.Events}/${id}`}>
				<h4>{title}</h4>
				<span>{formatDateRange(date)}</span>
				{desc && <p>{desc}</p>}
			</Link>
		</li>
	)
}
