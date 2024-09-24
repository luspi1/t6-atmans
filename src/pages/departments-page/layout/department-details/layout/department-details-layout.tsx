import { type FC } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { DepartmentHeader } from 'src/pages/departments-page/layout/department-details/components/department-header/department-header'
import { OneDepartmentMenu } from 'src/pages/departments-page/layout/department-details/layout/consts'
import { AsideDocuments } from 'src/components/aside-documents/aside-documents'
import { useGetRegionByCodeQuery } from 'src/store/regions/regions.api'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const DepartmentDetailsLayout: FC = () => {
	const { id } = useParams()
	const { data: regionData } = useGetRegionByCodeQuery(id ?? '')
	return (
		<div className={styles.departmentDetailsLayoutWrapper}>
			<PageContent $padding='30px 35px 30px 30px'>
				<DepartmentHeader />
				<Outlet />
				<Link className={styles.pageMainLink} to={`/${AppRoute.Departments}`}>
					На страницу списка отделений
				</Link>
			</PageContent>
			<div>
				<SideMenu className={styles.departmentDetailsSideMenu} sideItems={OneDepartmentMenu} />
				<AsideDocuments documents={regionData?.documents} />
			</div>
		</div>
	)
}
