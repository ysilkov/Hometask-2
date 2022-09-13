import { configureStore } from "@reduxjs/toolkit";
import NoteReducer from "./noteReducer"

export const store = configureStore({
    reducer: {
        note: NoteReducer,
    }
})