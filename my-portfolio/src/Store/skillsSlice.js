import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCategory: "All"
};

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        // This action changes the active category when a user clicks a filter tab
        setCategory: (state, action) => {
            state.activeCategory = action.payload;
        }
    }
});

export const { setCategory } = skillsSlice.actions;
export default skillsSlice.reducer;


//In Redux Toolkit, a Slice is a small slice of your global warehouse dedicated to one feature (in this case, your skills filter). A slice requires three simple building blocks:
//1 Name: An internal string tracking label (name: "skills").
//2 Initial State: The default starting value when the website first loads (activeCategory: "All").
//3 Reducers: The logic functions that are allowed to change the state. Here, we wrote setCategory. When called, it updates activeCategory to whatever tab the user just clicked (action.payload).