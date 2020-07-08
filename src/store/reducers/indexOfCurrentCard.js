import actions from "../actions";

export default function indexOfCurrentCard(state = 0, action) {
   //action.payload, action.type
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         return state + 1;
      default:
         return state;
   }
}

/* 

currentUser: {

}

queue:{
    cards: [],
    index: 0 
}





*/
