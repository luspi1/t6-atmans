import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'

export const DisciplinesLayout: FC = () => {
	return (
		<div>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Дисциплины',
							link: 'disciplines',
						},
					]}
				/>
				<div>
					<Outlet />
				</div>
			</Container>
		</div>
	)
}
