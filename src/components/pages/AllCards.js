import React from "react";
import editIcon from "../../icons/edit.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function AllCards() {
   return (
      <AppTemplate>
         <div></div>

         <form className="row mb-0">
            <div className="form-group col-8">
               <input
                  className="form-control"
                  id="search"
                  placeholder="Search for a word"
               />
            </div>
            <div className="col-4">
               <a
                  href="create-answer.html"
                  className="btn btn-primary btn-block btn-sm"
               >
                  Search
               </a>
            </div>
         </form>
         <form className="row mb-0">
            <label htmlFor="cards" className="col-4">
               Sort cards by
            </label>

            <div className="form-group col-8">
               <div className="dropdown">
                  <select
                     className="btn dropdown-toggle btn-block float-right"
                     style={{ height: "34px" }}
                  >
                     <option>Most recent</option>
                  </select>
               </div>
            </div>
         </form>

         <div className="row mb-5">
            <div className="col-9">
               <div className="card bg-primary">
                  <div className="card-body">
                     But I must explain to you how all this mistaken idea of
                     denouncing pleasure and praising pain was born and I will
                     give you a complete account of the system, and expound the
                     actual teachings of the great explorer of the truth, the
                     master-builder of human happiness. No one rejects,
                     dislikes, or avoids pleasure itself, because it is
                     pleasure, but because those who do not know how to pursue
                     pleasure rationally
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">
                     But I must explain to you how all this mistaken idea of
                     denouncing pleasure and praising pain was born and I will
                     give you a complete account of the system, and expound the
                     actual teachings of the great explorer of the truth, the
                     master-builder of human happiness. No one rejects,
                     dislikes, or avoids
                  </div>
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

         <div className="row mb-5">
            <div className="col-9">
               <div className="card bg-primary">
                  <div className="card-body allcards">
                     But I must explain to you how all this mistaken idea of
                     denouncing pleasure and praising pain was born and I will
                     give you a complete account of the system, and expound the
                     actual teachings of the great explorer of the truth, the
                     master-builder of human happiness. No one rejects,
                     dislikes, or avoids
                  </div>
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
      </AppTemplate>
   );
}
