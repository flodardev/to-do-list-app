export { events };
import { deleteItem } from "./deleteFunctions.js";
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

      // delete item with item id
      const itemId = event.target.dataset.itemId;
      deleteItem(spaceId, cardId, itemId);
    }
  });

  // Delete Card

  // Delete Space
};
