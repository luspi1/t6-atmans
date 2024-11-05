import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'

export const AboutCultureLayout = () => {
	return (
		<PageContent className={styles.aboutCulturePage}>
			<Helmet>
				<title>Материальная культура</title>
			</Helmet>
			<Outlet />
		</PageContent>
	)
}
