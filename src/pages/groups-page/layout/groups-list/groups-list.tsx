import { type FC } from 'react'
import { PageContent } from 'src/components/page-content/page-content'
import { Pagination } from 'src/components/pagination/pagination'
import { Helmet } from 'react-helmet-async'
import { CustomText } from 'src/components/custom-text/custom-text'
import { GroupsTable } from 'src/pages/groups-page/layout/groups-list/components/groups-table/groups-table'
import { useGetAllGroupsQuery } from 'src/store/groups/groups.api'

export const GroupsList: FC = () => {
	const { data: groupsList } = useGetAllGroupsQuery('')

	return (
		<PageContent $padding='30px 30px 300px 30px' $maxWidth='1220px'>
			<Helmet>
				<title>Все группы</title>
			</Helmet>
			<h2>Все группы</h2>
			<CustomText $margin='0 0 10px 0' $fontSize='16px'>
				Групп отобрано: <b>{groupsList?.length ?? 0}</b>
			</CustomText>
			<GroupsTable />
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
