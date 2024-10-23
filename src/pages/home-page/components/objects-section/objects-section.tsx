import { type FC, type RefObject, useRef } from 'react'
import { type SwiperRef } from 'swiper/react/swiper-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { generatePath, Link } from 'react-router-dom'
import cn from 'classnames'

import { Container } from 'src/UI/Container/Container'
import { SliderBtns } from 'src/components/slider-btns/slider-btns'
import { useGetHomeObjectsQuery } from 'src/store/home/home.api'
import { objectsSliderOptions } from 'src/pages/home-page/components/objects-section/consts'

import styles from './index.module.scss'
import { Heptagon } from 'src/UI/Heptagon/Heptagon'

export const ObjectsSection: FC = () => {
	const { data: objects } = useGetHomeObjectsQuery(null)

	const swiperRef: RefObject<SwiperRef> = useRef<SwiperRef>(null)
	return (
		<section className={cn(styles.objectsSection, '_bordered')}>
			<Container $margin='0 auto 28px auto' $width='1920px'>
				<Swiper className={styles.objectsSlider} {...objectsSliderOptions} ref={swiperRef}>
					{objects?.map((slideItem, idx) => (
						<SwiperSlide key={idx}>
							<Link
								className={styles.slideItem}
								to={generatePath('objects/:id', {
									id: slideItem.id,
								})}
							>
								<Heptagon $imgUrl={slideItem.logo} />
								<p>{slideItem.title}</p>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>
				<SliderBtns $topPosition='30%' $btnsSpacing='96%' swiperRef={swiperRef} />
			</Container>
		</section>
	)
}
