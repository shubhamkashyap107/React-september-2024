import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers : {
        addItem : (state, action) => {

            // state.push(action.payload) // action -> type, payload

            let existingItem = state.find((item) =>  item.id === action.payload.id )

            if(!existingItem)
            {
                state.push(action.payload)
            }
            else
            {
                existingItem.quantity++;
            }
   
        },
        removeItem : (state, action) => {
            let existingItem = state.find((item) =>  item.id === action.payload.id )

            if(existingItem)
                {
                    if(existingItem.quantity > 1)
                    {
                        existingItem.quantity--;
                    }
                    else
                    {
                        return state.filter((item) => item.id != action.payload.id)
                    }
                }
        }
    }
})


export default cartSlice.reducer
export const{addItem, removeItem} = cartSlice.actions
