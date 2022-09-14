import React from "react";

const ArchiveNotes = ()=>{
return (
    <div>
       <table>
        <colgroup>
          <col className="categoryIcon" />
          <col className="category2" />
          <col className="active" />
          <col className="archived" />
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
      </table>
    </div>
)
}
export default ArchiveNotes;
