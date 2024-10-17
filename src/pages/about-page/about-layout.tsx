import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'

import { AboutMenuItems, aboutPageDocuments } from './consts'

import styles from './index.module.scss'

export const AboutLayout: FC = () => {
	return (
		<div className={styles.aboutLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						...AboutMenuItems,
						{
							title: 'Атманов угол',
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
									title: 'Атманов угол',
									link: '/about',
								},
								...AboutMenuItems,
							]}
						/>
						<AsideDocuments documents={aboutPageDocuments} />
					</div>
				</div>
			</Container>
		</div>
	)
}
