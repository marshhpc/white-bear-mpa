import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
   return (
      <div className="col-xl-5 offset-xl-2 col-sm-6 col-12 mb-6">
         <div className="card">
            <div className="card-body text-dark text-sans">
               <h2 className="card-title text-serif">Welcome back</h2>
               <p className="mb-4">
                  Log in with your email address and password
               </p>

               <label className="input-text" htmlFor="email">
                  Email address
               </label>
               <input type="email" className="form-control" id="email" />
               <p className="text-danger">Please enter an email address</p>

               <div className="mb-5"></div>
               <label className="input-text" htmlFor="password">
                  Password
               </label>
               <input
                  type="password"
                  className="form-control mb-2"
                  id="password"
               />
               <p className="text-danger">Please enter a password</p>

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
   );
}
