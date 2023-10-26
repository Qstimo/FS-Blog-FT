import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from '../../../Utils/axios'
import {Status, TAuth, TAuthResponse, TRegister, } from './types'
import { RootState } from '../../store'

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params:TAuth)=>{
    const {data} = await axios.post('/auth/login', params)
    return data
})
export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params:TRegister)=>{
    const {data} = await axios.post('/auth/register', params)
    return data
})
export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async ()=>{
    const {data} = await axios.get('/auth/me')
    return data
})



const initialState:TAuthResponse = {
data: null,
status: Status.LOADING

}

const authSlice = createSlice({
name: 'auth',
initialState,
reducers: {
    logout:(state)=>{
        state.data = null;
    }
},
extraReducers:(builder) => {
    builder.addCase(fetchAuth.pending,(state)=>{
        state.data = null;
        state.status = Status.LOADING;
    })
    builder.addCase(fetchAuth.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = Status.SUCCESS;
    })
    builder.addCase(fetchAuth.rejected,(state)=>{
        state.data = null;
        state.status = Status.ERROR;
    })
    builder.addCase(fetchRegister.pending,(state)=>{
        state.data = null;
        state.status = Status.LOADING;
    })
    builder.addCase(fetchRegister.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = Status.SUCCESS;
    })
    builder.addCase(fetchRegister.rejected,(state)=>{
        state.data = null;
        state.status = Status.ERROR;
    })
    builder.addCase(fetchAuthMe.pending,(state)=>{
        state.data = null;
        state.status = Status.LOADING;
    })
    builder.addCase(fetchAuthMe.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = Status.SUCCESS;
    })
    builder.addCase(fetchAuthMe.rejected,(state)=>{
        state.data = null;
        state.status = Status.ERROR;
    })
}
})
export const {logout} = authSlice.actions;
export const selectIsAuth = (state:RootState) => Boolean(state.auth.data);
export const selectUser = (state:RootState) => (state.auth.data);
export default authSlice.reducer