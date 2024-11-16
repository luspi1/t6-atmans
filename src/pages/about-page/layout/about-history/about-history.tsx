import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'
import { useGetAboutHistoryQuery } from 'src/store/about/about.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

export const AboutHistory: FC = () => {
	const { data: aboutPageData } = useGetAboutHistoryQuery(null)
	if (!aboutPageData) return null

	return (
		<div className={styles.historyPageContent}>
			<Helmet>
				<title>История Атманова угла</title>
			</Helmet>
			<h2>История Атманова угла</h2>
			<RenderedArray strArray={aboutPageData.topDescs} asStr='p' as='div' />
			<figure className={styles.image}>
				<img src={aboutPageData?.mainPhoto?.original} alt={aboutPageData?.mainPhoto?.title} />
				<figcaption>{aboutPageData?.mainPhoto?.title}</figcaption>
			</figure>
			<RenderedArray strArray={aboutPageData.bottomDescs} asStr='p' as='div' />
		</div>
	)
}
