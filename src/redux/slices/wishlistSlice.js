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
        },
        deleteitem:(state,action)=>{
          const itemID=action.payload
          return{...state,items:state.items.filter(item=>item.id!=itemID)}
        }

    }
})

export const {addwishlist,deleteitem} = wishlistSlice.actions

export default wishlistSlice.reducer