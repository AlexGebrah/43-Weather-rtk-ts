import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {
        putMessage: (_state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
})

export const {putMessage} = messageSlice.actions;
export default messageSlice.reducer;