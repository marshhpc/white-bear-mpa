import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

// const memoryCard = memoryCards[0];

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/898e139d-f346-4c56-84df-52917fd4d106")
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });

      /*

         queuedCards: [],
         indexOfCurrentCard: 0,
         currentUser: {},





         */
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
}
function mapStateToProps(state) {
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   };
}
export default connect(mapStateToProps)(ReviewImagery); // curry component, pass as perameter as function
