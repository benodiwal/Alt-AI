import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import creditsSlice from "./creditsSlice";

const rootReducer = combineReducers({
    authSlice,
    creditsSlice, 
});

export type RootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;