import React, { type FC } from 'react'
import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { Outlet } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'

export const NewsLayout: FC = () => {
	return (
		<Container>
			<BreadCrumbs
				crumbsLinksMap={[
					{
						title: 'Все новости',
						link: 'news',
					},
				]}
			/>
			<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
				<Outlet />
			</PageContent>
		</Container>
	)
}
