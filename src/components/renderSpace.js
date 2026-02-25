import "./renderSpace.css";
import { getCards, getSpace } from "./getterFunctions.js";
import { events } from "./events.js";
export { renderSpace, updateCard, updateSpace };

const renderItem = (itemObject) => {
  const titleItem = document.createElement("h3");
  titleItem.textContent = itemObject.title;

  const paraItem = document.createElement("p");
  paraItem.textContent = itemObject.description;

  const dateItem = document.createElement("span");
  dateItem.textContent = itemObject.dueDate;

  const priorityItem = document.createElement("span");
  priorityItem.classList.add("priority");
  priorityItem.textContent = itemObject.priority;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("item-remove");
  deleteBtn.textContent = "Remove";
  deleteBtn.dataset.itemId = itemObject.itemID;

  const divItem = document.createElement("div");
  divItem.classList.add("todo-item");
  divItem.append(titleItem, paraItem, dateItem, priorityItem, deleteBtn);

  return divItem;
};

const renderCard = (cardObject) => {
  const titleCard = document.createElement("h2");
  titleCard.textContent = cardObject.cardTitle;

  const cards = document.createElement("div");
  cards.classList.add("cards");
  cardObject.itemArray.forEach((item) => {
    cards.append(renderItem(item));
  });

  // Buttons

  // add to-do item button
  const addButton = document.createElement("button");
  addButton.classList.add("item-add");
  addButton.textContent = "Add Task";

  // delete card button
  const delCardBtn = document.createElement("button");
  delCardBtn.classList.add("card-del");
  delCardBtn.textContent = "Del Card";

  const buttons = document.createElement("div");
  buttons.classList.add("card-btn-container");
  buttons.append(addButton, delCardBtn);

  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.dataset.cardId = cardObject.cardID;
  divCard.append(titleCard, buttons, cards);

  // Listener moved to the scrollable container
  cards.addEventListener("wheel", (event) => {
    const isAtTop = cards.scrollTop === 0 && event.deltaY < 0;
    const isAtBottom =
      Math.ceil(cards.scrollTop + cards.clientHeight) >= cards.scrollHeight &&
      event.deltaY > 0;

    if (!isAtTop && !isAtBottom) {
      event.stopPropagation();
    }
  });

  return divCard;
};

const renderSpace = (spaceObject) => {
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-space");
  const titleSpace = document.createElement("h1");
  titleSpace.textContent = spaceObject.spaceTitle;

  const addCardButton = document.createElement("button");
  addCardButton.classList.add("card-add");
  addCardButton.textContent = "Add Card";

  titleDiv.append(titleSpace, addCardButton);

  const containerCards = document.createElement("div");
  containerCards.classList.add("cards-container");

  // scroll with mousewheel
  containerCards.addEventListener("wheel", (event) => {
    event.preventDefault();
    containerCards.scrollLeft += event.deltaY;
  });

  spaceObject.cardArray.forEach((card) => {
    containerCards.append(renderCard(card));
  });

  const divSpace = document.createElement("div");
  divSpace.classList.add("space");
  divSpace.dataset.spaceId = spaceObject.spaceID;
  divSpace.append(titleDiv, containerCards);

  return divSpace;
};

const updateCard = (spaceID, cardID) => {
  // update DOM
  const cardsContainer = document.querySelector(".cards-container");
  const divCard = cardsContainer.querySelector(`[data-card-id="${cardID}"]`);
  const updatedCard = getCards(spaceID, cardID);
  divCard.replaceWith(renderCard(updatedCard));
};

const updateSpace = (spaceID) => {
  // update space DOM
  const divSpace = document.querySelector(`[data-space-id="${spaceID}"]`);
  const updatedSpaceObj = getSpace(spaceID);
  divSpace.replaceWith(renderSpace(updatedSpaceObj));
  // refresh event listeners
  events();
};
