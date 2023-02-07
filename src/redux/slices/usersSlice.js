import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";



const initialState = {
    users: [], 
    load: false
}


export const getUsers = createAsyncThunk('users/getUsers', async () => {

    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(data);
    return data;
})


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },


    extraReducers(building){
        building
            .addCase(getUsers.pending, (state, action) => {
                state.load = false
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.load = true
            })
            .addCase(getUsers.rejected, () => {
                alert('error')
            })
    }

})


export default usersSlice.reducer;
export const usersSelect = state => state?.users?.users;
export const loadSelect = state => state?.users?.load
