import { getCards, getSpace } from "./getterFunctions.js";
import { SpaceCardItem, SpaceCard } from "./spacesClasses.js";

export { addItem, addCard };

const addCard = (spaceID) => {
  // Return a promise so the caller can "await" the user's action
  return new Promise((resolve) => {
    const space = getSpace(spaceID);
    const addModal = document.querySelector("#add-card-dialog");
    const addCardForm = addModal.firstElementChild;

    addModal.showModal();

    // Use { once: true } so the listener cleans itself up after one submit
    addCardForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target));
        const obj = new SpaceCard(data.title);
        space.addCard(obj);

        addModal.close();
        event.target.reset(); // Clear form for next time

        resolve(true); // <--- This tells the "await" that we are done!
      },
      { once: true },
    );
  });
};

const addItem = (spaceID, cardID) => {
  // Return a promise so the caller can "await" the user's action
  return new Promise((resolve) => {
    const cards = getCards(spaceID, cardID);
    const addModal = document.querySelector("#add-item-dialog");
    const addItemForm = addModal.firstElementChild;

    addModal.showModal();

    // Use { once: true } so the listener cleans itself up after one submit
    addItemForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target));
        const obj = new SpaceCardItem(
          data.title,
          data.description,
          data.dueDate,
          data.priority,
        );

        cards.addItem(obj);

        addModal.close();
        event.target.reset(); // Clear form for next time

        resolve(true); // <--- This tells the "await" that we are done!
      },
      { once: true },
    );
  });
};
