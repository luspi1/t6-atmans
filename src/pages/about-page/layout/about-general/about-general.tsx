import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { BlockquoteSection } from 'src/pages/about-page/layout/about-general/components/blockquote-section/blockquote-section'
import { RenovatedObjectsSection } from 'src/pages/about-page/layout/about-general/components/renovated-objects-section/renovated-objects-section'
import { GallerySection } from 'src/pages/about-page/layout/about-general/components/gallery-section/gallery-section'
import { DescSection } from 'src/pages/about-page/layout/about-general/components/desc-section/desc-section'

export const AboutGeneral: FC = () => {
	return (
		<PageContent $padding='30px 73px 25px 30px'>
			<Helmet>
				<title>О Федерации</title>
			</Helmet>

			<h2>О Федерации</h2>
			<BlockquoteSection />
			<RenovatedObjectsSection />
			<GallerySection />
			<DescSection />
		</PageContent>
	)
}
