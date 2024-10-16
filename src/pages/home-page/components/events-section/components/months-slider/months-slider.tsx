import { type FC, type RefObject, useEffect, useRef } from 'react'
import type { SwiperRef } from 'swiper/react/swiper-react'
import { uid } from 'react-uid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { isSameMonth } from 'date-fns'
import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { mainFormatDate } from 'src/helpers/utils'
import { monthsSliderOptions } from 'src/pages/home-page/components/events-section/components/months-slider/consts'
import { useGetAllEventMonthsQuery } from 'src/store/home/home.api'

import styles from './index.module.scss'

type MonthsSliderProps = {
	activeMonth: string
	changeActiveMonth: (arg: string) => void
}

export const MonthsSlider: FC<MonthsSliderProps> = ({ activeMonth, changeActiveMonth }) => {
	const { data: monthsList, isSuccess } = useGetAllEventMonthsQuery(null)
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
		<Container $margin='0 auto 30px auto' $width='1300px' $padding='0 40px'>
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
			<SliderBtns $topPosition='55%' $btnsSpacing='100%' swiperRef={swiperRef} $variant='opaque' />
		</Container>
	)
}
