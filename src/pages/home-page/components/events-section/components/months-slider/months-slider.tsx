import { type FC, type RefObject, useRef } from 'react'
import type { SwiperRef } from 'swiper/react/swiper-react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useGetAllEventMonthsQuery } from 'src/store/home/home.api'
import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { monthsSliderOptions } from './consts'
import { getMonthName } from 'src/helpers/utils'

import styles from './index.module.scss'

export const MonthsSlider: FC = () => {
	const { data: monthsList } = useGetAllEventMonthsQuery(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	if (!monthsList?.length) return
	return (
		<Container $margin='0 auto 85px auto' $width='1300px' $padding='0 40px'>
			<Swiper {...monthsSliderOptions} ref={swiperRef}>
				{monthsList?.map((slideItem, idx) => (
					<SwiperSlide className={styles.monthSlide} key={idx}>
						<p>{getMonthName(idx)}</p>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderBtns $topPosition='51%' $btnsSpacing='100%' swiperRef={swiperRef} $variant='opaque' />
		</Container>
	)
}
