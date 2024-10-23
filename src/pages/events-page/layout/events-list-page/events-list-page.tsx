import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { PageContent } from 'src/components/page-content/page-content'

import { Pagination } from 'src/components/pagination/pagination'
import { useGetAllEventsQuery } from 'src/store/events/events.api'
import { Loader } from 'src/components/loader/loader'

export const EventsListPage: FC = () => {
	const { data: eventsList, isLoading } = useGetAllEventsQuery({ year: '' })

	return (
		<PageContent $padding='30px 40px 55px 30px' $maxWidth='100%'>
			<Helmet>
				<title>Cобытия</title>
			</Helmet>
			<h2>Cобытия</h2>
			{isLoading ? <Loader /> : <p>Список событий: {eventsList?.length}</p>}

			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
