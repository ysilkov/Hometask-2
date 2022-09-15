import {createSlice} from "@reduxjs/toolkit";
import { categories } from "../helper/helper";
import { notes } from "./notes";

const initialState ={
    notes: notes,
    switch: true,
    categories: categories,
    note: null,
    name: null,
    content: null,
    category: null,
    id: null
    
} 

export const Note = createSlice({
name: "notes",
initialState,
reducers: {
    addNote(state, action){
    
    },
    switcher(state, action){
        state.switch = action.payload
    },
    editModal(state,action) {
     state.note = state.notes.filter((note) => note.id === action.payload)
     state.name = state.note[0].name
     state.content = state.note[0].content
     state.category = state.note[0].category
     state.id = action.payload
    }, 
    archiveChange(state, action){
       state.switch === false ? state.notes.find(note => note.id === action.payload).archived = false:
       state.notes.find(note => note.id === action.payload).archived = true;   
    },
    changeName(state, action){
     state.name = action.payload
    }, 
    changeContect(state,action){
        state.content = action.payload
    },
    updateNoteState(state){
    state.notes.find(note => note.id === state.id).name = state.name
    state.notes.find(note => note.id === state.id).content = state.content
    state.notes.find(note => note.id === state.id).category = state.category
    },
    changeCategory(state, action){
       state.category = action.payload
    },
    removeNote(state, action){
        state.notes = action.payload
    },
    deleteNotes(state, action){
    state.notes = action.payload
    }
}
})
 export const {addNote, removeNote, deleteNotes, archiveChange, switcher, editModal, changeName, changeContect, updateNoteState, changeCategory} = Note.actions;
 export default Note.reducer;