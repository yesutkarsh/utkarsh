import { configureStore } from "@reduxjs/toolkit";
import toggleConnectReducer from "./slices/uiAndUxslice"
import projectsReducer from "./slices/projects"

export default configureStore({
    reducer:{
        toggleConnect: toggleConnectReducer,
        project:projectsReducer
    },
})