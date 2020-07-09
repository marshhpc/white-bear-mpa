import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <h4 className="d-flex justify-content-center">Out of cards</h4>

         <div>
            <Link to="review-answer" className="btn btn-link">
               Previous card
            </Link>
            <div className="float-right">
               <Link
                  to="review-imagery"
                  className="btn btn-outline-primary ml-4 font-weight-bold"
               >
                  Get more cards
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
