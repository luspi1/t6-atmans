import { type FC } from 'react'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { Link, useParams } from 'react-router-dom'
import { useGetGroupByIdQuery } from 'src/store/groups/groups.api'
import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { SimpleLink } from 'src/components/simple-link/simple-link'

import mainGroupsStyles from '../index.module.scss'
import styles from './index.module.scss'
import { AppRoute } from 'src/routes/main-routes/consts'

export const GroupContacts: FC = () => {
	const { id } = useParams()

	const { data: groupInfo } = useGetGroupByIdQuery(id ?? '')
	if (!groupInfo) return null
	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<div className={styles.groupContactsContent}>
				<InfoRow
					title='Телефоны:'
					label={<RenderedArray strArray={groupInfo.phones} as='span' />}
					$margin='20px 0 10px 0'
					$titleWidth='155px'
				/>
				<InfoRow
					title='Электронная почта:'
					label={<SimpleLink title={groupInfo.email} link={groupInfo.email} isEmail />}
					$margin='0 0 10px 0'
					$titleWidth='155px'
				/>
				<InfoRow
					title='Сайт:'
					label={<SimpleLink title={groupInfo.website.title} link={groupInfo.website.link} />}
					$margin='0 0 10px 0'
					$titleWidth='155px'
				/>
				<InfoRow
					title='Канал ТГ:'
					label={
						<SimpleLink title={groupInfo.telegramSoc.title} link={groupInfo.telegramSoc.link} />
					}
					$margin='0 0 10px 0'
					$titleWidth='155px'
				/>
				<InfoRow
					title='Группа ВК:'
					label={<SimpleLink title={groupInfo.vkSoc.title} link={groupInfo.vkSoc.link} />}
					$margin='0 0 30px 0'
					$titleWidth='155px'
				/>
				<InfoRow
					title='Адрес базы или офиса:'
					label={groupInfo.address}
					$titleWidth='105px'
					$gap='60px'
				/>
			</div>

			<Link className={mainGroupsStyles.groupsListLink} to={`/${AppRoute.Groups}`}>
				На страницу списка групп
			</Link>
		</div>
	)
}
