import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'

export const BrandsLayout: FC = () => {
	return (
		<div>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Бренды событий',
							link: 'brand-events',
						},
					]}
				/>
				<Outlet />
			</Container>
		</div>
	)
}
