import { type FC, type RefObject, useRef, useState } from 'react'
import { type Swiper as SwiperClass } from 'swiper'
import { Swiper, type SwiperRef, SwiperSlide } from 'swiper/react'
import { Thumbs } from 'swiper'

import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetHomeDepartmentsQuery } from 'src/store/home/home.api'
import { MainButton } from 'src/UI/MainButton/MainButton'
import {
	departmentsSliderOptions,
	departmentsThumbSliderOptions,
} from 'src/pages/home-page/components/ethno-section/consts'
import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { HighlightedText } from 'src/components/highlighted-text/highlighted-text'
import { FlexRow } from 'src/components/flex-row/flex-row'

import styles from './index.module.scss'
import cn from 'classnames'

export const DepartmentsSection: FC = () => {
	const { data: departmentsList } = useGetHomeDepartmentsQuery(null)

	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	if (!departmentsList?.length) return null

	return (
		<section className={cn(styles.departmentsSectionWrapper, '_bordered')}>
			<Container>
				<FlexRow $margin='0 0 10px 0' $justifyContent='space-between'>
					<h4>Объекты</h4>
					<MainButton as='route' to={AppRoute.Home} $variant='light'>
						Все объекты
					</MainButton>
				</FlexRow>
			</Container>
			<Container className={styles.departmentsContainer} $width='1920px' $padding='0'>
				<section className={styles.departmentsSection}>
					<Swiper
						className={styles.departmentsSlider}
						initialSlide={Math.floor(departmentsList?.length / 2)}
						{...departmentsSliderOptions}
						modules={[Thumbs]}
						thumbs={{ swiper: thumbsSwiper }}
						ref={swiperRef}
					>
						{departmentsList?.map((slideItem, idx) => (
							<SwiperSlide key={idx}>
								<div className={styles.slideItem}>
									<div className={styles.slideItemImg}>
										<img src={slideItem.imgUrl} alt={slideItem.title} />
									</div>
									<HighlightedText text={slideItem.title} maxWidth={550} />
									<MainButton
										as='route'
										to={`${AppRoute.Departments}/${slideItem.id}`}
										$variant='light'
									>
										Перейти на страницу объекта
									</MainButton>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<SliderBtns
						className={styles.departmentsSliderBtns}
						$topPosition='42%'
						$variant='lg'
						$btnsSpacing='61%'
						swiperRef={swiperRef}
					/>
					<Container className={styles.sliderThumbContainer} $margin='20px auto 0'>
						<Swiper
							className={styles.departmentsThumbSlider}
							modules={[Thumbs]}
							watchSlidesProgress
							onSwiper={setThumbsSwiper}
							{...departmentsThumbSliderOptions}
						>
							{departmentsList?.map((slideItem, idx) => (
								<SwiperSlide className={styles.slideThumbItem} key={idx}>
									<p>
										<span>{slideItem.title}</span>
									</p>
								</SwiperSlide>
							))}
						</Swiper>
					</Container>
				</section>
			</Container>
		</section>
	)
}
