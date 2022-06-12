import { configureStore } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import contactsReducer from './contacts/slice';
import userReducer from './user/user-slice';

const userPersistConfig = {
  key: 'user',
  storage,
  whiteList: ['token'],
};

const persistedReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);