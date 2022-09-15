import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../helper/helper";
import {
  archiveLogo,
  deleteLogo,
  editLogo,
  unArchiveLogo,
} from "../../helper/logo";
import {
  archiveChange,
  deleteNotes,
  editModal,
  removeNote,
  switcher,
} from "../../store/noteReducer";
import ModalWindow from "../ModalWindow/ModalWindow";
import style from "./MyNotes.module.css";

const MyNotes = () => {
  const [message, setMessage] = useState("Active notes");
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  let data = useSelector((state) => state.note.notes);
  let activeNoteTableShown = useSelector((state) => state.note.switch);
  let activeNote = data.filter((el) => el.archived === false);
  let archivedNote = data.filter((el) => el.archived === true);
  const notes = activeNoteTableShown ? activeNote : archivedNote;

  const switchTables = () => {
    activeNoteTableShown
      ? (activeNoteTableShown = false)
      : (activeNoteTableShown = true);
    dispatch(switcher(activeNoteTableShown));
    setMessage(
      activeNoteTableShown === false ? "Archived notes" : "Active notes"
    );
  };

  const addNoteArchive = (id) => {
    dispatch(archiveChange(id));
    dispatch(switcher(activeNoteTableShown));
    setMessage(
      activeNoteTableShown === false
        ? "Note add to active note"
        : "Note add to archive"
    );
  };
  const deleteNote = (id) => {
    dispatch(removeNote(data.filter((el) => el.id !== id)));
    setMessage("Note delete");
  };
  const deleteAll = () => {
    activeNoteTableShown
      ? dispatch(deleteNotes(data.filter((el) => el.archived !== false)))
      : dispatch(deleteNotes(data.filter((el) => el.archived !== true)));
    setMessage(
      activeNoteTableShown === false
        ? "All archive notes delete"
        : "All active notes delete"
    );
  };
  const getIdModal = (id) =>{
    dispatch(editModal(id))
  }
  return (
    <div className={style.tableNotes}>
      <header>
        <h1 className={style.header}>My Notes</h1>
      </header>
      <table>
        <colgroup>
          <col className="note-logo" />
          <col className="name" />
          <col className="created" />
          <col className="category1" />
          <col className="content" />
          <col className="dates" />
          <col className="active-logo" />
          <col className="active-logo" />
          <col className="active-logo" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Created</th>
            <th>Category</th>
            <th>Content</th>
            <th>Dates</th>
            <th className={style.rowLogo}>&nbsp;</th>
            <th className={style.rowLogo}>&nbsp;</th>
            <th
              className={style.rowLogoArchive}
              id="archive-switch"
              title="archive"
              dangerouslySetInnerHTML={
                activeNoteTableShown
                  ? { __html: archiveLogo }
                  : { __html: unArchiveLogo }
              }
              onClick={switchTables}
            ></th>
            <th
              className={style.rowLogoDelete}
              title="delete"
              dangerouslySetInnerHTML={{ __html: deleteLogo }}
              onClick={deleteAll}
            ></th>
          </tr>
        </thead>

        <tbody id="notes-table">
          {notes.map((el) => (
            <tr key={el.id} id={el.id}>
              <td className={style.categoryIcon}>
                <span
                  dangerouslySetInnerHTML={{ __html: categories[el.category] }}
                />
              </td>
              <td className={style.name}>{el.name}</td>
              <td className={style.created}>{el.created}</td>
              <td className={style.category1}>{el.category}</td>
              <td className={style.content}>{el.content}</td>
              <td className={style.dates}>{el.dates}</td>
              <td className={style.dates}></td>
              <td
                className={style.rowIconEdit}
                dangerouslySetInnerHTML={{ __html: editLogo }}
                onClick={(event) => {
                  event.preventDefault();
                  setModalActive(true);
                  getIdModal(el.id);
                }}
              ></td>
              <td
                className={style.rowIconArchive}
                dangerouslySetInnerHTML={
                  activeNoteTableShown
                    ? { __html: archiveLogo }
                    : { __html: unArchiveLogo }
                }
                onClick={() => addNoteArchive(el.id)}
              ></td>
              <td
                className={style.rowIconDelete}
                dangerouslySetInnerHTML={{ __html: deleteLogo }}
                onClick={() => deleteNote(el.id)}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalWindow
        active={modalActive}
        setActive={setModalActive}
        setMessage={setMessage}
      />
      <div id={style.notes}>
        <div id="message">{message}</div>
        <button id="create-button">Create Note</button>
      </div>
    </div>
  );
};

export default MyNotes;
