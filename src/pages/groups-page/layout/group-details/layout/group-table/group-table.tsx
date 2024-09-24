import { type FC, useState } from 'react'
import { type GroupItem } from 'src/types/groups'

import { Link, useParams } from 'react-router-dom'

import { useDebounce } from 'src/hooks/debounce/debounce'
import { TableSearch } from 'src/modules/table-search/table-search'
import { MainSelect } from 'src/UI/MainSelect/MainSelect'
import { getCorrectWordForm } from 'src/helpers/utils'
import { Loader } from 'src/components/loader/loader'
import { CustomTable } from 'src/components/custom-table/custom-table'
import { Pagination } from 'src/components/pagination/pagination'
import { useGetGroupTableQuery } from 'src/store/groups/groups.api'

import styles from './index.module.scss'
import mainGroupsStyles from '../index.module.scss'

export const GroupTable: FC = () => {
	const [searchGroups, setSearchGroups] = useState<string>('')
	const debouncedSearch = useDebounce(searchGroups)

	const { id } = useParams()

	const { data: groupList, isLoading } = useGetGroupTableQuery([debouncedSearch, id ?? ''])

	const searchGroupsHandler = (value: string) => {
		setSearchGroups(value)
	}
	const tableTitles = [
		'№',
		'Регион',
		<TableSearch
			wrapperClassName={styles.groupSearchWrapper}
			key={2}
			handleSearch={searchGroupsHandler}
			placeholder='Поиск по названию группы'
		/>,
		<MainSelect
			wrapperClassName={styles.groupCategorySelect}
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
				groupEl.region,
				<Link to={groupEl.id} key={groupEl.id}>
					{groupEl.title}
				</Link>,
				<a href='#' key={3}>
					{groupEl.category}
				</a>,
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
		<div className={mainGroupsStyles.groupTabContent}>
			<section className={styles.groupTableSection}>
				<p className={styles.groupLengthInfo}>
					Групп отобрано: <span>{groupList?.length}</span>
				</p>
				<CustomTable
					className={styles.groupTable}
					cellsData={formatGroupsTableData(groupList)}
					colTitles={tableTitles}
				/>
				<Pagination pagesCount={7} activePage={2} />
			</section>
		</div>
	)
}
