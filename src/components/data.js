import { Space, SpaceCard, SpaceCardItem, Spaces } from "./spacesClasses.js";
export { userSpaces };

// Helper to get random priority 1-3
const randPri = () => Math.floor(Math.random() * 3) + 1;

const userSpaces = new Spaces("user");
const personal = new Space("Personal");

// --- Chores ---
const chores = new SpaceCard("Chores");
const choresArray = [
  new SpaceCardItem(
    "Take out trash",
    "Take out the trashes from the house",
    "20/2/2026",
    randPri(),
  ),
  new SpaceCardItem(
    "Wash dish",
    "Wash last night's dishes",
    "20/2/2026",
    randPri(),
  ),
  new SpaceCardItem("Feed cat", "Feed cat once a day", "20/2/2026", randPri()),
  new SpaceCardItem("Feed cat", "Feed cat once a day", "20/2/2026", randPri()),
  new SpaceCardItem("Feed cat", "Feed cat once a day", "20/2/2026", randPri()),
  new SpaceCardItem("Feed cat", "Feed cat once a day", "20/2/2026", randPri()),
];
choresArray.forEach((item) => chores.addItem(item));

// --- Work ---
const work = new SpaceCard("Work");
const workArray = [
  new SpaceCardItem("call john", "filler", "20/2/2026", randPri()),
  new SpaceCardItem("edit", "filler", "20/2/2026", randPri()),
  new SpaceCardItem("file folders", "filler", "20/2/2026", randPri()),
];
workArray.forEach((item) => work.addItem(item));

// --- Play ---
const play = new SpaceCard("Play");
const playArray = [
  new SpaceCardItem("play apex", "filler", "20/2/2026", randPri()),
  new SpaceCardItem("Practice aim", "Filler", "20/2/2026", randPri()),
  new SpaceCardItem(
    "Impatiently waiting for marathon",
    "filler",
    "20/2/2026",
    randPri(),
  ),
];
playArray.forEach((item) => play.addItem(item));

// --- Clinic ---
const clinic = new SpaceCard("Clinic");
const clinicArray = [
  new SpaceCardItem(
    "Morning Consultations",
    "Exams and cleanings",
    "23/2/2026",
    randPri(),
  ),
  new SpaceCardItem(
    "Root Canal Procedure",
    "Room 2 prep",
    "23/2/2026",
    randPri(),
  ),
  new SpaceCardItem(
    "Review Patient Records",
    "Update charts",
    "23/2/2026",
    randPri(),
  ),
];
clinicArray.forEach((item) => clinic.addItem(item));

// --- Lab Work ---
const labWork = new SpaceCard("Lab Work");
const labArray = [
  new SpaceCardItem(
    "Dental Impressions",
    "Send to lab",
    "24/2/2026",
    randPri(),
  ),
  new SpaceCardItem("Crown Fittings", "Check margins", "24/2/2026", randPri()),
  new SpaceCardItem(
    "Autoclave Instruments",
    "End of day routine",
    "24/2/2026",
    randPri(),
  ),
];
labArray.forEach((item) => labWork.addItem(item));

// --- Assembly ---
personal.addCard(chores);
personal.addCard(work);
personal.addCard(play);
personal.addCard(clinic);
personal.addCard(labWork);
userSpaces.addSpace(personal);
