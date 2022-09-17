import React from "react";
import { useSelector } from "react-redux";
import style from "./ArchiveNotes.module.css";

const ArchiveNotes = () => {
  const data = useSelector((state) => state.note.notes);
  let Ideas,
    Quotes,
    Tasks,
    Thoughts,
    IdeasActive,
    QuotesActive,
    TasksActive,
    ThoughtsActive;
  Ideas =
    Quotes =
    Tasks =
    Thoughts =
    IdeasActive =
    QuotesActive =
    TasksActive =
    ThoughtsActive =
      0;

  data.forEach((note) => {
    if (note.category === "Idea") {
      Ideas++;
      if (!note.archived) IdeasActive++;
    }
    if (note.category === "Quote") {
      Quotes++;
      if (!note.archived) QuotesActive++;
    }
    if (note.category === "Task") {
      Tasks++;
      if (!note.archived) TasksActive++;
    }
    if (note.category === "Random Thought") {
      Thoughts++;
      if (!note.archived) ThoughtsActive++;
    }
  });
  const archieveData = [
    { category: "Idea", active: IdeasActive, total: Ideas },
    { category: "Quote", active: QuotesActive, total: Quotes },
    { category: "Task", active: TasksActive, total: Tasks },
    { category: "Random Thought", active: ThoughtsActive, total: Thoughts },
  ];
  const categories = useSelector((state) => state.note.categories);
  return (
    <table>
      <colgroup>
        <col className={style.categoryIcon} />
        <col className={style.category2} />
        <col className={style.active} />
        <col className={style.archived} />
      </colgroup>
      <thead>
        <tr>
          <th></th>
          <th>Note Category</th>
          <th>Active</th>
          <th>Archived</th>
        </tr>
      </thead>
      <tbody id="archieve-table"></tbody>
      {archieveData.map((note) => (
        <thead key={note.id}>
          <tr>
            <td className={`${style.categoryIcon} ${style.statsIcon}`}>
              <div
                className={style.backColor}
                dangerouslySetInnerHTML={{ __html: categories[note.category] }}
              ></div>
            </td>
            <td className={style.category2}>{note.category}</td>
            <td className={style.active}>{note.active}</td>
            <td className={style.archived}>{note.total - note.active}</td>
          </tr>
        </thead>
      ))}
    </table>
  );
};
export default ArchiveNotes;
