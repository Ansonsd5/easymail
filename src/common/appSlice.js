import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isDarkMode : false
    },

    reducers : {
        toggleViewMode : (state) =>{
            state.isDarkMode = !state.isDarkMode;
        }
    }
});

export const { toggleViewMode } = appSlice.actions;
export default appSlice.reducer;