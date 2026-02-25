export { deleteItem, deleteCard };
import {
  getCard,
  getSpace,
  findItemIndex,
  getCards,
} from "./getterFunctions.js";

const deleteItem = (spaceID, cardID, itemID) => {
  const card = getCard(spaceID, cardID);

  // delete item
  const index = findItemIndex(itemID, card);
  if (index !== -1) {
    card.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

const deleteCard = (spaceID, cardID) => {
  const space = getSpace(spaceID);
  if (space.removeCard(cardID)) {
    console.log(space);
    return true;
  } else {
    console.log("Error deleting card");
    return false;
  }
};
