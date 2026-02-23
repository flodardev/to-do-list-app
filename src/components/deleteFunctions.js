export { deleteItem };
import { userSpaces } from "./data.js";

const deleteItem = (spaceID, cardID, itemID) => {
  const card = getCard(spaceID, cardID);

  // delete item
  const index = findItemIndex(itemID, card);
  if (index !== -1) {
    card.splice(index, 1);
  }
  console.log(card);
};

const getCard = (spaceID, cardID) => {
  const array = userSpaces.spacesArray;
  const space = array[findSpaceIndex(spaceID, array)];
  const cards = space.cardArray;
  const card = cards[findCardIndex(cardID, cards)].itemArray;

  return card;
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
