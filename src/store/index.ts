import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { homeApi } from 'src/store/home/home.api'
import { objectsApi } from 'src/store/objects/objects.api'
import { newsApi } from 'src/store/news/news.api'
import { eventsApi } from 'src/store/events/events.api'
import { ethnosportApi } from 'src/store/ethnosport/ethnosport.api'
import { groupsApi } from 'src/store/groups/groups.api'
import { culturesApi } from 'src/store/cultures/cultures.api'

import { NameSpace } from 'src/helpers/consts'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[objectsApi.reducerPath]: objectsApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		[eventsApi.reducerPath]: eventsApi.reducer,
		[ethnosportApi.reducerPath]: ethnosportApi.reducer,
		[groupsApi.reducerPath]: groupsApi.reducer,
		[homeApi.reducerPath]: homeApi.reducer,
		[culturesApi.reducerPath]: culturesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			objectsApi.middleware,
			newsApi.middleware,
			eventsApi.middleware,
			ethnosportApi.middleware,
			homeApi.middleware,
			groupsApi.middleware,
			culturesApi.middleware,
		),
})

setupListeners(store.dispatch)
