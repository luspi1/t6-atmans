import { type FC } from 'react'
import { PageContent } from 'src/components/page-content/page-content'
import { Pagination } from 'src/components/pagination/pagination'
import { Helmet } from 'react-helmet-async'
import { UsersTable } from 'src/pages/participation-page/layout/users-list/components/users-table/users-table'
import { useGetAllUsersQuery } from 'src/store/users/users.api'
import { CustomText } from 'src/components/custom-text/custom-text'

export const UsersList: FC = () => {
	const { data: usersList } = useGetAllUsersQuery('')

	return (
		<PageContent $padding='30px 30px 300px 30px' $maxWidth='1220px'>
			<Helmet>
				<title>Все участники</title>
			</Helmet>
			<h2>Все участники</h2>
			<CustomText $margin='0 0 10px 0' $fontSize='16px'>
				Участников отобрано: <b>{usersList?.length ?? 0}</b>
			</CustomText>
			<UsersTable />
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
