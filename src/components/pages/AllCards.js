import React from "react";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MermoryCard";
import memoryCards from "../../moc-data/memory-cards";
const memoryCard = memoryCards[0];

export default function AllCards() {
   return (
      <AppTemplate>
         <div>
            <form className="row mb-0">
               <div className="form-group col-8">
                  <input
                     className="form-control"
                     id="search"
                     placeholder="Search for a word"
                  />
               </div>
               <div className="col-4">
                  <a
                     href="create-answer.html"
                     className="btn btn-primary btn-block btn-sm"
                  >
                     Search
                  </a>
               </div>
            </form>
            <div className="row my-4 no-gutters">
               <div className="col-4">
                  <p className="text-muted mt-1">Sort cards by</p>
               </div>
               <div className="col-8">
                  <select className="form-control form-control-sm">
                     <option>Most recent</option>
                     <option>Oldest</option>
                  </select>
               </div>
            </div>
         </div>
         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}
