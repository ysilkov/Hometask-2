import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../../store/noteReducer";
import style from "./ModalWindowCreate.module.css";

const ModaleWindowCreate = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Idea");
  const [content, setContent] = useState("");
  const categories = useSelector((state) => state.note.categories);
  const dispatch = useDispatch();
  const newNote = {
    name: name,
    category: category,
    content: content,
  };
  const createNote = () => {
    dispatch(addNote(newNote));
    setName("");
    setContent("");
    setCategory("Idea");
    props.setModalActiveCreate(false);
    props.setMessage("New note create");
  };
  return (
    <>
      <div className={props.modalActiveCreate ? style.modal : style.hidden}>
        <form>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select
            name="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Object.keys(categories).map((elem) => (
              <option key={elem}>{elem}</option>
            ))}
          </select>
          <textarea
            name="content"
            placeholder="Content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            className={style.submitButton}
            type="button"
            value="Submit"
            onClick={() => createNote()}
          >
            Submit
          </button>
          <input
            className={style.cancel}
            type="button"
            value="Cancel"
            onClick={() => props.setModalActiveCreate(false)}
          />
        </form>
      </div>
    </>
  );
};
export default ModaleWindowCreate;
