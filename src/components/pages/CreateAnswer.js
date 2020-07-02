import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <h4 className="d-flex justify-content-center">Add an answer</h4>
         <div className="mb-5 mt-2">
            <div className="card bg-secondary">
               <div className="card-body">
                  <textarea
                     rows="11"
                     className="d-sm-none"
                     Value="This is a description."
                  ></textarea>
                  <textarea
                     rows="6"
                     className="d-none d-sm-block"
                     autoFocus={true}
                     id="text-area"
                     Value="This is a description."
                  ></textarea>
               </div>
            </div>

            <div id="character-count" className="float-right my-3">
               <span id="current">0</span>
               <span id="maximum">/ 240</span>
            </div>

            <div className="clearfix"></div>

            <Link
               to="/create-imagery"
               href="create-cue.html"
               className="btn btn-outline-primary btn-lg"
               style={{ float: "right" }}
            >
               Next
            </Link>
         </div>
      </AppTemplate>
   );
}
