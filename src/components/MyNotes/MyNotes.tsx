import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories, categoriesType } from "../../helper/helper";
import {
  archiveLogo,
  deleteLogo,
  editLogo,
  unArchiveLogo,
} from "../../helper/logo";
import {
  archivedChange,
  deleteNotes,
  editModal,
  removeNote,
  switcher,
} from "../../store/noteReducer";
import { RootState } from "../../store/store";
import ArchivedNotes from "../ArchivedNotes/ArchivedNotes";
import ModaleWindowCreate from "../ModalWindow/ModalWindowCreate/ModalWindowCreate";
import ModalWindowUpdate from "../ModalWindow/ModalWindowUpdate/ModalWindowUpdate";
import style from "./MyNotes.module.css";

const MyNotes = () => {
  const [message, setMessage] = useState("Active notes");
  const [modalActiveEdit, setModalActiveEdit] = useState(false);
  const [modalActiveCreate, setModalActiveCreate] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.note.notes);
  let activeNoteTableShown = useSelector(
    (state: RootState) => state.note.switch
  );
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

  const addNoteArchive = (id: string) => {
    dispatch(archivedChange(id));
    dispatch(switcher(activeNoteTableShown));
    setMessage(
      activeNoteTableShown === false
        ? "Note add to active note"
        : "Note add to archive"
    );
  };
  const deleteNote = (id: string) => {
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
  const getIdModal = (id: string) => {
    dispatch(editModal(id));
  };
  return (
    <div className={style.tableNotes}>
      <header>
        <h1 className={style.header}>My Notes</h1>
      </header>
      <table>
        <colgroup>
          <col className={style.noteLogo} />
          <col className={style.name} />
          <col className={style.created} />
          <col className={style.category1} />
          <col className={style.content} />
          <col className={style.dates} />
          <col className={style.activeLogo} />
          <col className={style.activeLogo} />
          <col className={style.activeLogo} />
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
                  dangerouslySetInnerHTML={{
                    __html: categories[el.category as keyof categoriesType],
                  }}
                />
              </td>
              <td className={style.name}>{el.name}</td>
              <td className={style.created}>{el.created}</td>
              <td className={style.category1}>{el.category}</td>
              <td className={style.content}>{el.content}</td>
              <td className={style.dates}>{el.dates}</td>

              <td
                className={style.rowIconEdit}
                dangerouslySetInnerHTML={{ __html: editLogo }}
                onClick={(event) => {
                  event.preventDefault();
                  setModalActiveEdit(true);
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
      <ModalWindowUpdate
        modalActiveEdit={modalActiveEdit}
        setModalActiveEdit={setModalActiveEdit}
        setMessage={setMessage}
      />
      <ModaleWindowCreate
        modalActiveCreate={modalActiveCreate}
        setModalActiveCreate={setModalActiveCreate}
        setMessage={setMessage}
      />
      <div id={style.notes}>
        <div id="message">{message}</div>
        <button id="create-button" onClick={() => setModalActiveCreate(true)}>
          Create Note
        </button>
      </div>
      <ArchivedNotes />
    </div>
  );
};

export default MyNotes;
