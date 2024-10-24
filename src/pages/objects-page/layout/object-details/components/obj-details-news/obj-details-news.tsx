import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { newsSliderOptions } from './consts'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'
import { NewsCard } from 'src/components/news-card/news-card'

import styles from './index.module.scss'

export const ObjDetailsNews: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')
	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={styles.objNewsSection}>
			<h4>Новости</h4>
			{objectData?.news?.length && (
				<div className={styles.newsSwiperContainer}>
					<Swiper {...newsSliderOptions} ref={swiperRef}>
						{objectData.news.map((newsEl, idx) => (
							<SwiperSlide className={styles.newsSlide} key={idx}>
								<NewsCard key={newsEl.id} {...newsEl} />
							</SwiperSlide>
						))}
					</Swiper>
					<SliderBtns $topPosition='45%' $btnsSpacing='calc(100% + 40px)' swiperRef={swiperRef} />
				</div>
			)}
		</section>
	)
}
