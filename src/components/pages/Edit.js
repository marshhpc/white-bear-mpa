import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icons/save.svg";
import memoryCards from "../../moc-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, Max_Card_Chars } from "../../utils/helpers";

const memoryCard = memoryCards[0];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("in the edit component");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > Max_Card_Chars ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length > Max_Card_Chars ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   render() {
      return (
         <AppTemplate>
            <div>
               <h4 className="my-4 text-center text-muted">Edit Cards</h4>
               <div className="mb-2">
                  <div className="card bg-primary">
                     <div className="card-body">
                        <textarea
                           rows="2"
                           defaultValue={memoryCard.answer}
                           onChange={(e) => this.setImageryText(e)}
                        ></textarea>
                     </div>
                  </div>

                  <div className="card bg-secondary">
                     <div className="card-body">
                        <textarea
                           rows="2"
                           defaultValue={memoryCard.answer}
                           onChange={(e) => this.setAnswerText(e)}
                        ></textarea>
                     </div>
                  </div>
               </div>
               <p className="float-right mb-5 mt-2 text-muted">
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.imageryText,
                           Max_Card_Chars
                        ),
                     })}
                  >
                     Top:
                     {this.state.imageryText.length}/{Max_Card_Chars}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.answerText,
                           Max_Card_Chars
                        ),
                     })}
                  >
                     Bottom:
                     {this.state.answerText.length}/{Max_Card_Chars}
                  </span>
               </p>
               <div className="clearfix"></div>
               <Link
                  to="/all-cards"
                  type="button"
                  className="btn btn-link"
                  id="create-error"
               >
                  Discard changes
               </Link>

               <Link
                  to="/all-cards"
                  className={classnames("btn btn-primary float-right btn-lg", {
                     disabled: this.checkHasInvalidCharCount(),
                  })}
                  id="save-imagery"
               >
                  <img
                     src={saveIcon}
                     width="20px"
                     style={{ marginBottom: "3px" }}
                     className="mr-2"
                     alt=""
                  />
                  Save
               </Link>
               <h4 className="my-8 text-center text-muted">Card Properties</h4>
               <div className="row">
                  <div className="col-4 d-flex">
                     <h6 className="text-muted">Created on:</h6>
                  </div>
                  <div className="col-4 ml-6 d-flex">
                     <h6 className="">
                        {toDisplayDate(memoryCard.createdAt, "MMM. d, y")}
                     </h6>
                  </div>
               </div>
               <div className="row">
                  <div className="col-4 d-flex">
                     <h6 className="text-muted">Last attempt:</h6>
                  </div>
                  <div className="col-4 d-flex ml-6">
                     <h6 className="">
                        {toDisplayDate(memoryCard.lastAttemtAt, "MMM. d, y")}
                     </h6>
                  </div>
               </div>
               <div className="row">
                  <div className="col-4 d-flex">
                     <h6 className="text-muted">Next attempt:</h6>
                  </div>
                  <div className="col-4 ml-6 d-flex">
                     <h6 className="">
                        {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, y")}
                     </h6>
                  </div>
               </div>
               <div className="row">
                  <div className="col-4 d-flex">
                     <h6 className="text-muted">Consecutives:</h6>
                  </div>
                  <div className="col-4 ml-6 d-flex">
                     <h6 className="">{memoryCard.totalSuccessfulAttempts}</h6>
                  </div>
               </div>
               <div className="row">
                  <div className="col-6 mt-2">
                     <div className="custom-control custom-checkbox">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="show-delete"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="show-delete"
                        >
                           Show delete button
                        </label>
                     </div>
                  </div>
               </div>

               <Link
                  to="/all-cards"
                  type="button"
                  className="d-none btn btn-lg btn-outline-danger my-4"
                  id="delete-button"
               >
                  Delete this card
               </Link>
            </div>
         </AppTemplate>
      );
   }
}
