import React from "react";
import { useSelector } from "react-redux";

const MyNotes = () =>{
    const data = useSelector((state)=>state.note)
    
    return (
        <div>
<header>
      <h1 className="header">My Notes</h1>
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
            <th className="row-logo">&nbsp;</th>
            <th className="row-logo archive" id="archive-switch" title="archive"></th>
            <th className="row-logo delete" title="delete"></th>
          </tr>
        </thead>
        <tbody id="notes-table"></tbody>
      </table>

      <div id="notes">
        <div id="messange"></div>
        <button id="create-button">Create Note</button>
      </div>
        </div>
    )
}

export default MyNotes;