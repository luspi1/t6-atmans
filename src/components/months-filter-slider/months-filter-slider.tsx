import { type RefObject, useEffect, useRef } from 'react'
import type { SwiperRef } from 'swiper/react/swiper-react'
import { uid } from 'react-uid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { isSameMonth } from 'date-fns'
import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { mainFormatDate } from 'src/helpers/utils'
import { monthsSliderOptions } from './consts'

import styles from './index.module.scss'

type MonthsSliderProps<T> = {
	activeMonth: string
	changeActiveMonth: (arg: string) => void
	monthsList: Array<Record<string, T[]>>
	isSuccess: boolean
}

export const MonthsFilterSlider = <T,>({
	activeMonth,
	changeActiveMonth,
	monthsList,
	isSuccess,
}: MonthsSliderProps<T>) => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	const handleChangeMonth = (date: string, isActive: boolean) => {
		if (isActive) {
			changeActiveMonth(date)
		}
	}

	useEffect(() => {
		if (swiperRef && isSuccess) {
			const datesArr = Object.keys(monthsList)
			const activeDateIndex = datesArr.findIndex((dateEl) =>
				isSameMonth(new Date(), new Date(dateEl)),
			)
			changeActiveMonth(datesArr[activeDateIndex])
			swiperRef.current?.swiper.slideTo(activeDateIndex)
		}
	}, [swiperRef, isSuccess])

	if (!monthsList) return
	return (
		<Container $margin='0 auto 30px auto' $width='1920px' $padding='0 40px'>
			<Swiper {...monthsSliderOptions} ref={swiperRef}>
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
			</Swiper>
			<SliderBtns $topPosition='55%' $btnsSpacing='100%' swiperRef={swiperRef} variant='sm' />
		</Container>
	)
}
