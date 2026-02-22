export { Space, SpaceCard, SpaceCardItem, Spaces, userSpaces };

class Spaces {
  constructor(title) {
    this.spacesTitle = title;
    this.spacesArray = [];
  }

  addSpace = (space) => {
    this.spacesArray.push(space);
  };
}

class Space {
  constructor(title) {
    this.spaceTitle = title;
    this.cardArray = [];
  }

  addCard = (card) => {
    this.cardArray.push(card);
  };
}

class SpaceCard {
  constructor(title) {
    this.cardTitle = title;
    this.itemArray = [];
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
  }
}

const userSpaces = new Spaces("user");
const personal = new Space("Personal");
const chores = new SpaceCard("Chores");
const trash = new SpaceCardItem(
  "Take out trash",
  "Take out the trashes from the house",
  "20/2/2026",
  "Urgent",
);
const wash = new SpaceCardItem(
  "Wash dish",
  "Wash last night's dishes",
  "20/2/2026",
  "Urgent",
);
const feed = new SpaceCardItem(
  "Feed cat",
  "Feed cat once a day",
  "20/2/2026",
  "Urgent",
);

const choresArray = [trash, wash, feed];
choresArray.forEach((item) => {
  chores.addItem(item);
});

personal.addCard(chores);
userSpaces.addSpace(personal);
