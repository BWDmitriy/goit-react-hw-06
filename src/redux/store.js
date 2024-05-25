// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Використовуємо локальне сховище
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

// Конфігурація для збереження поля items зі слайса контактів
const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'], // Зберігаємо тільки поле items
};

// Застосовуємо конфігурацію до редюсера слайса контактів
const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };