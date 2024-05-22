// src/redux/store.js

import {
    createStore
} from "redux";
import {
    devToolsEnhancer
} from "@redux-devtools/extension";

const initialState = {
    contacts: {
        items: []
    },
    filters: {
        name: ""
    }
};

const rootReducer = (state = initialState, action) => {
    return state;
};

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);