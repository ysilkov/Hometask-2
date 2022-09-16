import { createSlice } from "@reduxjs/toolkit";
import { categories, dataChangeNote, dataCreate } from "../helper/helper";
import { notes } from "./notes";

const initialState = {
  notes: notes,
  switch: true,
  categories: categories,
  note: null,
  name: null,
  content: null,
  category: null,
  id: null,
  dataCreate: dataCreate,
  dataChangeNote: dataChangeNote,
};

export const Note = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push({
        id: new Date().getTime(),
        name: action.payload.name,
        created: state.dataCreate,
        category: action.payload.category,
        content: action.payload.content,
        dates: "",
        archived: false,
      });
    },
    switcher(state, action) {
      state.switch = action.payload;
    },
    editModal(state, action) {
      state.note = state.notes.filter((note) => note.id === action.payload);
      state.name = state.note[0].name;
      state.content = state.note[0].content;
      state.category = state.note[0].category;
      state.dates = state.dataChangeNote;
      state.id = action.payload;
    },
    archiveChange(state, action) {
      state.switch === false
        ? (state.notes.find(
            (note) => note.id === action.payload
          ).archived = false)
        : (state.notes.find(
            (note) => note.id === action.payload
          ).archived = true);
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeContect(state, action) {
      state.content = action.payload;
    },
    updateNoteState(state) {
      let note = state.notes.find((note) => note.id === state.id);
      if (note.name !== state.name) {
        note.name = state.name;
      }
      if (note.content !== state.content) {
        note.content = `${state.content}, ${state.dataChangeNote}`;
        note.dates = `${note.dates} ${state.dataChangeNote}`;
      }
      if (note.category !== state.category) {
        note.category = state.category;
      }
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
    removeNote(state, action) {
      state.notes = action.payload;
    },
    deleteNotes(state, action) {
      state.notes = action.payload;
    },
  },
});
export const {
  addNote,
  removeNote,
  deleteNotes,
  archiveChange,
  switcher,
  editModal,
  changeName,
  changeContect,
  updateNoteState,
  changeCategory,
} = Note.actions;
export default Note.reducer;
