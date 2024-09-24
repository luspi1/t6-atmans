import React, { type FC, useState } from 'react'

import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { useGetNewsVideosQuery } from 'src/store/news/news.api'
import { VideoGallery } from 'src/components/video-gallery/video-gallery'

import styles from './index.module.scss'
import { Pagination } from 'src/components/pagination/pagination'

export const Videos: FC = () => {
	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const { data: videosList } = useGetNewsVideosQuery(null)

	return (
		<div>
			<div className={styles.videosTitleBlock}>
				<h2>Видеолента</h2>
				<MainSelect
					onChange={(e) => setYearsSelectValue(e.target.value)}
					value={yearsSelectValue}
					className={styles.newsDateSelect}
					items={[{ label: 'Все годы', value: '' }]}
				/>
				<MainSelect
					onChange={(e) => setYearsSelectValue(e.target.value)}
					value={yearsSelectValue}
					className={styles.newsDateSelect}
					items={[{ label: 'Все месяцы', value: '' }]}
				/>
			</div>
			<VideoGallery videos={videosList} />
			<Pagination className={styles.videosPagination} pagesCount={7} activePage={2} />
		</div>
	)
}
