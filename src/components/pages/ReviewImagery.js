import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../moc-data/memory-cards";

const memoryCard = memoryCards[0];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>
         </div>
         <div>
            <Link to="/review-answer" className="btn btn-link">
               Previous card
            </Link>
            <div className="float-right">
               <Link
                  to="/review-answer"
                  className="btn btn-outline-primary ml-4 font-weight-bold"
               >
                  Show answer
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
