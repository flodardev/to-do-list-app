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
const ex1 = new SpaceCardItem(
  "Feed cat",
  "Feed cat once a day",
  "20/2/2026",
  "Urgent",
);
const ex2 = new SpaceCardItem(
  "Feed cat",
  "Feed cat once a day",
  "20/2/2026",
  "Urgent",
);
const ex3 = new SpaceCardItem(
  "Feed cat",
  "Feed cat once a day",
  "20/2/2026",
  "Urgent",
);
const choresArray = [trash, wash, feed, ex1, ex2, ex3];
choresArray.forEach((item) => {
  chores.addItem(item);
});

const work = new SpaceCard("Work");
const call = new SpaceCardItem("call john", "filler", "20/2/2026", "Urgent");
const edit = new SpaceCardItem("edit", "filler", "20/2/2026", "Urgent");
const file = new SpaceCardItem("file folders", "filler", "20/2/2026", "Urgent");
const workArray = [call, edit, file];
workArray.forEach((item) => {
  work.addItem(item);
});

const play = new SpaceCard("Play");
const apex = new SpaceCardItem("play apex", "filler", "20/2/2026", "Urgent");
const kovaak = new SpaceCardItem(
  "Practice aim",
  "Filler",
  "20/2/2026",
  "Urgent",
);
const marathon = new SpaceCardItem(
  "Impatiently waiting for marathon",
  "filler",
  "20/2/2026",
  "Urgent",
);
const playArray = [apex, kovaak, marathon];
playArray.forEach((item) => {
  play.addItem(item);
});
const clinic = new SpaceCard("Clinic");
const consults = new SpaceCardItem(
  "Morning Consultations",
  "Exams and cleanings",
  "23/2/2026",
  "High",
);
const rootCanal = new SpaceCardItem(
  "Root Canal Procedure",
  "Room 2 prep",
  "23/2/2026",
  "Urgent",
);
const records = new SpaceCardItem(
  "Review Patient Records",
  "Update charts",
  "23/2/2026",
  "Normal",
);
const clinicArray = [consults, rootCanal, records];
clinicArray.forEach((item) => {
  clinic.addItem(item);
});

const labWork = new SpaceCard("Lab Work");
const impressions = new SpaceCardItem(
  "Dental Impressions",
  "Send to lab",
  "24/2/2026",
  "High",
);
const crowns = new SpaceCardItem(
  "Crown Fittings",
  "Check margins",
  "24/2/2026",
  "Urgent",
);
const sterilization = new SpaceCardItem(
  "Autoclave Instruments",
  "End of day routine",
  "24/2/2026",
  "Normal",
);
const labArray = [impressions, crowns, sterilization];
labArray.forEach((item) => {
  labWork.addItem(item);
});

personal.addCard(chores);
personal.addCard(work);
personal.addCard(play);
personal.addCard(clinic);
personal.addCard(labWork);
userSpaces.addSpace(personal);
