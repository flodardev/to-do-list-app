export { deleteItem, getCard, getCards, getSpace };
import { userSpaces } from "./data.js";

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

const getCards = (spaceID, cardID) => {
  const space = getSpace(spaceID);
  const cards = space.cardArray;
  const card = cards[findCardIndex(cardID, cards)];

  return card;
};

const getCard = (spaceID, cardID) => {
  const card = getCards(spaceID, cardID).itemArray;

  return card;
};

const getSpace = (spaceID) => {
  const array = userSpaces.spacesArray;
  const space = array[findSpaceIndex(spaceID, array)];

  return space;
};

const findSpaceIndex = (spaceID, spaceArray) => {
  const index = spaceArray.findIndex((space) => space.spaceID === spaceID);
  return index;
};

const findCardIndex = (cardID, cardArray) => {
  const index = cardArray.findIndex((card) => card.cardID === cardID);
  return index;
};

const findItemIndex = (itemID, itemArray) => {
  const index = itemArray.findIndex((item) => item.itemID === itemID);
  return index;
};
