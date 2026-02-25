export { setStatus, setPriority };
import { getCards } from "./getterFunctions.js";

const setStatus = (spaceID, cardID, itemID) => {
  const card = getCards(spaceID, cardID);
  const item = card.getItem(itemID);
  item.changeStatus();
};

const setPriority = (spaceID, cardID, itemID, value) => {
  const card = getCards(spaceID, cardID);
  const item = card.getItem(itemID);
  console.log(item);
  item.changePriority(value);
  card.sortItems(true);
};
