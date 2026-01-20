import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../redux/slices/wishlistSlice";
import cartSlice from "../redux/slices/cartSlice";


const store = configureStore({

    reducer:{
       cart:cartSlice,
       Wishlist:wishlistSlice
    }
})

export default store;