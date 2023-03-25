import { configureStore } from "@reduxjs/toolkit";
import CardFilter from "./CardFilter/CardFilter";

const store = configureStore({
    reducer:{
        CardFilter:CardFilter
    }
})

export default store ;