import { type FC } from 'react'

import { Link } from 'react-router-dom'
import { Container } from 'src/UI/Container/Container'
import { AppRoute } from 'src/routes/main-routes/consts'
import { MenuList } from 'src/components/main-navigation/components/menu-list/menu-list'
import { BurgerMenu } from 'src/components/burger-menu/burger-menu'
import { MenuItems } from 'src/components/main-navigation/consts'

import mainLogo from 'src/assets/img/main-logo.svg'

import { SearchBtnIconSvg } from 'src/UI/icons/searchBtnIconSVG'
import { PersonIconSvg } from 'src/UI/icons/personIconSVG'
import { NavBanner } from 'src/components/main-navigation/components/nav-banner/nav-banner'
import styles from './index.module.scss'

export const MainNavigation: FC = () => {
	return (
		<div className={styles.mainNav}>
			<div className={styles.topMainNavWrapper}>
				<Container className={styles.topMainNav}>
					<Link to={AppRoute.Home} className={styles.logoWrapper}>
						<img src={mainLogo} alt='logo' />
					</Link>
					<NavBanner />
					<Link className={styles.personMenu} to='/'>
						<PersonIconSvg />
					</Link>
				</Container>
			</div>
			<nav className={styles.menuWrapper}>
				<Container className={styles.menuContainer}>
					<BurgerMenu menuItems={MenuItems} />
					<MenuList />
					<Link className={styles.searchLink} to={AppRoute.Search}>
						<SearchBtnIconSvg />
					</Link>
				</Container>
			</nav>
		</div>
	)
}
