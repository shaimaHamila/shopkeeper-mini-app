import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store/store"
type InitialState = {
    numberOfCakes: number
}
const initialState: InitialState = {
    numberOfCakes: 10
}
const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        orderedCake: (state) => {
            state.numberOfCakes--
        },
        restockCake: (state, action: PayloadAction<number>) => {
            state.numberOfCakes += action.payload
        }
    },


})

export const selectNumberOfCake = (state: RootState) => state.cake.numberOfCakes

export default cakeSlice.reducer;
export const { orderedCake, restockCake } = cakeSlice.actions;