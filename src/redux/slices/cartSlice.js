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
            //    update function for  increment
            
           
            }
            else{
                state.items.push({...data,qty:1,totalp:data.price})
                alert('added to cart')
            }
         },
         removeitem:(state,action)=>{
                 const dataID =action.payload
        return  {...state,items: state.items.filter(item=>item.id!= dataID)}

                
         },
         incrementqty:(state,action)=>{
            const data = action.payload
         const update = state.items.find(item=>item.id==data.id)
         if(update){
            update.qty+=1
            update.totalp*=update.qty
         }
         },
         decrementqty:(state,action)=>{
            const data = action.payload
            const  decrement = state.items.find(item=>item.id==data.id)
            if(decrement && decrement.qty >1){
            decrement.qty-=1
            decrement.totalp= decrement.price*decrement.qty

            }
            else{
                return  {...state,items: state.items.filter(item=>item.id!= data.id)}
            }
         }
    }
})

export const {addtocart,removeitem,incrementqty,decrementqty}= cartSlice.actions
export default cartSlice.reducer