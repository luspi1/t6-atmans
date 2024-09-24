import { type NavigationItem } from 'src/types/navigation'

export const OneDepartmentMenu: NavigationItem[] = [
	{
		title: 'Информация',
		link: '',
		exact: true,
	},
	{
		title: 'Новости',
		link: 'news',
	},
	{
		title: 'История',
		link: 'departments-details-history',
	},

	{
		title: 'Участники',
		link: 'departments-details-participants',
	},

	{
		title: 'События',
		link: 'departments-details-events',
	},

	{
		title: 'Галерея',
		link: 'departments-details-gallery',
	},
]
