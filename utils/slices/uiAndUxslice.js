import { createSlice } from "@reduxjs/toolkit";

const toggleConnect = createSlice({
    name:"toggleConnect",
    initialState:{
        toggleCard:false
    },
    reducers:{
        toggleConnectCard:(state, action)=>{
            state.toggleCard = !state.toggleCard
        }
    }
})

export const { toggleConnectCard } = toggleConnect.actions;
export default toggleConnect.reducer;