export { deleteItem, deleteCard };
import { getUser } from "./getterFunctions.js";
import { setLocalStorage } from "./webStorageAPI.js";

const deleteItem = (spaceID, cardID, itemID) => {
  const userSpaces = getUser();
  const space = userSpaces.getSpace(spaceID);
  const cards = space.getCard(cardID);

  if (cards.removeItem(itemID)) {
    // update localStorage
    setLocalStorage(userSpaces);
    return true;
  } else {
    console.log("Error deleting item");
    return false;
  }
};

const deleteCard = (spaceID, cardID) => {
  const userSpaces = getUser();
  const space = userSpaces.getSpace(spaceID);

  if (space.removeCard(cardID)) {
    // update localStorage
    setLocalStorage(userSpaces);
    return true;
  } else {
    console.log("Error deleting card");
    return false;
  }
};
