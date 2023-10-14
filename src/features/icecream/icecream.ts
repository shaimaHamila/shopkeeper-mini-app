import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { orderedCake } from "../cake/cakeSlice";
import { RootState } from "../../store/store";
type InitialState = {
    numberOfIcecream: number
}
const initialState: InitialState = {
    numberOfIcecream: 10
}
const icecreamSlice = createSlice({
    name: "icecreame",
    initialState,
    reducers: {
        orderedIcecream: (state) => {
            state.numberOfIcecream--;
        },
        restockIcecream: (state, action: PayloadAction<number>) => {
            state.numberOfIcecream += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIcecream--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(orderedCake, (state) => {
            state.numberOfIcecream--
        })
    },
})

export const selectNumberOfIcecream = (state: RootState) => state.icecream.numberOfIcecream

export default icecreamSlice.reducer;
export const { orderedIcecream, restockIcecream } = icecreamSlice.actions