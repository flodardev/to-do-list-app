import "./renderSpace.css";
export { renderSpace };

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

  const divItem = document.createElement("div");
  divItem.classList.add("todo-item");
  divItem.append(titleItem, paraItem, dateItem, priorityItem);

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

  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.append(titleCard, cards);

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
  const titleSpace = document.createElement("h1");
  titleSpace.textContent = spaceObject.spaceTitle;

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
  divSpace.append(titleSpace, containerCards);

  return divSpace;
};
