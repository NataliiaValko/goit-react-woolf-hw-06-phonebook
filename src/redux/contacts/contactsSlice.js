import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      prepare: value => {
        const id = nanoid();
        return { payload: { id, ...value } };
      },
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
    },

    deleteContact(state, { payload }) {
      const index = state.items.findIndex(({ id }) => id === payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
