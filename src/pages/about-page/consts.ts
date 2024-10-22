import { type NavigationItem } from 'src/types/navigation'
import { type ShortDocument } from 'src/types/document'

export const AboutMenuItems: NavigationItem[] = [
	{
		title: 'История Атманова угла',
		link: 'about-history',
	},
	{
		title: 'Материальная культура',
		link: 'about-culture',
	},
	{
		title: 'Карта и маршруты',
		link: 'about-contacts',
	},
]

export const aboutPageDocuments: ShortDocument[] = [
	{
		id: '0',
		title: 'Устав Федерации Этноспорта России',
		type: 'doc',
		size: '68.5',
		link: '#',
	},

	{
		id: '1',
		title: 'Статья: Особенности развития этноспорта в регионах России. А.В. Кыласов, 2022',
		type: 'doc',
		size: '68.5',
		link: '#',
	},

	{
		id: '2',
		title:
			'Монография: Национальные виды борьбы как стимул развития военного дела на селе. А.С. Тедорадзе, 2024',
		type: 'doc',
		size: '68.5',
		link: '#',
	},

	{
		id: '3',
		title: 'Очерк: Куда вы меня тащите? А.Р. Файзуллин, 2017-2024',
		type: 'doc',
		size: '68.5',
		link: '#',
	},
]
