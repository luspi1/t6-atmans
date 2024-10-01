import { type FC, type RefObject, useRef } from 'react'

import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { Container } from 'src/UI/Container/Container'
import { useGetHomePostersQuery } from 'src/store/home/home.api'

import { posterSliderOptions } from './consts'

import { formatDateRange } from 'src/helpers/utils'
import { MainButton } from 'src/UI/MainButton/MainButton'
import styles from './index.module.scss'

export const PosterSection: FC = () => {
	const { data: posterData } = useGetHomePostersQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<Container>
			<section className={styles.posterSection}>
				<Swiper className={styles.posterSlider} {...posterSliderOptions} ref={swiperRef}>
					{posterData?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.slideItem}>
								<div className={styles.slideItemImg}>
									<img src={slideItem.image_url} alt={slideItem.title} />
								</div>
								<div className={styles.slideInfo}>
									<div className={styles.slideInfoTitle}>
										<ul>
											{slideItem?.dates && <li>{formatDateRange(slideItem.dates)}</li>}
											{slideItem?.location && <li>{slideItem.location}</li>}
										</ul>
										<h5>{slideItem.title}</h5>
									</div>
									<MainButton as='route' to={`events/${slideItem.id}`}>
										Зарегистрироваться
									</MainButton>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns $topPosition='50%' $variant='lg' $btnsSpacing='93%' swiperRef={swiperRef} />
			</section>
		</Container>
	)
}
