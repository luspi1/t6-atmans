import { type FC } from 'react'

import { Link } from 'react-router-dom'
import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { MenuList } from 'src/components/main-navigation/components/menu-list/menu-list'
import { PersonalControllers } from 'src/components/main-navigation/components/personal-controllers/personal-controllers'

import mainLogo from 'src/assets/img/main-logo.svg'

import styles from './index.module.scss'

export const MainNavigation: FC = () => {
	return (
		<nav className={styles.mainNav}>
			<Container className={styles.navContainer}>
				<Link to={AppRoute.Home} className={styles.logoWrapper}>
					<img src={mainLogo} alt='logo' />
				</Link>
				<div className={styles.menuWrapper}>
					<MenuList />
					<PersonalControllers />
				</div>
			</Container>
		</nav>
	)
}
