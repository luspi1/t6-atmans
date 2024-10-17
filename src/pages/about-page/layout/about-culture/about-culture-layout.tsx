import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

import { PageContent } from 'src/components/page-content/page-content'

import styles from './index.module.scss'

export const AboutCultureLayout = () => {
	return (
		<PageContent className={styles.aboutCulturePage} $padding='30px 30px 45px 30px'>
			<Helmet>
				<title>Материальная культура</title>
			</Helmet>
			<Outlet />
		</PageContent>
	)
}
