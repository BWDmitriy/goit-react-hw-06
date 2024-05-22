// src/redux/store.js

import {
    createStore
} from "redux";
import {
    devToolsEnhancer
} from "@redux-devtools/extension";
import rootReducer from './rootReducer'; // Переконайтеся, що ви імпортуєте rootReducer

const store = createStore(rootReducer, devToolsEnhancer());

export default store;