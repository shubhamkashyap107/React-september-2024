import{createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name : "Search",
    initialState : [],
    reducers : {
        addSearchResults : (state, action) => {
            const{query, results} = action.payload
            // console.log(query)
            // console.log(results)
            let foundItem = state.find((item) => {
                return item == query
            })

            if(!foundItem)
            {
                // state.push({query : results})
                let temp = query.toLowerCase()
                state.push({ query :temp , results})
            }
            else
            {

            }
        }
    }
})



export default searchSlice.reducer
export const{addSearchResults} = searchSlice.actions