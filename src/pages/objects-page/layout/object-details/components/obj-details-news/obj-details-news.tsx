import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { Link, useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import { AppRoute } from 'src/routes/main-routes/consts'
import { formatDateRange, mainFormatDate } from 'src/helpers/utils'
import { newsSliderOptions } from 'src/pages/home-page/components/news-section/consts'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

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
								<Link
									className={styles.newsItem}
									to={`${AppRoute.News}/${newsEl.id}`}
									key={newsEl.id}
								>
									<div className={styles.newsImgWrapper}>
										<img src={newsEl.imgUrl} alt={newsEl.title} />
									</div>
									<div className={styles.newsItemContent}>
										<h6>{newsEl.title}</h6>
										<p className={styles.newsDate}>
											{newsEl.date.length > 1
												? formatDateRange(newsEl.date as [Date, Date])
												: mainFormatDate(newsEl.date[0])}
										</p>
										<p>{newsEl?.desc}</p>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
					<SliderBtns $topPosition='45%' $btnsSpacing='calc(100% + 40px)' swiperRef={swiperRef} />
				</div>
			)}
		</section>
	)
}
