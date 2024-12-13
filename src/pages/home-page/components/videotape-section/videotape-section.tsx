import { type RefObject, useRef, type FC } from 'react'

import cn from 'classnames'
import { type SwiperRef } from 'swiper/react/swiper-react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { useGetHomeVideosQuery } from 'src/store/home/home.api'
import { FlexRow } from 'src/components/flex-row/flex-row'
import { MainButton } from 'src/UI/MainButton/MainButton'
import { VideoCard } from 'src/components/video-card/video-card'

import styles from './index.module.scss'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { videosSliderOptions } from './consts'

export const VideotapeSection: FC = () => {
	const { data: videos } = useGetHomeVideosQuery(null)
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)

	return (
		<section className={cn(styles.videotapeSection, '_bordered')}>
			<Container className={styles.videotapeTop}>
				<FlexRow $margin='0 0 25px 0' $alignItems='center' $justifyContent='space-between'>
					<h4>Видеолента</h4>
					<MainButton as='route' to={AppRoute.Videos}>
						Все видео
					</MainButton>
				</FlexRow>
				{videos?.length && (
					<div className='relative-wrapper'>
						<Swiper {...videosSliderOptions} ref={swiperRef}>
							{videos.map((videoItem, idx) => (
								<SwiperSlide className={styles.videosSlide} key={idx}>
									<VideoCard key={videoItem.id} {...videoItem} />
								</SwiperSlide>
							))}
						</Swiper>
						<SliderBtns
							className={styles.videosSliderBtns}
							$topPosition='42%'
							$btnsSpacing='100%'
							swiperRef={swiperRef}
						/>
					</div>
				)}
			</Container>
		</section>
	)
}
