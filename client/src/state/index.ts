import { combineReducers, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
}

const initialStateCredits = {
    credits: 3,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
})

export const creditsSlice = createSlice({
    name: "credits",
    initialState: initialStateCredits,
    reducers: {
        setCredits: (state, action) => {
            state.credits = action.payload.credits;
        },
        setService: (state, action) => {
            if (action.payload == "image") {
                state.credits -= 1;
            } else if (action.payload == "audio") {
                state.credits -= 2;
            }
        }
    }
})

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    credits: creditsSlice.reducer,
})

export const { setLogin, setLogout } = authSlice.actions;
export const { setCredits, setService } = creditsSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;