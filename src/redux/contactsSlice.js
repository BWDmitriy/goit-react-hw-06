// src/redux/contactsSlice.js

import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

const ContactsState = {
    items: []
}

const initialState: ContactsState = {
    items: [],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction < any > ) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action: PayloadAction < string > ) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const {
    addContact,
    deleteContact
} = contactsSlice.actions;

export const selectContacts = (state: RootState) => state.contacts.items;

export default contactsSlice.reducer;