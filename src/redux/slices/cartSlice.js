import { createSlice } from "@reduxjs/toolkit";
import Product from "../../pages/Prouduct";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
  items:[]
    },
    reducers:{
         addtocart:(state,action)=>{
            const data = action.payload
            const existing = state.items.find(item=>item.id=== data.id)
            if(existing){
                alert('products is on gthe cart')
            }
            else{
                state.items.push(data)
                alert('added to cart')
            }
         }
    }
})

export const {addtocart}= cartSlice.actions
export default cartSlice.reducer