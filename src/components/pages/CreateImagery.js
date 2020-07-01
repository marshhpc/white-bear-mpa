import React from "react";

export default function CreateImagery() {
   return (
      <div class="container">
         <div class="row">
            <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img
                  src="icons/logo-app.svg"
                  width="32px;"
                  alt="White Bear logo"
               />

               <h3 class="d-inline text-brand">White Bear</h3>

               <a
                  href="index.html"
                  type="button"
                  class="btn btn-link float-right"
               >
                  Log Out
               </a>

               <div
                  class="btn-group d-flex mb-3"
                  role="group"
                  aria-label="Basic example"
               >
                  <a
                     href="create-answer.html"
                     type="button"
                     class="btn btn-secondary tab-active"
                  >
                     Create New
                  </a>
                  <a
                     href="review-answer.html"
                     type="button"
                     class="btn btn-secondary tab-separator"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     type="button"
                     class="btn btn-secondary tab-separator"
                  >
                     All Cards
                  </a>
               </div>
               <div>
                  <h3 class="d-flex justify-content-center mb-3">
                     Add Memorable Imagery
                  </h3>
               </div>
               <div class="mb-3">
                  <div class="card bg-primary">
                     <div class="card-body">
                        <textarea
                           id="imagery-textarea"
                           rows="11"
                           cols="40"
                        ></textarea>
                     </div>
                  </div>
                  <div class="card bg-secondary">
                     <div class="card-body" id="imagery-answer">
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
                  <div class="float-right mb-2">
                     <p id="imagery-count"> 0/240</p>
                  </div>
                  <div class="clearfix"></div>
                  <a id="back-to" class="btn btn-link">
                     Back to answer
                  </a>
                  <div class="float-right">
                     <button
                        class="btn btn-lg btn-secondary text-white"
                        id="save-imagery"
                        type="button"
                     >
                        <img
                           src="/icons/save.svg"
                           width="25px"
                           style={{ marginBottom: "2px" }}
                           class="mr-2 text-center"
                           alt=""
                        />
                        Save
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
