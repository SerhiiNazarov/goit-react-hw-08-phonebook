import { contactsReducer } from './contacts/contactsSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter/filterSlice';
import authReducer from './auth/auth-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './auth/auth-slice';
// import { filterReducer } from './filter/filterSlice';
// import { contactsReducer } from './contacts/contactsSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
