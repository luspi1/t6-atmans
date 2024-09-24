import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { generatePath, Link } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'

import { AppRoute } from 'src/routes/main-routes/consts'

import {
	VideotapeSliderItems,
	videotapeSliderOptions,
} from 'src/pages/home-page/components/videotape-section/consts'

import styles from './index.module.scss'

export const VideotapeSection: FC = () => {
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={styles.videotapeSection}>
			<Container>
				<h4>Видеолента</h4>
			</Container>
			<Container $margin='0 auto 28px auto' $width='1300px'>
				<Swiper className={styles.videotapeSlider} {...videotapeSliderOptions} ref={swiperRef}>
					{VideotapeSliderItems?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<Link
								className={styles.slideItem}
								to={generatePath('videotape/:id', {
									id: slideItem.id,
								})}
							>
								<div className={styles.slideThumbWrapper}>
									<img src={slideItem.thumb} alt={slideItem.title} />
								</div>
								<p>{slideItem.title}</p>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns $topPosition='82px' swiperRef={swiperRef} />
			</Container>
			<Container>
				<Link className={styles.allVideotapeLink} to={AppRoute.Events}>
					Вся видеолента
				</Link>
			</Container>
		</section>
	)
}
