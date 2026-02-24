export { deleteItem };
import { getCard, findItemIndex } from "./getterFunctions.js";

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
