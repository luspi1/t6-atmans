import { type FC, type RefObject, useEffect, useRef } from 'react'
import type { SwiperRef } from 'swiper/react/swiper-react'
import { uid } from 'react-uid'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import { useGetAllEventMonthsQuery } from 'src/store/home/home.api'
import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { getMonthName } from 'src/helpers/utils'
import { monthsSliderOptions } from 'src/pages/home-page/components/events-section/components/months-slider/consts'

import styles from './index.module.scss'

type MonthsSliderProps = {
	activeMonth: number
	changeActiveMonth: (arg: number) => void
}

export const MonthsSlider: FC<MonthsSliderProps> = ({ activeMonth, changeActiveMonth }) => {
	const { data: monthsList, isSuccess } = useGetAllEventMonthsQuery(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	const handleChangeMonth = (idx: number, isActive: boolean) => {
		if (isActive) {
			changeActiveMonth(idx)
		}
	}

	useEffect(() => {
		if (swiperRef && isSuccess) {
			const currentMonthIndex = new Date().getMonth()
			changeActiveMonth(currentMonthIndex)
			swiperRef.current?.swiper.slideTo(currentMonthIndex)
		}
	}, [swiperRef, isSuccess])

	if (!monthsList?.length) return
	return (
		<Container $margin='0 auto 30px auto' $width='1300px' $padding='0 40px'>
			<Swiper {...monthsSliderOptions} ref={swiperRef}>
				{monthsList?.map((slideItem, idx) => (
					<SwiperSlide
						className={cn(styles.monthSlide, {
							[styles._disableSlide]: !slideItem?.length,
							[styles._activeSlide]: idx === activeMonth,
						})}
						key={uid(slideItem)}
						onClick={() => handleChangeMonth(idx, !!slideItem?.length)}
					>
						<p>{getMonthName(idx)}</p>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderBtns $topPosition='55%' $btnsSpacing='100%' swiperRef={swiperRef} $variant='opaque' />
		</Container>
	)
}
