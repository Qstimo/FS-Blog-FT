import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from '../../../Utils/axios'
import {Status, TPosts} from './types'
import { RootState } from '../../store'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const {data} = await axios.get('/posts')
    return data
})

export const fetchTags = createAsyncThunk('tags/fetchTags', async ()=>{
    const {data} = await axios.get('/tags');
    return data
})

export const fetchPostRemove = createAsyncThunk('posts/fetchPostRemove', async (id)=>{
await axios.delete(`/posts/${id}`)
});


const initialState:TPosts = {
    posts:{
        items:[],
        status: Status.LOADING,
    },
    tags:{
        items:[],
        status: Status.LOADING,
    }

}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending,(state)=>{
            state.posts.status = Status.LOADING
            state.posts.items = [];
        })
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts.status = Status.SUCCESS
            state.posts.items = action.payload;
        })
        builder.addCase(fetchPosts.rejected,(state)=>{
            state.posts.status = Status.ERROR
            state.posts.items = [];
        })

        builder.addCase(fetchTags.pending,(state)=>{
            state.tags.status = Status.LOADING
            state.tags.items = [];
        })
        builder.addCase(fetchTags.fulfilled,(state,action)=>{
            state.tags.status = Status.SUCCESS
            state.tags.items = action.payload;
        })
        builder.addCase(fetchTags.rejected,(state)=>{
            state.tags.status = Status.ERROR
            state.tags.items = [];
        })
       
    }
})

export const selectPostData = (state:RootState)=> state.posts;

export default postSlice.reducer;