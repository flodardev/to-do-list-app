export { events };
import { addItem, addCard } from "./addFunctions.js";
import { setStatus, setPriority } from "./setterFunctions.js";
import { deleteItem, deleteCard } from "./deleteFunctions.js";
import { updateCard, updateSpace } from "./renderSpace.js";

const events = () => {
  const space = document.querySelector(".space");

  deleteEvents(space);
  addCardEvent(space);
  addItemEvent(space);
  markItemCompleteEvent(space);
  changePriorityEvent(space);
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

const addItemEvent = (space) => {
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
      const itemId = event.target.closest(".item-buttons").dataset.itemId;

      if ((spaceId, cardId, itemId)) {
        if (deleteItem(spaceId, cardId, itemId)) {
          // update DOM
          updateCard(spaceId, cardId);
        }
      }
    }
  });

  // Delete Card
  space.addEventListener("click", (event) => {
    if (event.target.matches(".card-del")) {
      // get space id
      const space = event.target.closest(".space");
      const spaceId = space.dataset.spaceId;

      // get cards id
      const cards = event.target.closest(".card");
      const cardId = cards.dataset.cardId;
      if ((spaceId, cardId)) {
        if (deleteCard(spaceId, cardId)) {
          updateSpace(spaceId);
        }
      }
    }
  });

  // Delete Space
};

const markItemCompleteEvent = (space) => {
  space.addEventListener("click", (event) => {
    if (event.target.matches(".mark-complete-btn")) {
      // get space id
      const space = event.target.closest(".space");
      const spaceId = space.dataset.spaceId;

      // get cards id
      const cards = event.target.closest(".card");
      const cardId = cards.dataset.cardId;

      // get item id
      const itemId = event.target.closest(".item-buttons").dataset.itemId;

      if ((spaceId, cardId, itemId)) {
        // change item status
        setStatus(spaceId, cardId, itemId);
        updateCard(spaceId, cardId);
      }
    }
  });
};

const changePriorityEvent = (space) => {
  space.addEventListener("change", (event) => {
    if (event.target.matches(".change-prio-select")) {
      console.log("triggered");
      // get space id
      const space = event.target.closest(".space");
      const spaceId = space.dataset.spaceId;

      // get cards id
      const cards = event.target.closest(".card");
      const cardId = cards.dataset.cardId;

      // get item id
      const itemId = event.target.closest(".item-buttons").dataset.itemId;

      // get value
      const value = event.target.value;

      if ((spaceId, cardId, itemId, value)) {
        // change item priority
        setPriority(spaceId, cardId, itemId, value);
        updateCard(spaceId, cardId);
      }
    }
  });
};
