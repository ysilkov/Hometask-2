import {createSlice} from "@reduxjs/toolkit";
import { notes } from "./notes";

const initialState ={
    notes: notes,
} 

export const Note = createSlice({
name: "notes",
initialState,
reducers: {
    addNote(state, action){
    
    },
    removeNote(state, action){
        state.notes = action.payload
    },
    deleteNotes(state, action){
    state.notes = action.payload
    }
}
})
 export const {addNote, removeNote, deleteNotes} = Note.actions;
 export default Note.reducer;