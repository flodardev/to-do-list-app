export { setStatus, setPriority };
import { getUser } from "./getterFunctions.js";
import { setLocalStorage } from "./webStorageAPI.js";

const setStatus = (spaceID, cardID, itemID) => {
  const userSpaces = getUser();
  const space = userSpaces.getSpace(spaceID);
  const cards = space.getCard(cardID);
  const item = cards.getItem(itemID);
  item.changeStatus();

  // update localStorage
  setLocalStorage(userSpaces);
};

const setPriority = (spaceID, cardID, itemID, value) => {
  const userSpaces = getUser();
  const space = userSpaces.getSpace(spaceID);
  const cards = space.getCard(cardID);
  const item = cards.getItem(itemID);
  item.changePriority(value);
  cards.sortItems(true);

  // update localStorage
  setLocalStorage(userSpaces);
};
