import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
const filterReducer = filterSlice.reducer;

const filterPersistConfig = {
  key: 'filter',
  storage,
};

export const persistedFilterReducer = persistReducer(
  filterPersistConfig,
  filterReducer
);
