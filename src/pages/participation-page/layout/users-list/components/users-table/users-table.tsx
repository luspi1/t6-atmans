import { type UserItem } from 'src/types/users'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CustomTable } from 'src/components/custom-table/custom-table'
import { TableSearch } from 'src/modules/table-search/table-search'
import { useDebounce } from 'src/hooks/debounce/debounce'
import { Loader } from 'src/components/loader/loader'
import { useGetAllUsersQuery } from 'src/store/users/users.api'
import { calculateAge, getCorrectWordForm } from 'src/helpers/utils'

import styles from './index.module.scss'

export const UsersTable = () => {
	const [searchUser, setSearchUser] = useState<string>('')
	const debouncedSearch = useDebounce(searchUser)
	const { data: usersList, isLoading } = useGetAllUsersQuery(debouncedSearch)

	const searchUsers = (value: string) => {
		setSearchUser(value)
	}
	const tableTitles = [
		'№',
		'Регион',
		'Основная группа',
		<TableSearch
			wrapperClassName={styles.usersSearchWrapper}
			key={1}
			handleSearch={searchUsers}
			placeholder='Поиск по имени, фамилии, прозвищу'
		/>,
		'Возраст',
		'Всего групп',
		'Рейтинг',
	]

	const formatUsersTableData = (usersData: UserItem[]) => {
		return usersData.map((userEl, idx) => {
			return [
				String(idx + 1),
				userEl.region,
				userEl.mainGroup,
				<Link to={userEl.id} key={userEl.id}>
					{userEl.fullname}
				</Link>,
				calculateAge(userEl.birthday, true),
				userEl.groups?.length,
				<div className={styles.ratingCell} key={6}>
					<span>{userEl.rating}</span>(
					{getCorrectWordForm(userEl?.events.length, ['событие', 'события', 'событий'])})
				</div>,
			]
		})
	}

	if (isLoading || !usersList) return <Loader />

	return (
		<CustomTable
			className={styles.usersTable}
			cellsData={formatUsersTableData(usersList)}
			colTitles={tableTitles}
		/>
	)
}
