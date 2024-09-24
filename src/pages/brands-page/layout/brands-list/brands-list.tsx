import { type FC } from 'react'
import { PageContent } from 'src/components/page-content/page-content'
import { Pagination } from 'src/components/pagination/pagination'
import { Helmet } from 'react-helmet-async'
import { EventsList } from 'src/modules/events-list/events-list'
import { useGetAllBrandEventsQuery } from 'src/store/brandEvents/brand-events.api'
import { CustomText } from 'src/components/custom-text/custom-text'

import styles from './index.module.scss'

export const BrandsList: FC = () => {
	const { data: brandEvents } = useGetAllBrandEventsQuery(null)
	return (
		<PageContent $padding='30px 30px 20px 30px' $maxWidth='1220px'>
			<Helmet>
				<title>Все бренды событий</title>
			</Helmet>
			<h2>Бренды событий</h2>
			<CustomText $maxWidth='710px' $lineHeight='1.3' $margin='0 0 10px 0'>
				В этом разделе представлены крупные события. В состав таких событий входят регулярные или
				иные мероприятия. Таким может быть, например, ежегодный фестиваль.
			</CustomText>
			<EventsList
				className={styles.brandsEventList}
				eventsData={brandEvents}
				typeEventInfo='brand'
			/>
			<Pagination pagesCount={7} activePage={2} />
		</PageContent>
	)
}
