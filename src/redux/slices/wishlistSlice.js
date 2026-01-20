import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:"cart",
    initialState:{
  items:[]
    },
    reducers:{

        addwishlist:(state,action)=>{
      const product = action.payload
      const existing = state.items.find((item)=>item.id===product.id)
      if(existing){
        alert(' allready in wishlist')
      }
      else{
        state.items.push(product)
        alert('add')
      }
        }

    }
})

export const {addwishlist} = wishlistSlice.actions

export default wishlistSlice.reducer