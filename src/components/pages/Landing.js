import React from "react";
import landingLogo from "../../img/logo-landing.png";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <div className="background-image">
         <div className="container-fluid">
            <div className="row mb-8 pt-9 ml-9 justify-content-left">
               <div className="d-flex mt-5">
                  <img
                     className="img-fluid"
                     src={landingLogo}
                     alt="white bear constellation"
                  />
                  <h1 className="logo-text d-inline ml-5 white-text">
                     White Bear
                  </h1>
               </div>
            </div>

            {/* first card */}
            <div className="row">
               <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-2 col-lg-4 offset-xl-2 col-xl-4 mb-6">
                  <div className="card">
                     <div className="card-body">
                        <div className="landing-card">
                           <h2 className="card-title">Nice to meet you</h2>
                           <p className="card-text mb-5">
                              Sign up for White Bear.Free Forever.
                           </p>
                           {/*start of button fuctionality*/}
                           <a
                              className="btn btn-success btn-landing btn-block text-white hide-me"
                              data-toggle="collapse"
                              id="sign-up"
                              role="button"
                              aria-expanded="false"
                              aria-controls="signup-collapse"
                              href="/"
                           >
                              Sign up
                           </a>
                           <div id="signup-collapse">
                              <p className="signup-text mb-4 text-success">
                                 Lets get you signed up.
                              </p>
                              <div className="form-group">
                                 <label className="input-text" htmlFor="email">
                                    Email address
                                 </label>
                                 <input
                                    type="email"
                                    className="form-control"
                                    id="emailAddress"
                                    aria-describedby="email-help"
                                    required
                                 />
                                 <label
                                    className="text-danger"
                                    id="warningEmail"
                                 ></label>
                              </div>
                              <div className="form-group">
                                 <label
                                    className="input-text"
                                    htmlFor="password"
                                 >
                                    Create a password
                                 </label>
                                 <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                 />
                                 <label
                                    className="text-danger error-messages"
                                    id="warningPassword"
                                 >
                                    {" "}
                                 </label>
                              </div>
                              <Link
                                 to="/create-answer"
                                 id="Lets-go"
                                 className="btn btn-success btn-landing btn-block mt-5"
                              >
                                 Lets go!
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-1 col-lg-4 offset-xl-1 col-xl-4">
                  <div className="card">
                     <div className="card-body">
                        <div className="landing-card">
                           <h2 className="card-title">Welcome back</h2>
                           <p className="card-text mb-4">
                              Log in with your email address and password
                           </p>
                           <div className="form-group">
                              <label className="input-text" htmlFor="email">
                                 Email address
                              </label>
                              <input
                                 type="email"
                                 className="form-control"
                                 id="email"
                              />
                           </div>
                           <div className="form-group">
                              <label className="input-text" htmlFor="password">
                                 Password
                              </label>
                              <input
                                 type="password"
                                 className="form-control"
                                 id="password"
                              />
                           </div>
                           <Link
                              to="/create-answer"
                              href="create-answer.html"
                              className="btn btn-success btn-lg btn-landing float-right"
                           >
                              Log in
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
