import React, { type FC } from 'react'
import type { ContentNav, TabNavigationItem } from 'src/types/navigation'
import { Navigate, NavLink, Outlet, useParams } from 'react-router-dom'

import { useGetEventByIdQuery } from 'src/store/events/events.api'
import { mainFormatDate } from 'src/helpers/utils'
import { useLocationMatch } from 'src/hooks/location-match'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const EventProgramLayout: FC = () => {
	const { id } = useParams()
	const { data: eventDetails } = useGetEventByIdQuery(id ?? '')

	const navDaysArr: TabNavigationItem[] =
		eventDetails?.program?.map((dayEl) => ({
			title: mainFormatDate(dayEl.date, 'dd MMMM') ?? '',
			link: dayEl.id,
		})) ?? []

	const [matchesLocation] = useLocationMatch<ContentNav>([
		`${AppRoute.Events}/${id}/${AppRoute.EventProgram}`,
	])

	if (matchesLocation) return <Navigate to={eventDetails?.program[0].id ?? '0'} replace />
	return (
		<div className={styles.programTab}>
			<ul className={styles.programNav}>
				{navDaysArr?.map((navItem) => (
					<li key={navItem.title}>
						<NavLink to={navItem.link}>{navItem.title}</NavLink>
					</li>
				))}
			</ul>
			<Outlet />
		</div>
	)
}
