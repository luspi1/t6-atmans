import { NavLink } from 'react-router-dom'
import { MenuItems } from 'src/components/main-navigation/components/menu-list/consts'
import { useSetActive } from 'src/hooks/set-active'

import styles from './index.module.scss'

export const MenuList = () => {
	const setActive = useSetActive()

	return (
		<ul className={styles.menuList}>
			{MenuItems.map((menuEl) => (
				<li className={styles.menuItem} key={menuEl.link}>
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
