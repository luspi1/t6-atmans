import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { homeApi } from 'src/store/home/home.api'
import { usersApi } from 'src/store/users/users.api'
import { regionsApi } from 'src/store/regions/regions.api'
import { newsApi } from 'src/store/news/news.api'
import { eventsApi } from 'src/store/events/events.api'
import { ethnosportApi } from 'src/store/ethnosport/ethnosport.api'
import { disciplinesApi } from 'src/store/disciplines/disciplines.api'
import { groupsApi } from 'src/store/groups/groups.api'
import { brandEventsApi } from 'src/store/brandEvents/brand-events.api'

import { NameSpace } from 'src/helpers/consts'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[regionsApi.reducerPath]: regionsApi.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		[eventsApi.reducerPath]: eventsApi.reducer,
		[ethnosportApi.reducerPath]: ethnosportApi.reducer,
		[disciplinesApi.reducerPath]: disciplinesApi.reducer,
		[groupsApi.reducerPath]: groupsApi.reducer,
		[homeApi.reducerPath]: homeApi.reducer,
		[brandEventsApi.reducerPath]: brandEventsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			regionsApi.middleware,
			usersApi.middleware,
			newsApi.middleware,
			eventsApi.middleware,
			ethnosportApi.middleware,
			disciplinesApi.middleware,
			homeApi.middleware,
			groupsApi.middleware,
			brandEventsApi.middleware,
		),
})

setupListeners(store.dispatch)
