import { NavLink } from 'react-router-dom'
import cnBind from 'classnames/bind'
import { MenuItems } from 'src/components/main-navigation/components/menu-list/consts'
import { useSetActive } from 'src/hooks/set-active'

import styles from './index.module.scss'

export const MenuList = () => {
	const setActive = useSetActive()

	const cx = cnBind.bind(styles)

	return (
		<ul className={styles.menuList}>
			{MenuItems.map((menuEl) => (
				<li className={cx(styles.menuItem, { _accent: menuEl.accent })} key={menuEl.link}>
					<NavLink
						className={({ isActive }) => setActive(isActive, styles.activeLink)}
						to={menuEl.link}
					>
						{menuEl.title}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
