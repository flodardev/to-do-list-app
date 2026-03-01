export { Space, SpaceCard, SpaceCardItem, Spaces };

class Spaces {
  constructor(title) {
    this.spacesTitle = title;
    this.spacesArray = [];
    this.spacesID = crypto.randomUUID();
  }

  static hydrate(obj) {
    const instance = new Spaces(obj.spacesTitle);
    Object.assign(instance, obj);
    if (obj.spacesArray) {
      instance.spacesArray = obj.spacesArray.map((s) => Space.hydrate(s));
    }
    return instance;
  }

  getSpace(spaceID) {
    const index = this.findSpaceIndex(spaceID);
    return index !== -1 ? this.spacesArray[index] : undefined;
  }

  addSpace(space) {
    this.spacesArray.push(space);
  }

  findSpaceIndex(spaceID) {
    return this.spacesArray.findIndex((item) => item.spaceID === spaceID);
  }
}

class Space {
  constructor(title) {
    this.spaceTitle = title;
    this.cardArray = [];
    this.spaceID = crypto.randomUUID();
  }

  static hydrate(obj) {
    const instance = new Space(obj.spaceTitle);
    Object.assign(instance, obj);
    if (obj.cardArray) {
      instance.cardArray = obj.cardArray.map((c) => SpaceCard.hydrate(c));
    }
    return instance;
  }

  getCard(cardID) {
    const index = this.findCardIndex(cardID);
    return index !== -1 ? this.cardArray[index] : false;
  }

  addCard(card) {
    this.cardArray.push(card);
  }

  removeCard(cardID) {
    const index = this.findCardIndex(cardID);
    if (index !== -1) {
      this.cardArray.splice(index, 1);
      return true;
    }
    return false;
  }

  findCardIndex(cardID) {
    return this.cardArray.findIndex((item) => item.cardID === cardID);
  }
}

class SpaceCard {
  constructor(title) {
    this.cardTitle = title;
    this.itemArray = [];
    this.cardID = crypto.randomUUID();
  }

  static hydrate(obj) {
    const instance = new SpaceCard(obj.cardTitle);
    Object.assign(instance, obj);
    if (obj.itemArray) {
      instance.itemArray = obj.itemArray.map((i) => SpaceCardItem.hydrate(i));
    }
    return instance;
  }

  getItem(itemID) {
    const index = this.findItemIndex(itemID);
    return index !== -1 ? this.itemArray[index] : false;
  }

  addItem(item) {
    this.itemArray.push(item);
    this.sortItems(true);
  }

  removeItem(itemID) {
    const index = this.findItemIndex(itemID);
    if (index !== -1) {
      this.itemArray.splice(index, 1);
      return true;
    }
    return false;
  }

  findItemIndex(itemID) {
    return this.itemArray.findIndex((item) => item.itemID === itemID);
  }

  sortItems(highToLow = true) {
    this.itemArray.sort((a, b) =>
      highToLow ? b.priority - a.priority : a.priority - b.priority,
    );
  }
}

class SpaceCardItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.itemID = crypto.randomUUID();
    this.status = false;
  }

  static hydrate(obj) {
    const instance = new SpaceCardItem(
      obj.title,
      obj.description,
      obj.dueDate,
      obj.priority,
    );
    Object.assign(instance, obj);
    return instance;
  }

  changeStatus() {
    this.status = !this.status;
  }

  changePriority(value) {
    if (value >= 1 && value <= 3) {
      this.priority = +value;
    } else {
      console.error("Error in changing priority");
    }
  }
}
