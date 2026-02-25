import { userSpaces } from "./data.js";
import { addSpace } from "./addFunctions.js";
import { renderSpace } from "./renderSpace.js";
import { getUser } from "./getterFunctions.js";
import { events } from "./events.js";
export { spaces, spaceList };

const spaces = () => {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "spaces";
  div.append(h1);
  return div;
};

const addSpaceBtn = () => {
  const addSpaceBtn = document.createElement("button");
  addSpaceBtn.id = "add-space-btn";
  addSpaceBtn.textContent = "Add Space";
  addSpaceBtn.addEventListener("click", async () => {
    // add a new space
    await addSpace();
    const classList = document.querySelector(".class-list");
    classList.replaceWith(spaceList());
  });
  return addSpaceBtn;
};

const spaceSelections = () => {
  const selections = document.createElement("select");
  selections.classList.add("space-selection");
  selections.id = "spaces";
  selections.name = "spaces";
  selections.addEventListener("change", (event) => {
    // change main content

    console.log(event.target.value);

    const user = getUser();
    const newSpace = renderSpace(user.getSpace(event.target.value));
    const spaceDiv = document.querySelector(".space");
    spaceDiv.replaceWith(newSpace);
    events();
  });

  return selections;
};

const spaceList = () => {
  const spaceSelect = spaceSelections();
  const spaces = userSpaces;
  // for each space create a list item
  spaces.spacesArray.forEach((item) => {
    const listItem = document.createElement("option");
    listItem.classList.add("space-item");
    listItem.textContent = item.spaceTitle;
    listItem.value = item.spaceID;

    spaceSelect.append(listItem);
  });

  const title = document.createElement("h3");
  title.textContent = "Spaces";

  const div = document.createElement("div");
  div.classList.add("class-list");
  div.append(title, addSpaceBtn(), spaceSelect);

  return div;
};
