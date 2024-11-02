import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'
import { BlockquoteSection } from 'src/pages/about-page/layout/about-general/components/blockquote-section/blockquote-section'
import { GallerySection } from 'src/pages/about-page/layout/about-general/components/gallery-section/gallery-section'
import { DescSection } from 'src/pages/about-page/layout/about-general/components/desc-section/desc-section'
import MobileTextContainer from 'src/components/mobile-text-container/mobile-text-container'
import { createBreakpoint } from 'react-use'
import { DisplayBreakpoints } from 'src/helpers/consts'

const useBreakPoint = createBreakpoint({ L: 1201, M: DisplayBreakpoints.Md, S: DisplayBreakpoints.Sm })

export const AboutGeneral: FC = () => {
	const breakpoint = useBreakPoint()
	return (
		<PageContent $padding='30px 73px 40px 30px'>
			<Helmet>
				<title>Атманов угол</title>
			</Helmet>

			<h2>Атманов угол</h2>
			<BlockquoteSection />
			<GallerySection />
			{
				breakpoint !== "L" ?
				<MobileTextContainer item={<DescSection />} lineClamp={14}/>
				:
				<DescSection />
			}
		</PageContent>
	)
}
