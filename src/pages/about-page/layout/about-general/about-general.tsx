import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { useBreakPoint } from 'src/hooks/useBreakPoint/useBreakPoint'

import { BlockquoteSection } from 'src/pages/about-page/layout/about-general/components/blockquote-section/blockquote-section'
import { GallerySection } from 'src/pages/about-page/layout/about-general/components/gallery-section/gallery-section'
import { DescSection } from 'src/pages/about-page/layout/about-general/components/desc-section/desc-section'
import { MobileTextContainer } from 'src/components/mobile-text-container/mobileTextContainer'

import styles from './index.module.scss'

export const AboutGeneral: FC = () => {
	const breakpoint = useBreakPoint()
	return (
		<div className={styles.aboutGeneralPage}>
			<Helmet>
				<title>Атманов угол</title>
			</Helmet>

			<h2>Атманов угол</h2>
			<BlockquoteSection />
			<GallerySection />
			{breakpoint !== 'M' ? (
				<MobileTextContainer item={<DescSection />} lineClamp={13} />
			) : (
				<DescSection />
			)}
		</div>
	)
}
