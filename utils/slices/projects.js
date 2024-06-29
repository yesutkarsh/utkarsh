import { createSlice } from "@reduxjs/toolkit";

const projects = createSlice({
    name:"project",
    initialState:{
        projects:null
    },
    reducers:{
        addProjects:(state,action)=>{
            state.projects = action.payload
        }
    }
})


export const {addProjects} = projects.actions;
export default projects.reducer;