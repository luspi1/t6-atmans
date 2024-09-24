import { type FC } from 'react'

import { Link, useParams } from 'react-router-dom'

import { LinksList } from 'src/components/links-list/links-list'

import { useGetGroupByIdQuery } from 'src/store/groups/groups.api'
import { formatDocumentLinks, formatSourceLinks } from 'src/helpers/utils'
import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { CustomText } from 'src/components/custom-text/custom-text'
import { AppRoute } from 'src/routes/main-routes/consts'

import mainGroupsStyles from '../index.module.scss'

export const GroupDetails: FC = () => {
	const { id } = useParams()

	const { data: groupInfo } = useGetGroupByIdQuery(id ?? '')
	return (
		<div className={mainGroupsStyles.groupTabContent}>
			<section>
				<InfoRow
					title='Руководитель группы:'
					label={<a href='#'>{groupInfo?.leader}</a>}
					$titleWidth='165px'
					$margin='0 0 20px 0'
				/>
				<CustomText $fontSize='16px' $lineHeight='1.45'>
					{groupInfo?.mainDesc}
				</CustomText>
			</section>
			<section>
				<LinksList dataList={formatDocumentLinks(groupInfo?.documents)} title='Документы группы' />
			</section>
			<section>
				<LinksList dataList={formatSourceLinks(groupInfo?.relatedLinks)} title='Массив ссылок' />
			</section>
			<Link className={mainGroupsStyles.groupsListLink} to={`/${AppRoute.Groups}`}>
				На страницу списка групп
			</Link>
		</div>
	)
}
