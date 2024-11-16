import { type FC } from 'react'

import { useGetAboutGeneralQuery } from 'src/store/about/about.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'

import styles from './index.module.scss'

export const DescSection: FC = () => {
	const { data: aboutPageData } = useGetAboutGeneralQuery(null)
	if (!aboutPageData) return null

	return (
		<section className={styles.descSection}>
			<RenderedArray strArray={aboutPageData.descs} asStr='p' as='div' />
		</section>
	)
}
