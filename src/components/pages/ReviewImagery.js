import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate
               </div>
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
