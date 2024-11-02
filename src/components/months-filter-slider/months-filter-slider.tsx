import { type RefObject, useRef } from 'react'
import type { SwiperRef } from 'swiper/react/swiper-react'

import { uid } from 'react-uid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { isSameMonth } from 'date-fns'
import cn from 'classnames'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { mainFormatDate } from 'src/helpers/utils'
import { monthsSliderOptions } from './consts'

import styles from './index.module.scss'

type MonthsSliderProps<T> = {
	activeMonth: string
	changeActiveMonth: (arg: string) => void
	monthsList: Array<Record<string, T[]>>
	allMonthTitle: string
}

export const MonthsFilterSlider = <T,>({
	activeMonth,
	changeActiveMonth,
	monthsList,
	allMonthTitle,
}: MonthsSliderProps<T>) => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	const handleChangeMonth = (date: string, isActive: boolean) => {
		if (isActive) {
			changeActiveMonth(date)
		}
	}

	if (!monthsList) return
	return (
		<div className={styles.monthsFilterWrapper}>
			<button
				className={cn(styles.allMonthsBtn, {
					[styles._activeMonthsBtn]: activeMonth === '0',
				})}
				onClick={() => changeActiveMonth('0')}
				type='button'
			>
				{allMonthTitle}
			</button>
			<Swiper className={styles.monthsFilterSlider} {...monthsSliderOptions} ref={swiperRef}>
				{Object.entries(monthsList)?.map(([date, months]) => (
					<SwiperSlide
						className={cn(styles.monthSlide, {
							[styles._disableSlide]: !months?.length,
							[styles._activeSlide]: isSameMonth(new Date(date), new Date(activeMonth)),
						})}
						key={uid(date)}
						onClick={() => handleChangeMonth(date, !!months?.length)}
					>
						<p>{mainFormatDate(date, 'LLLL')}</p>
					</SwiperSlide>
				))}
				<SliderBtns $topPosition='55%' $btnsSpacing='100%' swiperRef={swiperRef} $variant='sm' />
			</Swiper>
		</div>
	)
}
