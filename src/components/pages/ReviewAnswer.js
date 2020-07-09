import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions";

// const memoryCard = memoryCards[0];

class ReviewAnswer extends React.Component {
   goToNextCard() {
      if (this.props.queue.index === this.props.queue.cards.length - 1) {
         this.props.dispatch({ type: actions.RESET_QUEUE });
         this.props.history.push("/review-empty");
      } else {
         this.props.dispatch({ type: actions.UPDATE_INDEX_OF_CURRENT_CARD });
         this.props.history.push("/review-imagery");
      }
   }

   render() {
      const memoryCard = this.props.queue.cards[this.props.queue.index];

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
      queue: state.queue,
   };
}
export default connect(mapStateToProps)(ReviewAnswer);
