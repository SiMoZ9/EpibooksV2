import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// crea una fetta di store dedicata allo stato

const initialState = {
    comments: [],
    newComment: {
        rate: 0,
        comment: '',
        elementId: null,
    },
    isLoading: false,
    error: null
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (url, params) => {
        try {
            const res = await fetch(url, params)
            return await res.json()
        } catch (e) {
            return e
        }
    }
)

const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.newComment = action.payload;
            return state
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchComments.pending, state => {
                state.isLoading = true
            })

            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments = action.payload
                state.isLoading = false
            })

            .addCase(fetchComments.rejected, (state, action)=> {
                state.error = action.payload
            })
    }
})

export const {addComment} = commentSlice.actions
export const allComments = (state) => state.comments.comments
export const new_comment = (state) => state.comments.newComment
export const isLoading = (state) => state.comments.isLoading
export const errors = (state) => state.comments.error
export default commentSlice.reducer