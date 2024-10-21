import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { breadCrumbsReducer } from 'src/modules/bread-crumbs/store/bread-crumbs.slice'
import { homeApi } from 'src/store/home/home.api'
import { objectsApi } from 'src/store/objects/objects.api'
import { newsApi } from 'src/store/news/news.api'
import { eventsApi } from 'src/store/events/events.api'
import { culturesApi } from 'src/store/cultures/cultures.api'

import { NameSpace } from 'src/helpers/consts'

export const store = configureStore({
	reducer: {
		[NameSpace.BreadCrumbs]: breadCrumbsReducer,
		[objectsApi.reducerPath]: objectsApi.reducer,
		[newsApi.reducerPath]: newsApi.reducer,
		[eventsApi.reducerPath]: eventsApi.reducer,
		[homeApi.reducerPath]: homeApi.reducer,
		[culturesApi.reducerPath]: culturesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			objectsApi.middleware,
			newsApi.middleware,
			eventsApi.middleware,
			homeApi.middleware,
			culturesApi.middleware,
		),
})

setupListeners(store.dispatch)
