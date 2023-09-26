import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// crea una fetta di store dedicata allo stato

const initialState = {
    comments: [],
    newComment: {
        rate: 0,
        comment: '',
        elementId: '',
    },
    isLoading: false,
    error: null
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (userData) => {
        const {url, params} = userData;
        console.log(params)
        try {
            const res = await fetch(url, params)
            return await res.json()
        } catch (e) {
            console.log(e)
        }
    }
)

export const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.newComment.comment = action.payload;
            console.log(state.newComment.comment)
            return state
        },
        addRate: (state, action) => {
            state.newComment.rate = action.payload;
            return state
        },
        addAsin: (state, action) => {
            state.newComment.elementId = action.payload;
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

export const {addComment, addAsin, addRate} = commentSlice.actions
export const allComments = (state) => state.comments.comments
export const rate = (state) => state.comments.newComment.rate
export const cm = (state) => state.comments.newComment.comment
export const asin = (state) => state.comments.newComment.elementId
export const isLoading = (state) => state.comments.isLoading
export const errors = (state) => state.comments.error
export default commentSlice.reducer