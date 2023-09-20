import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// crea una fetta di store dedicata allo stato

const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

export const getComments = createAsyncThunk(
    'comments/getComments',
    async () => {
        try {
            const res = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZhMDBlOGU4NDIyNzAwMTRjMzI2NzciLCJpYXQiOjE2OTUyMDg1OTgsImV4cCI6MTY5NjQxODE5OH0.8j8CN3VPaLMqDeEc4uShHotCtwP30eLdEAZAaUk88J0"
                }
            })

            return await res.json()
        } catch (e) {
            return e
        }
    }
)

const commentSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getComments.pending, state => {
                state.isLoading = true
            })

            .addCase(getComments.fulfilled, (state, action) => {
                state.comments = action.payload
                state.isLoading = false
            })

            .addCase(getComments.rejected, (state, action)=> {
                state.error = action.payload
            })
    }
})

export const allComments = (state) => state.comments.comments
export const isLoading = (state) => state.comments.isLoading
export const errors = (state) => state.comments.error
export default commentSlice.reducer