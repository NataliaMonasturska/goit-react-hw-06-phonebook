import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, changeFilter } from './contacts-actions';

const LS_KEY = 'reader_contacts';

const items = createReducer(JSON.parse(window.localStorage.getItem(LS_KEY,))
    ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    , {
        [addContact]: (state, { payload }) => [...state, payload],
        [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload)
    });

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})
export const contactsReducer = combineReducers({
    items,
    filter,
})

