import { type FC, type RefObject, useRef } from 'react'

import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetHomeEthnoTypesQuery } from 'src/store/home/home.api'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { ethnoSliderOptions } from 'src/pages/home-page/components/ethno-section/consts'
import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'

export const EthnoSection: FC = () => {
	const { data: ethnoTypes } = useGetHomeEthnoTypesQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<Container className={styles.ethnoContainer} $width='1920px' $padding='0'>
			<section className={styles.ethnoSection}>
				<Swiper className={styles.ethnoSlider} {...ethnoSliderOptions} ref={swiperRef}>
					{ethnoTypes?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<div className={styles.slideItem}>
								<div className={styles.slideItemImg}>
									<img src={slideItem.imgUrl} alt={slideItem.title} />
								</div>
								<h5>
									<span>{slideItem.title}</span>
									<span>этноспорт</span>
								</h5>
								<MainButton as='link' href={slideItem.link} $variant='light'>
									Перейти на сайт
								</MainButton>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns
					className={styles.ethnoSliderBtns}
					$topPosition='50%'
					$variant='lg'
					$btnsSpacing='61%'
					swiperRef={swiperRef}
				/>
			</section>
		</Container>
	)
}
