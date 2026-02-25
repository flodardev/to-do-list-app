export { Space, SpaceCard, SpaceCardItem, Spaces };

class Spaces {
  constructor(title) {
    this.spacesTitle = title;
    this.spacesArray = [];
    this.spacesID = crypto.randomUUID();
  }

  getSpace = (spaceID) => {
    const index = this.findSpaceIndex(spaceID);

    if (index !== -1) {
      return this.spacesArray[index];
    }
  };

  addSpace = (space) => {
    this.spacesArray.push(space);
  };

  findSpaceIndex = (spaceID) => {
    return this.spacesArray.findIndex((item) => item.spaceID === spaceID);
  };
}

class Space {
  constructor(title) {
    this.spaceTitle = title;
    this.cardArray = [];
    this.spaceID = crypto.randomUUID();
  }

  getCard = (cardID) => {
    const index = this.findCardIndex(cardID);
    if (index !== -1) {
      const card = this.cardArray[index];
      return card;
    } else {
      return false;
    }
  };

  addCard = (card) => {
    this.cardArray.push(card);
  };

  removeCard = (cardID) => {
    const index = this.findCardIndex(cardID);
    if (index !== -1) {
      this.cardArray.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  findCardIndex = (cardID) => {
    return this.cardArray.findIndex((item) => item.cardID === cardID);
  };
}

class SpaceCard {
  constructor(title) {
    this.cardTitle = title;
    this.itemArray = [];
    this.cardID = crypto.randomUUID();
  }

  getItem = (itemID) => {
    const index = this.findItemIndex(itemID);
    if (index !== -1) {
      const item = this.itemArray[index];
      // success return true
      return item;
    } else {
      // fail return false // error
      return false;
    }
  };

  addItem = (item) => {
    this.itemArray.push(item);
  };

  removeItem = (itemID) => {
    const index = this.findItemIndex(itemID);
    if (index !== -1) {
      this.itemArray.splice(index, 1);
      // success return true
      return true;
    } else {
      // fail return false // error
      return false;
    }
  };

  findItemIndex = (itemID) => {
    return this.itemArray.findIndex((item) => item.itemID === itemID);
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
