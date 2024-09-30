import{configureStore} from "@reduxjs/toolkit"
import cartReducer from "./CartSlice"
import searchReducer from "./SearchSlice"

const store = configureStore({
    reducer : {
        cart : cartReducer,
        search : searchReducer
    }
})


export default store