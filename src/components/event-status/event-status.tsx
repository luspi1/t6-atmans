import { type FC } from 'react'

import cn from 'classnames'

import { CustomText } from '../custom-text/custom-text'
import { EventStatusCancelSVG } from 'src/UI/icons/eventStatusCancelSVG'
import { EventStatusNowSVG } from 'src/UI/icons/eventStatusNowSVG'
import { EventStatusWillBeSVG } from 'src/UI/icons/eventStatusWillBeSVG'
import { EventStatusPassedSVG } from 'src/UI/icons/eventStatusPassedSVG'

import styles from './index.module.scss'

type EventStatusProps = {
	statusCode?: 'now' | 'cancel' | 'willBe' | 'passed'
	className?: string
}

export const EventStatus: FC<EventStatusProps> = ({ statusCode, className }) => {
	switch (statusCode) {
		case 'cancel':
			return (
				<div className={cn(styles.eventStatus, className)}>
					<EventStatusCancelSVG />
					<CustomText $fontSize='16px'>Отменено</CustomText>
				</div>
			)
		case 'now':
			return (
				<div className={cn(styles.eventStatus, className)}>
					<EventStatusNowSVG />
					<CustomText $fontSize='16px'>Идет сейчас</CustomText>
				</div>
			)
		case 'willBe':
			return (
				<div className={cn(styles.eventStatus, className)}>
					<EventStatusWillBeSVG />
					<CustomText $fontSize='16px'>Предстоит</CustomText>
				</div>
			)
		case 'passed':
			return (
				<div className={cn(styles.eventStatus, className)}>
					<EventStatusPassedSVG />
					<CustomText $fontSize='16px'>Прошло</CustomText>
				</div>
			)
		default:
			return null
	}
}
