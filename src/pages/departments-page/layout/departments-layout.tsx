import { type FC } from 'react'

import { Outlet, useParams } from 'react-router-dom'

import { Container } from 'src/UI/Container/Container'
import { BreadCrumbs } from 'src/modules/bread-crumbs/bread-crumbs'
import { SideMenu } from 'src/components/side-menu/side-menu'

import { DepartmentsMenuItems } from 'src/pages/departments-page/layout/consts'

import { AsideDocuments } from 'src/components/aside-documents/aside-documents'
import { useGetRegionsInfoQuery } from 'src/store/regions/regions.api'

import styles from './index.module.scss'

export const DepartmentsLayout: FC = () => {
	const { data: regionsInfo } = useGetRegionsInfoQuery(null)

	const { id } = useParams()
	return (
		<div className={styles.departmentsLayout}>
			<Container>
				<BreadCrumbs
					crumbsLinksMap={[
						{
							title: 'Региональные отделения',
							link: 'departments-list',
						},
						{
							title: 'О региональных отделениях ВООПИК',
							link: 'departments-about',
						},
					]}
				/>
				<div className={styles.departmentsContentWrapper}>
					<Outlet />
					{!id && (
						<div>
							<SideMenu className={styles.departmentsSideMenu} sideItems={DepartmentsMenuItems} />
							<AsideDocuments documents={regionsInfo?.sideDocs} />
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
