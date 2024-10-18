export enum ReducerPath {
	Home = 'home/api',
	Objects = 'objects/api',
	Ethnosport = 'ethnosport/api',
	News = 'news/api',
	Events = 'events/api',
	Groups = 'groups/api',
	Cultures = 'cultures/api',
}

export const ImagesFormat = ['png', 'jpeg', 'jpg', 'webp', 'gif']
export enum NameSpace {
	BreadCrumbs = 'BREAD_CRUMBS',
	AdminTitle = 'ADMIN_TITLE',
}

export enum DisplayBreakpoints {
	Sm = 576,
	Md = 768,
	Lg = 1024,
	Xl = 1280,
	Xxl = 1440,
}

export const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4020/api/v1'
export const HOME_URL = 'https://t6api.npotau.ru/home'
