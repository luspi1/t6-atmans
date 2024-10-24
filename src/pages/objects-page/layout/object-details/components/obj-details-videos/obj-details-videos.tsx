import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { generatePath, Link, useParams } from 'react-router-dom'
import cn from 'classnames'

import { videotapeSliderOptions } from 'src/pages/home-page/components/videotape-section/consts'
import { useGetObjectByIdQuery } from 'src/store/objects/objects.api'

import styles from './index.module.scss'

export const ObjDetailsVideos: FC = () => {
	const { id } = useParams()

	const { data: objectData } = useGetObjectByIdQuery(id ?? '')

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={cn(styles.videotapeSection, '_bordered')}>
			<h4>Видеогалерея</h4>

			<div className={styles.objSwiperWrapper}>
				<Swiper className={styles.videotapeSlider} {...videotapeSliderOptions} ref={swiperRef}>
					{objectData?.videos?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<Link
								className={styles.slideItem}
								to={generatePath('videos/:id', {
									id: slideItem.id,
								})}
							>
								<div className={styles.slideThumbWrapper}>
									<img src={slideItem.thumb} alt={slideItem.title} />
									<span className={styles.videoDuration}>{slideItem.duration}</span>
								</div>
								<p>{slideItem.title}</p>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
