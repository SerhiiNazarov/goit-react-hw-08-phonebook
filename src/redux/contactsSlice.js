import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        const { name, number } = action.payload;
        const contacts = state.value;

        if (
          contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase().trim()
          )
        ) {
          alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number === number)) {
          alert(`${number} is already in contacts.`);
        } else {
          state.value.push(action.payload);
        }
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactReducer = persistReducer(
  contactsPersistConfig,
  contactsReducer
);
