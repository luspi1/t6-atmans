import { type FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const EventParticipantesLayout: FC = () => {
	return (
		<div className={styles.eventParticipantesTab}>
			<div className={styles.eventParticipantesNav}>
				<NavLink to='' end>
					Команды
				</NavLink>
				<NavLink to={AppRoute.EventLonesParticipantes}>Одиночки</NavLink>
			</div>
			<Outlet />
		</div>
	)
}
