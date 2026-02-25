export { deleteItem, deleteCard };
import { getSpace, getCards } from "./getterFunctions.js";

const deleteItem = (spaceID, cardID, itemID) => {
  const cards = getCards(spaceID, cardID);

  if (cards.removeItem(itemID)) {
    return true;
  } else {
    console.log("Error deleting item");
    return false;
  }
};

const deleteCard = (spaceID, cardID) => {
  const space = getSpace(spaceID);

  if (space.removeCard(cardID)) {
    return true;
  } else {
    console.log("Error deleting card");
    return false;
  }
};
