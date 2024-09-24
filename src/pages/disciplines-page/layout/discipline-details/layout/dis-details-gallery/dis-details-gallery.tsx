import { type FC } from 'react'
import { TabNav } from 'src/components/tab-nav/tab-nav'
import { DisciplineGalleryNavItems } from 'src/pages/disciplines-page/layout/discipline-details/layout/dis-details-gallery/consts'
import { Outlet } from 'react-router-dom'

export const DisDetailsGallery: FC = () => {
	return (
		<section>
			<TabNav navItems={DisciplineGalleryNavItems} />
			<Outlet />
		</section>
	)
}
