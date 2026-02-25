export { setStatus };
import { getCards } from "./getterFunctions.js";

const setStatus = (spaceID, cardID, itemID) => {
  const card = getCards(spaceID, cardID);
  const item = card.getItem(itemID);
  item.changeStatus();
};
