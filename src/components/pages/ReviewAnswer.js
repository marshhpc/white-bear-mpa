import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

// const memoryCard = memoryCards[0];

class ReviewAnswer extends React.Component {
   goToNextCard() {
      // TODO: if index of current card = length of the array of all cards // if weve gone to the end of the array
      // than show out of cards component.
      this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
      this.props.history.push("/review-imagery");
   }

   render() {
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];

      return (
         <AppTemplate>
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     {memoryCard && memoryCard.imagery}
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">
                     {memoryCard && memoryCard.answer}
                  </div>
               </div>
            </div>
            <div>
               <Link to="/edit" className="btn btn-link">
                  Edit
               </Link>
               <div className="float-right">
                  <button
                     to="review-empty"
                     className="btn btn-outline-primary mr-4"
                     onClick={() => {
                        this.goToNextCard();
                     }}
                  >
                     Needs work
                  </button>
                  <button
                     className="btn btn-primary"
                     onClick={() => {
                        this.goToNextCard();
                     }}
                  >
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
         </AppTemplate>
      );
   }
}

function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}
export default connect(mapStateToProps)(ReviewAnswer);
