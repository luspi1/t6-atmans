import { type FC } from 'react'
import { useParams } from 'react-router-dom'

import { InfoRow } from 'src/UI/InfoRow/InfoRow'
import { useGetUserByIdQuery } from 'src/store/users/users.api'
import { LinksList } from 'src/components/links-list/links-list'

import { RenderedArray } from 'src/components/rendered-array/rendered-array'
import { formatSourceLinks } from 'src/helpers/utils'

export const UserDetails: FC = () => {
	const { id } = useParams()

	const { data: userInfo } = useGetUserByIdQuery(id ?? '')

	return (
		<div>
			<section>
				<InfoRow
					title='Статусы участника:'
					$margin='0 0 20px 0'
					label={<RenderedArray strArray={userInfo?.statuses} as='span' />}
				/>
				<InfoRow
					title='Официальные регалии:'
					label={<RenderedArray strArray={userInfo?.regalia} as='span' />}
				/>
			</section>
			<section>
				<InfoRow title='Подробнее о себе' $margin='0 0 10px 0' label={userInfo?.mainDesc} />
			</section>
			<section>
				<LinksList dataList={formatSourceLinks(userInfo?.relatedLinks)} title='Массив ссылок' />
			</section>
		</div>
	)
}
