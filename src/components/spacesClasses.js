export { Space, SpaceCard, SpaceCardItem, Spaces };

class Spaces {
  constructor(title) {
    this.spacesTitle = title;
    this.spacesArray = [];
    this.spacesID = crypto.randomUUID();
  }

  addSpace = (space) => {
    this.spacesArray.push(space);
  };
}

class Space {
  constructor(title) {
    this.spaceTitle = title;
    this.cardArray = [];
    this.spaceID = crypto.randomUUID();
  }

  addCard = (card) => {
    this.cardArray.push(card);
  };
}

class SpaceCard {
  constructor(title) {
    this.cardTitle = title;
    this.itemArray = [];
    this.cardID = crypto.randomUUID();
  }

  addItem = (item) => {
    this.itemArray.push(item);
  };
}

class SpaceCardItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemID = crypto.randomUUID();
  }
}
