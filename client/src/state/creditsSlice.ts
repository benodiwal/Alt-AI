import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    credits: 3,
}

const creditsSlice = createSlice({
    name: 'credits',
    initialState,
    reducers: {
        setCredits: (state, action) => {
            state.credits = action.payload.credits;
        },
        decrement: (state, action) => {
            if (state.credits > 0) {
                if (action.payload == "image") {
                    state.credits -= 1;
                } else if (action.payload == "restore") {
                    state.credits -= 2;
                }
            }
        }
    }
});

export const { setCredits, decrement } = creditsSlice.actions;

export default creditsSlice.reducer;