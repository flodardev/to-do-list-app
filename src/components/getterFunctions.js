export { getCards, getSpace };
import { userSpaces } from "./data.js";

const getCards = (spaceID, cardID) => {
  const space = userSpaces.getSpace(spaceID);

  const card = space.getCard(cardID);

  return card;
};

const getSpace = (spaceID) => {
  const space = userSpaces.getSpace(spaceID);

  return space;
};
