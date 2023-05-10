import { configureStore } from "@reduxjs/toolkit";
import  MySlice  from "./mySlice";
const store=configureStore({
    reducer:{
        // Here FlashCard is A Global state for the entire application..
        FlashCard:MySlice,
    },
})
export default store;