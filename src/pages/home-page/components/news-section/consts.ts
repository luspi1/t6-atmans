import { type SwiperProps } from 'swiper/react'

import { DisplayBreakpoints } from 'src/helpers/consts'

type NewsSlideItemType = {
	id: string
	text: string
	date: string
	hoverImg?: string
}

export const newsSliderOptions: SwiperProps = {
	slidesPerView: 1,
	spaceBetween: 12,
	grabCursor: true,
	loop: true,
	breakpoints: {
		[DisplayBreakpoints.Sm]: {
			slidesPerView: 2,
			spaceBetween: 8,
		},
		[DisplayBreakpoints.Lg]: {
			slidesPerView: 3,
		},
		[DisplayBreakpoints.Xxl]: {
			slidesPerView: 4,
		},
	},
}

export const NewsSliderItems: NewsSlideItemType[] = [
	{
		id: '0',
		text: 'Международный фестиваль лошадей башкирской породы «Башкорт аты»',
		date: '17 апреля 2023',
	},
	{
		id: '1',
		text: 'Итальянская ассоциация «Гарпастум — древнеримский кальчо» признана Всемирным обществом этноспорта. Совет Всемирного общества этноспорта, следуя уставным процедурам признания других организаций, рассмотрел и...',
		date: '17 апреля 2023',
		hoverImg: 'https://www.pravmir.ru/wp-content/uploads/2012/03/whcynabob1q-800x504.jpg',
	},
	{
		id: '2',
		text: 'Всемирное общество этноспорта объявляет о вхождении Анастасиоса Пантазидиса из Греции в Совет и назначении исполнительным директором',
		date: '17 апреля 2023',
		hoverImg: 'https://img51994.kanal-o.ru/img/2018-04-02/fmt_94_24_shutterstock_744830380.jpg',
	},
	{
		id: '3',
		text: 'Вебинар «Стратегия взаимодействия академических вузов и производственных партнеров на базе федеральной инновационной площадки РГХПУ им С.Г. Строганова»',
		date: '17 апреля 2023',
		hoverImg:
			'https://sun9-15.userapi.com/impg/c857524/v857524218/22862c/UyI9b4oYDL8.jpg?size=800x533&quality=96&sign=98a5d3dfafb64fb1f145c11327af146d&type=album',
	},
	{
		id: '4',
		text: 'Международный фестиваль лошадей башкирской породы «Башкорт аты»',
		date: '17 апреля 2023',
	},
	{
		id: '5',
		text: 'Итальянская ассоциация «Гарпастум — древнеримский кальчо» признана Всемирным обществом этноспорта. Совет Всемирного общества этноспорта, следуя уставным процедурам признания других организаций, рассмотрел и...',
		date: '17 апреля 2023',
		hoverImg: 'https://www.pravmir.ru/wp-content/uploads/2012/03/whcynabob1q-800x504.jpg',
	},
	{
		id: '6',
		text: 'Всемирное общество этноспорта объявляет о вхождении Анастасиоса Пантазидиса из Греции в Совет и назначении исполнительным директором',
		date: '17 апреля 2023',
		hoverImg: 'https://img51994.kanal-o.ru/img/2018-04-02/fmt_94_24_shutterstock_744830380.jpg',
	},
	{
		id: '7',
		text: 'Вебинар «Стратегия взаимодействия академических вузов и производственных партнеров на базе федеральной инновационной площадки РГХПУ им С.Г. Строганова»',
		date: '17 апреля 2023',
		hoverImg:
			'https://sun9-15.userapi.com/impg/c857524/v857524218/22862c/UyI9b4oYDL8.jpg?size=800x533&quality=96&sign=98a5d3dfafb64fb1f145c11327af146d&type=album',
	},
]
