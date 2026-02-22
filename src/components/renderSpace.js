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

  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.append(titleCard);

  cardObject.itemArray.forEach((item) => {
    divCard.append(renderItem(item));
  });

  return divCard;
};

const renderSpace = (spaceObject) => {
  const titleSpace = document.createElement("h1");
  titleSpace.textContent = spaceObject.spaceTitle;

  const divSpace = document.createElement("div");
  divSpace.append(titleSpace);

  spaceObject.cardArray.forEach((card) => {
    divSpace.append(renderCard(card));
  });

  return divSpace;
};
