import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./state/rootReducer";

import {
	persistReducer,
	FLUSH,
    REHYDRATE,
	PAUSE,
	PERSIST,
    PURGE,
    REGISTER,
     } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage, version: 1};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
	getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export default store;

