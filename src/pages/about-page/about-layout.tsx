import { type FC } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'

import { AboutMenuItems, aboutPageDocuments } from './consts'

import styles from './index.module.scss'

export const AboutLayout: FC = () => {
	const { pathname } = useLocation()

	return (
		<div className={styles.aboutLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						...AboutMenuItems,
						{
							title: 'О Федерации',
							link: 'about',
						},
					]}
				/>
				<div className={styles.aboutContentWrapper}>
					<Outlet />
					<div>
						<SideMenu
							className={styles.aboutSideMenu}
							sideItems={[
								{
									title: 'О Федерации',
									link: '/about',
								},
								...AboutMenuItems,
							]}
						/>
						{pathname === '/about' && <AsideDocuments documents={aboutPageDocuments} />}
					</div>
				</div>
			</Container>
		</div>
	)
}
