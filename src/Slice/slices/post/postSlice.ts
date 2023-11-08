import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from '../../../Utils/axios'
import {Status, TPosts} from './types'
import { RootState } from '../../store'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (searchTerm?:string)=>{
    try {
           const {data} = searchTerm
    ?  await  axios.get(`/posts?searchTerm=${searchTerm}`)
    : await axios.get(`/posts`)
    return data 
    } catch (error) {
        console.log(error)
    }

})
export const fetchLastPopulatePosts = createAsyncThunk('posts/fetchLastPopulatePosts', async ()=>{
    try {
           const {data} = await axios.get(`/posts/last/populate`)
    return data 
    } catch (error) {
        console.log(error)
    }

})
export const fetchPopulatePosts = createAsyncThunk('posts/fetchPopulatePosts', async (searchTerm?:string)=>{
   
    const {data} = searchTerm
    ?  await  axios.get(`/posts/populate?searchTerm=${searchTerm}`)
    : await axios.get(`/posts/populate `)
    return data 
 

})
export const fetchTagsPosts = createAsyncThunk('posts/fetchTagsPosts', async (searchTerm?:string)=>{
   
    const {data} = searchTerm
    ?  await  axios.get(`/searchtags?searchTerm=${searchTerm}`)
    : await axios.get(`/posts `)
    return data 
 

})

export const fetchTags = createAsyncThunk('tags/fetchTags', async ()=>{
    const {data} = await axios.get('/tags');
    return data
})

export const fetchPostRemove = createAsyncThunk('posts/fetchPostRemove', async (id:string)=>{
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
    },
    latsPopulatePost:{
        items:[],
        status: Status.LOADING,
    }

}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        //поиск постов по дате
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
//поиск по популярности
        builder.addCase(fetchPopulatePosts.pending,(state)=>{
            state.posts.status = Status.LOADING
            state.posts.items = [];
        })
        builder.addCase(fetchPopulatePosts.fulfilled,(state,action)=>{
            state.posts.status = Status.SUCCESS
            state.posts.items = action.payload;
        })
        builder.addCase(fetchPopulatePosts.rejected,(state)=>{
            state.posts.status = Status.ERROR
            state.posts.items = [];
        })
//поиск по тегу
        builder.addCase(fetchTagsPosts.pending,(state)=>{
            state.posts.status = Status.LOADING
            state.posts.items = [];
        })
        builder.addCase(fetchTagsPosts.fulfilled,(state,action)=>{
            state.posts.status = Status.SUCCESS
            state.posts.items = action.payload;
        })
        builder.addCase(fetchTagsPosts.rejected,(state)=>{
            state.posts.status = Status.ERROR
            state.posts.items = [];
        })

        builder.addCase(fetchLastPopulatePosts.pending,(state)=>{
            state.latsPopulatePost.status = Status.LOADING
            state.latsPopulatePost.items = [];
        })
        builder.addCase(fetchLastPopulatePosts.fulfilled,(state,action)=>{
            state.latsPopulatePost.status = Status.SUCCESS
            state.latsPopulatePost.items = action.payload;
        })
        builder.addCase(fetchLastPopulatePosts.rejected,(state)=>{
            state.latsPopulatePost.status = Status.ERROR
            state.latsPopulatePost.items = [];
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