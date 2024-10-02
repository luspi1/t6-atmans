import { type FC, type RefObject, useEffect, useRef, useState } from 'react'
import type { SwiperRef } from 'swiper/react/swiper-react'
import cn from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { uid } from 'react-uid'

import { useGetAllEventMonthsQuery } from 'src/store/home/home.api'
import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { getMonthName } from 'src/helpers/utils'
import { monthsSliderOptions } from 'src/pages/home-page/components/events-section/components/months-slider/consts'

import styles from './index.module.scss'

export const MonthsSlider: FC = () => {
	const { data: monthsList, isSuccess } = useGetAllEventMonthsQuery(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	const [activeMonth, setActiveMonth] = useState(0)

	useEffect(() => {
		if (swiperRef && isSuccess) {
			const currentMonthIndex = new Date().getMonth()
			setActiveMonth(currentMonthIndex)
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
							[styles._disableSlide]: slideItem?.length,
							[styles._activeSlide]: idx === activeMonth,
						})}
						key={uid(slideItem)}
						onClick={() => setActiveMonth(idx)}
					>
						<p>{getMonthName(idx)}</p>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderBtns $topPosition='55%' $btnsSpacing='100%' swiperRef={swiperRef} $variant='opaque' />
		</Container>
	)
}
