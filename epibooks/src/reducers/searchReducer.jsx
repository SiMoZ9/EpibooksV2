import {createSlice} from "@reduxjs/toolkit";
import {allBooks} from "./booksReducer";
import {useSelector} from "react-redux";


const initialState = {
    formValue: "",
    formFiltered: []
}

const filterSlice = createSlice({
    name: 'filteredSearch',
    initialState,
    reducers: {
        setFormValue: (state, action) => {
            state.formValue = action.payload;
        },

        setFilteredBooks: (state, action) => {
            state.formFiltered = action.payload;
        }
    }
})

export const {setFormValue, setFilteredBooks} = filterSlice.actions
export const value = (state) => state.filteredSearch.formValue
export const filteredBooks = (state) => state.filteredSearch.formFiltered
export default filterSlice.reducer