import React, { type FC, type ReactNode } from 'react'
import { type EventSearchInputs } from 'src/modules/events-list/schema'
import { type EventsItem } from 'src/types/events'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'

import styles from './index.module.scss'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Link } from 'react-router-dom'

type EventsListProps = {
	eventsData?: EventsItem[]
	className?: string
}

const formatEventDateRange = ([startDate, endDate]: [Date, Date] | []): ReactNode | null => {
	if (!startDate || !endDate) return null
	return (
		<p>
			<span>{format(startDate, 'd LLL -', { locale: ru }).replace('.', '')}</span>
			<span>{format(endDate, 'd LLL yyyy', { locale: ru }).replace('.', '')}</span>
		</p>
	)
}

export const EventsList: FC<EventsListProps> = ({ eventsData, className }) => {
	const methods = useForm<EventSearchInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<EventSearchInputs> = (data) => {
		console.log(data)
	}

	if (!eventsData?.length) return null

	return (
		<div className={cn(styles.eventsListWrapper, className)}>
			<FormProvider {...methods}>
				<form className={styles.eventSearchForm} onSubmit={methods.handleSubmit(onSubmit)}>
					<ControlledSelect
						className={styles.eventSearchSelect}
						selectOptions={[
							{ label: 'Все события', value: '0' },
							{ label: 'Событие 1', value: '1' },
							{ label: 'Событие 2', value: '2' },
						]}
						name='category'
					/>
					<ControlledInput
						className={styles.eventSearchInput}
						name='title'
						placeholder='Поиск по названию события'
					/>
					<ControlledSelect
						className={styles.eventSearchSelect}
						selectOptions={[
							{ label: 'Тип события', value: '0' },
							{ label: 'Тип 1', value: '1' },
							{ label: 'Тип 2', value: '2' },
						]}
						name='type'
					/>
					<MainButton as='button' type='submit'>
						Найти
					</MainButton>
				</form>
			</FormProvider>
			<ul className={styles.eventsList}>
				{eventsData?.map((eventEl) => (
					<li key={eventEl.id}>
						<div className={styles.eventElInfo}>
							{formatEventDateRange(eventEl.dates)}
							<span className={styles.eventLocation}>{eventEl.location}</span>
						</div>
						<div className={styles.eventElContent}>
							<Link className={styles.titleLink} to={eventEl.id}>
								{eventEl.title}
							</Link>

							<div className={styles.eventElOrganizers}>
								{eventEl?.organizerLinks?.map((orgLink, idx) => (
									<a key={idx} href={orgLink.link}>
										{orgLink.title}
									</a>
								))}
							</div>
							<p className={styles.eventElDesc}>Особенности события: {eventEl.desc}</p>
							<div className={styles.eventElBottom}>
								<ul>{eventEl?.tags?.map((orgTag, idx) => <li key={idx}>{orgTag}</li>)}</ul>
							</div>
						</div>
						<Link className={styles.eventElImg} to={eventEl.id}>
							<img src={eventEl.preview} alt={eventEl.title} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
