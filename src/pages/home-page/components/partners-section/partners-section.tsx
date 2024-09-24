import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'

import {
	PartnersSliderItems,
	partnersSliderOptions,
} from 'src/pages/home-page/components/partners-section/consts'

import styles from './index.module.scss'

export const PartnersSection: FC = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={styles.partnersSection}>
			<Container>
				<h4>Партнеры</h4>
			</Container>
			<Container $margin='0 auto 28px auto' $width='1300px'>
				<Swiper className={styles.partnersSlider} {...partnersSliderOptions} ref={swiperRef}>
					{PartnersSliderItems?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<a className={styles.slideItem} href={slideItem.link}>
								<img src={slideItem.img} alt='partner' />
							</a>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns $topPosition='50%' swiperRef={swiperRef} />
			</Container>
		</section>
	)
}
