import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";

export const createEvent = createAsyncThunk("postEvent", async (value)=>{
    return value;
})


const postSlice = createSlice({
    name:'postEvent',
    initialState: {
        events:[]
    },
    extraReducers:{
        [createEvent.fulfilled]:(state, action)=>{
            return{
                ...state,
                events: [...state.events, action.payload],
            }

        }   
    }
})

export default postSlice.reducer;