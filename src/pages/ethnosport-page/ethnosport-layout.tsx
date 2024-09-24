import { type FC } from 'react'
import { type TabNavigationItem } from 'src/types/navigation'

import { Outlet } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'

import { ethnosportPageDocuments } from './consts'
import { useGetEthnosportGlobalQuery } from 'src/store/ethnosport/ethnosport.api'

import styles from './index.module.scss'

export const EthnosportLayout: FC = () => {
	const { data: ethnoInfo } = useGetEthnosportGlobalQuery(null)

	const directionsMenuItems: TabNavigationItem[] = ethnoInfo
		? ethnoInfo.directions.map((directionItem) => ({
				title: directionItem.title,
				link: `${directionItem.id}`,
				exact: false,
			}))
		: []

	return (
		<div>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Об этноспорте',
							link: 'ethnosport',
						},
					]}
				/>
				<div className={styles.ethnosportContentWrapper}>
					<Outlet />
					<div>
						<SideMenu
							className={styles.ethnosportSideMenu}
							sideItems={[{ title: 'Об этноспорте', link: '/ethnosport' }, ...directionsMenuItems]}
						/>
						<AsideDocuments documents={ethnosportPageDocuments} />
					</div>
				</div>
			</Container>
		</div>
	)
}
