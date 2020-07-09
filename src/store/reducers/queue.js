import actions from "../actions";

export default function queue(queue = {}, action) {
   let newQueue = { ...queue };
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         newQueue.cards = action.payload;
         return newQueue; // new state
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         newQueue.index += 1;
         return newQueue;
      case actions.RESET_QUEUE:
         newQueue.cards = [];
         newQueue.index = 0;
         return newQueue;
      default:
         return queue;
   }
}
