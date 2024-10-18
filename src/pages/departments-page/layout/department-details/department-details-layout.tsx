import { type FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'
import { SideMenu } from 'src/components/side-menu/side-menu'
import { DepartmentHeader } from 'src/pages/departments-page/layout/department-details/components/department-header/department-header'
import { AppRoute } from 'src/routes/main-routes/consts'
import { OneDepartmentMenu } from 'src/pages/departments-page/layout/department-details/consts'

import styles from './index.module.scss'

export const DepartmentDetailsLayout: FC = () => {
	return (
		<div className={styles.departmentDetailsLayoutWrapper}>
			<PageContent $padding='30px 35px 30px 30px'>
				<DepartmentHeader />
				<Outlet />
				<Link className={styles.pageMainLink} to={`/${AppRoute.Departments}`}>
					На страницу списка объектов
				</Link>
			</PageContent>
			<SideMenu className={styles.departmentDetailsSideMenu} sideItems={OneDepartmentMenu} />
		</div>
	)
}
