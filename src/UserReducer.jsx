import {createSlice} from "@reduxjs/toolkit"

const initialState = [
    {
        name: "Bartek Wilki",
        email: "bartek@gmail.com",
        id: 1
    },
    {
        name: "Ola Wilki",
        email: "ola@gmail.com",
        id: 2
    },
    {
        name: "Jeremiasz Wilki",
        email: "jeremiasz@gmail.com",
        id: 3
    }
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer;