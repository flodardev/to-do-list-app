import "./renderSpace.css";
import { getCards, getSpace } from "./getterFunctions.js";
import { events } from "./events.js";
export { renderSpace, updateCard, updateSpace };

const renderItem = (itemObject) => {
  const divItem = document.createElement("div");
  divItem.classList.add("todo-item");
  const titleDiv = document.createElement("div");
  const titleItem = document.createElement("h3");
  titleItem.textContent = itemObject.title;

  const statusDiv = document.createElement("div");

  const statusItem = document.createElement("span");
  if (itemObject.status) {
    statusItem.textContent = "Complete";
  } else {
    statusItem.textContent = "Incomplete";
  }

  statusDiv.append(statusItem);

  titleDiv.append(titleItem, statusItem);
  titleDiv.classList.add("item-title-div");

  const paraItem = document.createElement("p");
  paraItem.textContent = itemObject.description;

  const datePrioDiv = document.createElement("div");

  const dateItem = document.createElement("span");
  dateItem.textContent = itemObject.dueDate;

  const priorityItem = document.createElement("span");
  priorityItem.classList.add("priority");

  datePrioDiv.classList.add("item-date-prio-div");

  if (itemObject.priority === 1) {
    priorityItem.textContent = "Priority Low";
    divItem.style.backgroundColor = "#A1E3F9";
  } else if (itemObject.priority === 2) {
    priorityItem.textContent = "Priority Medium";
    divItem.style.backgroundColor = "#578FCA";
  } else if (itemObject.priority === 3) {
    divItem.style.backgroundColor = "#3674B5";

    priorityItem.textContent = "Priority High";
  }

  // buttons
  const buttons = document.createElement("div");
  buttons.classList.add("item-buttons");
  buttons.dataset.itemId = itemObject.itemID;

  const changePrio = document.createElement("select");
  changePrio.name = "priority";
  changePrio.classList.add("change-prio-select");

  [0, 1, 2, 3].forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    switch (item) {
      case 0:
        option.textContent = "Priority";
        break;

      case 1:
        if (itemObject.priority === 1) {
          option.selected = true;
        }
        option.textContent = "Priority Low";
        break;

      case 2:
        if (itemObject.priority === 2) {
          option.selected = true;
        }
        option.textContent = "Priority Medium";
        break;

      case 3:
        if (itemObject.priority === 3) {
          option.selected = true;
        }
        option.textContent = "Priority High";
        break;
    }
    changePrio.append(option);
  });

  const markCompleteBtn = document.createElement("button");
  markCompleteBtn.classList.add("mark-complete-btn");
  if (itemObject.status) {
    markCompleteBtn.textContent = "Mark Incomplete";
  } else {
    markCompleteBtn.textContent = "Mark Complete";
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("item-remove");
  deleteBtn.textContent = "🗑️ Task";

  const buttondiv = document.createElement("div");
  buttondiv.append(markCompleteBtn, deleteBtn);

  buttons.append(changePrio, buttondiv);

  datePrioDiv.append(dateItem);

  divItem.append(titleDiv, datePrioDiv, buttons, paraItem);

  divItem.addEventListener("click", (event) => {
    divItem.classList.toggle("expanded");
  });

  return divItem;
};

const renderCard = (cardObject) => {
  const titleCard = document.createElement("h2");
  titleCard.textContent = cardObject.cardTitle;

  const cards = document.createElement("div");
  cards.classList.add("cards");
  // sort first
  cardObject.itemArray.forEach((item) => {
    cards.append(renderItem(item));
  });

  // Buttons

  // add to-do item button
  const addButton = document.createElement("button");
  addButton.classList.add("item-add");
  addButton.textContent = "➕ Task";

  // delete card button
  const delCardBtn = document.createElement("button");
  delCardBtn.classList.add("card-del");
  delCardBtn.textContent = "🗑️ Card";

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
  addCardButton.textContent = "➕ Card";

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
