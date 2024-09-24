import React, { type FC, useState } from 'react'

import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { VideoGallery } from 'src/components/video-gallery/video-gallery'

import { useGetGroupNewsVideosQuery } from 'src/store/groups/groups.api'
import { Link, useParams } from 'react-router-dom'
import { AppRoute } from 'src/routes/main-routes/consts'
import { Pagination } from 'src/components/pagination/pagination'

import mainGroupsStyles from 'src/pages/groups-page/layout/group-details/layout/index.module.scss'
import styles from './index.module.scss'

export const GroupNewsVideos: FC = () => {
	const { id } = useParams()

	const [yearsSelectValue, setYearsSelectValue] = useState<string>('')
	const { data: newsVideosList } = useGetGroupNewsVideosQuery(id ?? '')

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
			<Link className={mainGroupsStyles.groupsListLink} to={`/${AppRoute.Groups}`}>
				На страницу списка групп
			</Link>
		</div>
	)
}
