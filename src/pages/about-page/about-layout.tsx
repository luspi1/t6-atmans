import { type FC } from 'react'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'

import { AboutMenuItems, aboutPageDocuments } from './consts'

import styles from './index.module.scss'
import { createBreakpoint } from 'react-use'
import { DisplayBreakpoints } from 'src/helpers/consts'

const useBreakPoint = createBreakpoint({ L: 1201, M: DisplayBreakpoints.Md, S: DisplayBreakpoints.Sm })

export const AboutLayout: FC = () => {
	const breakpoint = useBreakPoint()
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
						{
							breakpoint == "L" ?
							<AsideDocuments documents={aboutPageDocuments} />
							:
							null
						}
					</div>
				</div>
				{
					breakpoint != "L" ?
					<AsideDocuments documents={aboutPageDocuments} />
					:
					null
				}
			</Container>
		</div>
	)
}
