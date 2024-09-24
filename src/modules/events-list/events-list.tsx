import React, { type FC } from 'react'
import { type EventSearchInputs } from 'src/modules/events-list/schema'
import { type EventsItem } from 'src/types/events'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import cn from 'classnames'

import { ControlledSelect } from 'src/components/controlled-select/controlled-select'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { Link } from 'react-router-dom'
import { formatDateRange } from 'src/helpers/utils'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'

import styles from './index.module.scss'

type TypesEventInfo = 'registration' | 'designation' | 'brand'

type EventsListProps = {
	eventsData?: EventsItem[]
	className?: string
	typeEventInfo?: TypesEventInfo
}
export const EventsList: FC<EventsListProps> = ({
	eventsData,
	className,
	typeEventInfo = 'registration',
}) => {
	const methods = useForm<EventSearchInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<EventSearchInputs> = (data) => {
		console.log(data)
	}

	const renderEventInfo = (eventEl: EventsItem, typeInfo: TypesEventInfo) => {
		switch (typeInfo) {
			case 'registration':
				return (
					<div className={styles.eventElInfo}>
						<p>
							<span>{formatDateRange(eventEl.dates)}</span>
						</p>
						<span className={styles.eventLocation}>{eventEl.location}</span>
						<Link to={`/events/${eventEl.id}`}>Регистрация</Link>
					</div>
				)
			case 'designation':
				return (
					<div className={styles.eventElInfo}>
						<p>
							<span>{formatDateRange(eventEl.dates)}</span>
						</p>
						<span className={styles.eventLocation}>{eventEl.location}</span>
						<span className={styles.eventDesignation}>{eventEl?.designation}</span>
					</div>
				)
			case 'brand':
				return (
					<div className={cn(styles.eventElInfo, styles.eventElInfoBrand)}>
						<span className={styles.brandInterval}>{eventEl.eventsInterval}</span>
						<InfoRow
							titleClassname={styles.brandInfoHeldTitle}
							wrapperClassname={styles.brandInfoHeldRow}
							title='Проведено:'
							label={eventEl.countHeld}
							$gap='5px'
							$titleWidth='72px'
							$margin='0'
						/>
						<InfoRow
							titleClassname={styles.brandInfoHeldTitle}
							wrapperClassname={styles.brandInfoHeldRow}
							title='В планах:'
							label={eventEl.countHeldPlan}
							$gap='5px'
							$titleWidth='72px'
							$margin='0 0 0 0'
						/>
						<span className={styles.eventBrandLocation}>{eventEl.location}</span>
					</div>
				)
		}
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
						{renderEventInfo(eventEl, typeEventInfo)}
						<div className={styles.eventElContent}>
							{typeEventInfo === 'brand' ? (
								<Link className={styles.titleLink} to={eventEl.id}>
									{eventEl.title}
								</Link>
							) : (
								<h5>{eventEl.title}</h5>
							)}

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
						<div className={styles.eventElImg}>
							<img src={eventEl.preview} alt={eventEl.title} />
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
