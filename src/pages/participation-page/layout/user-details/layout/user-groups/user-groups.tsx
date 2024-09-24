import { type FC, useState } from 'react'
import { type GroupItem } from 'src/types/groups'

import { Link, useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { useGetUserGroupQuery } from 'src/store/users/users.api'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { getCorrectWordForm } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'

import styles from './index.module.scss'

export const UserGroups: FC = () => {
	const [searchGroups, setSearchGroups] = useState<string>('')
	const debouncedSearch = useDebounce(searchGroups)

	const { id } = useParams()

	const { data: groupList, isLoading } = useGetUserGroupQuery([debouncedSearch, id ?? ''])

	const searchGroupsHandler = (value: string) => {
		setSearchGroups(value)
	}
	const tableTitles = [
		'№',
		'Роль в группе',
		<TableSearch
			wrapperClassName={styles.usersGroupsSearchWrapper}
			key={2}
			handleSearch={searchGroupsHandler}
			placeholder='Поиск по названию группы'
		/>,
		<MainSelect
			wrapperClassName={styles.userCategorySelect}
			key={3}
			items={[
				{ label: 'Категория группы', value: '0' },
				{ label: 'Первая категория', value: '1' },
				{ label: 'Вторая категория', value: '2' },
				{ label: 'Третья категория', value: '3' },
			]}
		/>,
		'Участники',
		'Подгруппы',
		'Рейтинг',
	]

	const formatGroupsTableData = (groupsData: GroupItem[]) => {
		return groupsData.map((groupEl, idx) => {
			return [
				String(idx + 1),
				groupEl.role,
				<Link to={groupEl.id} key={groupEl.id}>
					{groupEl.title}
				</Link>,
				groupEl.category,
				groupEl.participantsCount <= 0 ? 'нет' : groupEl.participantsCount,
				groupEl.subgroupsCount <= 0 ? 'нет' : groupEl.subgroupsCount,
				<div className={styles.ratingCell} key={6}>
					<span>{groupEl.rating}</span>(
					{getCorrectWordForm(groupEl.eventsCount, ['событие', 'события', 'событий'])})
				</div>,
			]
		})
	}

	if (isLoading || !groupList) return <Loader />

	return (
		<section className={styles.userGroupsSection}>
			<p className={styles.groupLengthInfo}>
				Групп отобрано: <span>{groupList?.length}</span>
			</p>
			<CustomTable
				className={styles.usersGroupsTable}
				cellsData={formatGroupsTableData(groupList)}
				colTitles={tableTitles}
			/>
			<Pagination pagesCount={7} activePage={2} />
		</section>
	)
}
