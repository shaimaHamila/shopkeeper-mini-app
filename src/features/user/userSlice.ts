import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from "../../store/store";
type User = {
    id: number,
    name: string
}
type InitialState = {
    loading: boolean,
    users: User[],
    error: string
}
const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        throw error;
    }
})

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false,
                state.users = action.payload,
                state.error = ""
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false,
                state.users = []
            state.error = action.error.message || "Somethin went wrong"
        })
    }

})

export const selectUsers = (state: RootState) => state.user

export default userSlice.reducer;

