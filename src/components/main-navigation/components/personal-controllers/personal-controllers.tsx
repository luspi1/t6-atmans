import { SearchBtnIconSvg } from 'src/UI/icons/searchBtnIconSVG'
import { Link } from 'react-router-dom'
import { PersonIconSvg } from 'src/UI/icons/personIconSVG'
import { AppRoute } from 'src/routes/main-routes/consts'

import styles from './index.module.scss'

export const PersonalControllers = () => {
	return (
		<div className={styles.personalControllers}>
			<Link to={AppRoute.Search}>
				<SearchBtnIconSvg />
			</Link>
			<Link to='/'>
				<PersonIconSvg />
			</Link>
		</div>
	)
}
