import { type FC } from 'react'

import { RegionSlider } from './components/region-slider/region-slider'
import { SearchWithTags } from './components/search-with-tags/search-with-tags'

import styles from './index.module.scss'
import { Container } from 'src/UI/Container/Container'

export const SliderSearch: FC = () => {
	return (
		<Container>
			<section className={styles.sliderSearchSection}>
				<RegionSlider />
				<SearchWithTags />
			</section>
		</Container>
	)
}
