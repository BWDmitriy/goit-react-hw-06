// src/redux/filtersSlice.js
import {
    createSlice,
    PayloadAction
} from '@reduxjs/toolkit';

interface FiltersState {
    name: string;
}

const initialState: FiltersState = {
    name: '',
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter: (state, action: PayloadAction < string > ) => {
            state.name = action.payload;
        },
    },
});

export const {
    changeFilter
} = filtersSlice.actions;

export const selectNameFilter = (state: RootState) => state.filters.name;

export default filtersSlice.reducer;