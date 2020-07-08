import React from "react";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard(props) {
   return (
      <div>
         <div className="row mb-5">
            <div className="col-9">
               <div className="card bg-primary">
                  <div className="card-body">{props.imagery}</div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">{props.answer}</div>
               </div>
            </div>
            <div className="col-3">
               <Link to="/edit" className="btn btn-link">
                  <img
                     src={editIcon}
                     width="20px"
                     style={{ marginBottom: "5px", marginRight: "8px" }}
                     alt=""
                  />
                  Edit
               </Link>
            </div>
         </div>
      </div>
   );
}
