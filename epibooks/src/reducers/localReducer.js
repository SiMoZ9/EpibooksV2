import {createSlice} from "@reduxjs/toolkit";
import fantasy from "../books/fantasy.json"

const initialState = {
    books: [],
    load: false,
    error: null
}

const localSlice = createSlice({
    name: "localBooks",
    initialState,
    reducers: {
        fetchLocalBooks: (state) => {
            const loading = !state.load
            const books = state.books
            return state
        }
    }
})

export const {fetchLocalBooks} = localSlice.actions
export default localSlice.reducer