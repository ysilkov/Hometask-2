import React, { FC } from "react";
import { useSelector } from "react-redux";
import { categoriesType } from "../../helper/helper";
import { RootState } from "../../store/store";
import style from "./ArchivedNotes.module.css";

const ArchivedNotes: FC = () => {
  const data = useSelector((state: RootState) => state.note.notes);
  let Ideas: number,
    Quotes: number,
    Tasks: number,
    Thoughts: number,
    IdeasActive: number,
    QuotesActive: number,
    TasksActive: number,
    ThoughtsActive: number;
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
  const archivedData = [
    { category: "Idea", active: IdeasActive, total: Ideas },
    { category: "Quote", active: QuotesActive, total: Quotes },
    { category: "Task", active: TasksActive, total: Tasks },
    { category: "Random Thought", active: ThoughtsActive, total: Thoughts },
  ];
  const categories = useSelector((state: RootState) => state.note.categories);
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
      {archivedData.map((note) => (
        <thead key={note.category}>
          <tr>
            <td className={`${style.categoryIcon} ${style.statsIcon}`}>
              <div
                className={style.backColor}
                dangerouslySetInnerHTML={{
                  __html: categories[note.category as keyof categoriesType],
                }}
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
export default ArchivedNotes;
