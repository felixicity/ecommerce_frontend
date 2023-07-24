import {createSlice} from  "@reduxjs/toolkit"
import {collection} from "../../data"

const initialState = {
    amount:0,
    price:0,
}

const productSlice = createSlice ({
    name:"product",
    initialState,
    reducers:{
        increaseAmount: (state) => {
            state.amount = state.amount + 1
        },
        decreaseAmount: (state) => {
            state.amount = state.amount - 1
        }
    }

});

export const {increaseAmount, decreaseAmount} = productSlice.actions
export default productSlice.reducer