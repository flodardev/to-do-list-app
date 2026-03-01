export { getCards, getSpace, getUser };
import { getLocalStorage } from "./webStorageAPI.js";

const getCards = (spaceID, cardID) => {
  // from localStorage
  const userSpaces = getLocalStorage();

  const space = userSpaces.getSpace(spaceID);

  const card = space.getCard(cardID);

  return card;
};

const getSpace = (spaceID) => {
  // from localStorage
  const userSpaces = getLocalStorage();

  const space = userSpaces.getSpace(spaceID);

  return space;
};

const getUser = () => {
  const userSpaces = getLocalStorage();

  return userSpaces;
};
