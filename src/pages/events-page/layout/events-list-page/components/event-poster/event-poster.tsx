import { type FC, type RefObject, useRef } from 'react'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetHomePostersQuery } from 'src/store/home/home.api'
import { posterSliderOptions } from './consts'
import { mainFormatDate } from 'src/helpers/utils'

import styles from './index.module.scss'

export const EventPoster: FC = () => {
	const { data: posterData } = useGetHomePostersQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<div className={styles.eventsPosterSlider}>
			<Swiper {...posterSliderOptions} ref={swiperRef}>
				{posterData?.map((slideItem, idx) => (
					<SwiperSlide key={idx}>
						<div className={styles.slideItem}>
							<div className={styles.slideItemImg}>
								<img src={slideItem.imgUrl} alt={slideItem.title} />
							</div>
							<div className={styles.slideInfo}>
								<div className={styles.slideInfoTitle}>
									<ul>
										{slideItem?.date && (
											<li>{mainFormatDate(slideItem.date, "d MMMM yyyy 'года' в HH:mm")}</li>
										)}
										{slideItem?.location && <li>{slideItem.location}</li>}
									</ul>
									<h5>{slideItem.title}</h5>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<SliderBtns
				className={styles.posterSliderBtns}
				$topPosition='50%'
				$btnsSpacing='95%'
				swiperRef={swiperRef}
			/>
		</div>
	)
}
