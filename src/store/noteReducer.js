import {createSlice} from "@reduxjs/toolkit";
import { notes } from "./initialstate";

const initialState = notes

export const Note = createSlice({
name: "notes",
initialState,
reducers: {
    addNote(state, action){
    
    }
}
})
 export const {addNote} = Note.actions;
 export default Note.reducer;