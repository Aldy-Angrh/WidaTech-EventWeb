import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../action/postSlice";

export default configureStore({
    reducer:{
        posts: postSlice
    }
})