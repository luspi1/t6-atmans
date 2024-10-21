import { useParams } from 'react-router-dom'

import { customFormatDate } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'

import { AsideNews } from 'src/components/aside-news/aside-news'
import { useGetEventAllNewsQuery, useGetEventNewsByIdQuery } from 'src/store/events/events.api'
import styles from './index.module.scss'
import { GalleryImg } from 'src/components/image-gallery/image-gallery'

export const EventNewsDetails = () => {
	const { id, newsId } = useParams()
	const { data: newsList } = useGetEventAllNewsQuery({ eventId: id })
	const { data: newsItemData, isLoading } = useGetEventNewsByIdQuery({
		eventId: id,
		newsId,
	})

	if (isLoading) return <Loader />
	if (!newsItemData) return null
	return (
		<div className={styles.newsItemPage}>
			<div className={styles.newsItemPageContent}>
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
				<GalleryImg images={newsItemData.imgGallery} />
			</div>
			<AsideNews currentNewsId={newsId} newsList={newsList} previewCount={4} />
		</div>
	)
}
