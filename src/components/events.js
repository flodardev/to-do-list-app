export { events };
import { deleteItem, getSpace } from "./deleteFunctions.js";
import { renderSpace, updateCard } from "./renderSpace.js";
import { home } from "../pages/home.js";

const events = () => {
  // do something

  // Space ID
  const space = document.querySelector(".space");

  deleteEvents(space);
};

const deleteEvents = (space) => {
  // Delete Item
  space.addEventListener("click", (event) => {
    if (event.target.matches(".item-remove")) {
      // get space id
      const space = event.target.closest(".space");
      const spaceId = space.dataset.spaceId;

      // get cards id
      const cards = event.target.closest(".card");
      const cardId = cards.dataset.cardId;

      // get item id
      const itemId = event.target.dataset.itemId;

      if ((spaceId, cardId, itemId)) {
        if (deleteItem(spaceId, cardId, itemId)) {
          // update DOM
          updateCard(spaceId, cardId);
        }
      }
    }
  });

  // Delete Card

  // Delete Space
};
