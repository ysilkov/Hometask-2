import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategory,
  changeContect,
  changeName,
  updateNoteState,
} from "../../../store/noteReducer";
import style from "./ModalWindowUpdate.module.css";

const ModalWindowUpdate = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.note.name);
  const categories = useSelector((state) => state.note.categories);
  const content = useSelector((state) => state.note.content);
  const category = useSelector((state) => state.note.category);
  const changeNameNote = (e) => {
    dispatch(changeName(e.target.value));
  };

  const changeContentNote = (e) => {
    dispatch(changeContect(e.target.value));
  };
  const changeCategoryNote = (e) => {
    dispatch(changeCategory(e.target.value));
  };

  const updateNote = () => {
    dispatch(updateNoteState());
    props.setModalActiveEdit(false);
    props.setMessage("Note update");
  };
  return (
    <>
      <div className={props.modalActiveEdit ? style.modal : style.hidden}>
        <form>
          <input
            type="text"
            name="name"
            value={name || ""}
            placeholder="Name"
            onChange={(e) => changeNameNote(e)}
            required
          />
          <select
            name="categories"
            value={category || " "}
            onChange={(e) => changeCategoryNote(e)}
          >
            {Object.keys(categories).map((elem) => (
              <option key={elem}>{elem}</option>
            ))}
          </select>
          <textarea
            name="content"
            placeholder="Content"
            id="content"
            value={content || " "}
            onChange={(e) => changeContentNote(e)}
          />
          <button
            className={style.submitButton}
            type="button"
            value="Submit"
            onClick={() => updateNote()}
          >
            Submit
          </button>
          <input
            className={style.cancel}
            type="button"
            value="Cancel"
            onClick={() => props.setModalActiveEdit(false)}
          />
        </form>
      </div>
    </>
  );
};
export default ModalWindowUpdate;
