import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { PosterSection } from 'src/pages/home-page/components/poster-section/poster-section'
import { EventsSection } from 'src/pages/home-page/components/events-section/events-section'
import { VideotapeSection } from 'src/pages/home-page/components/videotape-section/videotape-section'
import { NewsSection } from 'src/pages/home-page/components/news-section/news-section'
import { DepartmentsSection } from 'src/pages/home-page/components/ethno-section/departments-section'
import { PartnersSection } from 'src/pages/home-page/components/partners-section/partners-section'

import styles from './index.module.scss'

export const HomePage: FC = () => {
	return (
		<div className={styles.homePage}>
			<Helmet>
				<title>Главная</title>
			</Helmet>
			<DepartmentsSection />
			<PosterSection />
			<EventsSection />
			<NewsSection />
			<VideotapeSection />
			<PartnersSection />
		</div>
	)
}
