import React from "react";
import { useSelector } from "react-redux";
import { categories } from "../../helper/helper";
import { archiveLogo, deleteLogo } from "../../helper/logo";
import style from "./MyNotes.module.css";

const MyNotes = () =>{
    const data = useSelector((state)=>state.note)
    
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
            <th className="row-logo archive" id="archive-switch" title="archive"><span dangerouslySetInnerHTML={{__html: archiveLogo}} /></th>
            <th className="row-logo delete" title="delete"><span dangerouslySetInnerHTML={{__html: deleteLogo}} /></th>
          </tr>
        </thead>
        {data.map((el)=>(
        <tbody id="notes-table" key={el.id}>
            <tr>
              <td className={style.categoryIcon}><span dangerouslySetInnerHTML={{__html: categories[el.category]}} /></td>
              <td className={style.name}>{el.name}</td>
              <td className={style.created}>{el.created}</td>
              <td className={style.category1}>{el.category}</td>
              <td className={style.content}>{el.content}</td>
              <td className={style.dates}>{el.dates}</td>
            </tr>
        </tbody>
        ))}
      </table>

      <div id={style.notes}>
        <div id={style.messange}></div>
        <button id="create-button">Create Note</button>
      </div>
        </div>
    )
}

export default MyNotes;