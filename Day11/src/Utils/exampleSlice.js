import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
    name : "example",
    initialState : [],
    reducers : {
        addText : (state, action) => {
            state.push(action.payload)
        },
        

        
    }
})

export default exampleSlice.reducer
export const{addText} = exampleSlice.actions