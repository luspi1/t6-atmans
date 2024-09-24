import { Link, useParams } from 'react-router-dom'

import { customFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { AppRoute } from 'src/routes/main-routes/consts'

import { useGetBrandEventNewsByIdQuery } from 'src/store/brandEvents/brand-events.api'
import styles from './index.module.scss'

export const BrandNewsDetails = () => {
	const { id, newsId } = useParams()
	const { data: newsItemData, isLoading } = useGetBrandEventNewsByIdQuery({
		brandEventId: id,
		newsId,
	})

	if (isLoading) return <Loader />
	if (!newsItemData) return null
	return (
		<div className={styles.newsItemPage}>
			<h2>{newsItemData?.title}</h2>
			<span className={styles.newsItemDate}>
				{customFormatDate(newsItemData?.date, {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})}
			</span>
			<div className={styles.newsItemMainImg}>
				<img src={newsItemData?.preview} alt={newsItemData?.title} />
			</div>
			{newsItemData?.textNews?.map((textEl, idx) => (
				<p className={styles.newsText} key={idx}>
					{textEl}
				</p>
			))}
			<ul className={styles.newsGallery}>
				{newsItemData?.imgGallery?.map((imgEl, idx) => (
					<li className={styles.galleryImg} key={idx}>
						<img src={imgEl} alt='gallery image' />
					</li>
				))}
			</ul>
		</div>
	)
}
