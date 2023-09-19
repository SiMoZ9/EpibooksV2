import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// crea una fetta di store dedicata allo stato

const initialState = {
    books: [],
    isLoading: false,
    error: null
}

export const getData = createAsyncThunk(
    'books/getAllBooks',
async (url) => {
    try {
        const res = await fetch(url)
        return await res.json()
    } catch (e) {
        console.log(e)
    }
    }
)

const bookSlice = createSlice({
    name: 'getBooks',
    initialState,
    extraReducers: builder => {
        // si definiscono 3 casi delle promises
        builder
            .addCase(getData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = action.payload // quello che ritorna getData
            })
            .addCase(getData.rejected, (state) => {
                state.isLoading = false
                state.error = "Error"
            })
    }
})

// devo esportare i 3 singoli stati
export const allBooks = (state) => state.bookStore.books
export const allLoading = (state) => state.bookStore.isLoading
export const allError = (state) => state.bookStore.error

export default bookSlice.reducer