export { events };
import { addItem, addCard } from "./addFunctions.js";
import { deleteItem } from "./deleteFunctions.js";
import { updateCard, updateSpace } from "./renderSpace.js";

const events = () => {
  const space = document.querySelector(".space");

  deleteEvents(space);
  addCardEvent(space);
  addToDoEvent(space);
};

const addCardEvent = (space) => {
  space.addEventListener("click", async (event) => {
    if (event.target.matches(".card-add")) {
      // get space id
      const space = event.target.closest(".space");
      const spaceId = space.dataset.spaceId;

      if (spaceId) {
        // add card to db
        await addCard(spaceId);
        // update space dom to show new card
        updateSpace(spaceId);
      }
    }
  });
};

const addToDoEvent = (space) => {
  // Add to do item
  space.addEventListener("click", async (event) => {
    if (event.target.matches(".item-add")) {
      // get space id
      const space = event.target.closest(".space");
      const spaceId = space.dataset.spaceId;

      // get cards id
      const cards = event.target.closest(".card");
      const cardId = cards.dataset.cardId;

      if (spaceId && cardId) {
        await addItem(spaceId, cardId);
        updateCard(spaceId, cardId);
      }
    }
  });
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
