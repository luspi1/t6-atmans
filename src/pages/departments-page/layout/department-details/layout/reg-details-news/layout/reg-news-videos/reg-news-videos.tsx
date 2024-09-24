import React, { type FC, useState } from 'react'

import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { VideoGallery } from 'src/components/video-gallery/video-gallery'

import { Link, useParams } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { Pagination } from 'src/components/pagination/pagination'
import { useGetRegionNewsVideosQuery } from 'src/store/regions/regions.api'

import mainGroupsStyles from 'src/pages/groups-page/layout/group-details/layout/index.module.scss'
import styles from './index.module.scss'

export const RegNewsVideos: FC = () => {
	const { id } = useParams()

	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const { data: newsVideosList } = useGetRegionNewsVideosQuery(id ?? '')

	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<div className={styles.groupTabNewsVideos}>
				<div className={styles.videosTitleBlock}>
					<h2>Видеозаписи группы</h2>
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
				<VideoGallery videos={newsVideosList} />
				<Pagination className={styles.newsVideosPagination} pagesCount={7} activePage={2} />
			</div>
			<Link className={mainGroupsStyles.groupsListLink} to={`/${AppRoute.Departments}`}>
				На страницу списка отделений
			</Link>
		</div>
	)
}
