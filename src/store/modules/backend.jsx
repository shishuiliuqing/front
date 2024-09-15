import { createSlice } from "@reduxjs/toolkit";

const backendStore = createSlice({
    name: 'backend',
    initialState: {
        currentPage: localStorage.getItem('backend_page') || '/',
    },
    reducers: {
        setcurrentPage(state, action) {
            state.currentPage = action.payload
            localStorage.setItem('backend_page', action.payload)
        }
    }
})

export const {setcurrentPage} = backendStore.actions

const backendReducer = backendStore.reducer

export default backendReducer