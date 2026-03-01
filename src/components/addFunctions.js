import { getCards, getSpace, getUser } from "./getterFunctions.js";
import { Space, SpaceCardItem, SpaceCard } from "./spacesClasses.js";
import { setLocalStorage } from "./webStorageAPI.js";

export { addItem, addCard, addSpace };

const addCard = (spaceID) => {
  // Return a promise so the caller can "await" the user's action
  return new Promise((resolve) => {
    const userSpaces = getUser();
    const space = userSpaces.getSpace(spaceID);
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

        // update localStorage
        setLocalStorage(userSpaces);

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
    const userSpaces = getUser();
    const space = userSpaces.getSpace(spaceID);
    const cards = space.getCard(cardID);
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

        console.log(obj);

        cards.addItem(obj);

        // update localStorage
        setLocalStorage(userSpaces);

        addModal.close();
        event.target.reset(); // Clear form for next time

        resolve(true); // <--- This tells the "await" that we are done!
      },
      { once: true },
    );
  });
};

const addSpace = () => {
  return new Promise((resolve) => {
    const addSpaceModal = document.querySelector("#add-space-dialog");
    const addSpaceForm = addSpaceModal.firstElementChild;
    addSpaceModal.showModal();

    addSpaceForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        const data = Object.fromEntries(new FormData(event.target));
        const user = getUser();
        const newSpace = new Space(data.title);
        user.addSpace(newSpace);

        // add to localStorage
        setLocalStorage(user);

        console.log(user);

        addSpaceModal.close();
        event.target.reset(); // Clear form for next time

        resolve(true); // <--- This tells the "await" that we are done!
      },
      { once: true },
    );
  });
};
