import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import appLogo from "../../icons/logo-app.svg";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img src={appLogo} width="32px;" alt="White Bear logo" />

               <h3 className="d-inline text-brand ml-1">White Bear</h3>

               <a
                  href="index.html"
                  type="button"
                  className="btn btn-link float-right"
               >
                  Log Out
               </a>
               <div className="clearfix"></div>
               <div
                  className="btn-group d-flex mb-5"
                  role="group"
                  aria-label="Basic example"
               >
                  <a
                     href="create-answer.html"
                     type="button"
                     className="btn btn-secondary"
                  >
                     Create New
                  </a>
                  <a
                     href="review-cue.html"
                     type="button"
                     className="btn btn-secondary tab-separator tab-active"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     type="button"
                     className="btn btn-secondary tab-separator"
                  >
                     All Cards
                  </a>
               </div>

               <div className="mb-5">
                  <div className="card bg-primary">
                     <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate
                     </div>
                  </div>
                  <div className="card bg-secondary">
                     <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate
                     </div>
                  </div>
               </div>
               <div>
                  <a href="all-cards-edit.html" className="btn btn-link">
                     Edit
                  </a>
                  <div className="float-right">
                     <button className="btn btn-outline-primary mr-4">
                        Needs work
                     </button>
                     <button className="btn btn-primary">
                        <img
                           src={thumbsUpIcon}
                           width="20px"
                           style={{ marginBottom: "5px", marginRight: "8px" }}
                           className="mr-2"
                           alt="thumbs-up-icon"
                        />
                        Got it
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
