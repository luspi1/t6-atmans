import { type FC } from 'react'

import cn from 'classnames'

import { EventStatusCancelSVG } from 'src/UI/icons/eventStatusCancelSVG'
import { EventStatusNowSVG } from 'src/UI/icons/eventStatusNowSVG'
import { EventStatusWillBeSVG } from 'src/UI/icons/eventStatusWillBeSVG'
import { EventStatusPassedSVG } from 'src/UI/icons/eventStatusPassedSVG'

import styles from './index.module.scss'
import { CustomText } from '../custom-text/custom-text'

type EventStatusProps = {
	statusCode?: string
	classname?: string
}

export const EventStatus: FC<EventStatusProps> = ({ statusCode, classname }) => {
	switch (statusCode) {
		case 'cancel':
			return (
				<div className={cn(styles.eventStatus, classname)}>
					<EventStatusCancelSVG />
					<CustomText $fontSize='16px'>Отменено</CustomText>
				</div>
			)
		case 'now':
			return (
				<div className={cn(styles.eventStatus, classname)}>
					<EventStatusNowSVG />
					<CustomText $fontSize='16px'>Идет сейчас</CustomText>
				</div>
			)
		case 'willBe':
			return (
				<div className={cn(styles.eventStatus, classname)}>
					<EventStatusWillBeSVG />
					<CustomText $fontSize='16px'>Предстоит</CustomText>
				</div>
			)
		case 'passed':
			return (
				<div className={cn(styles.eventStatus, classname)}>
					<EventStatusPassedSVG />
					<CustomText $fontSize='16px'>Прошло</CustomText>
				</div>
			)
		default:
			break
	}
}
