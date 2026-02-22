import { userSpaces } from "./spacesdata.js";
export { spaces, addSpaceBtn, spaceList };

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
  addSpaceBtn.addEventListener("click", () => {
    console.log("I got clicked");
    // add a new space
    spaceList();
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
  });

  return selections;
};

const spaceList = () => {
  const spaceSelect = spaceSelections();
  const spaces = userSpaces;
  const array = spaces.spacesArray;
  //console.log(array[0].spaceTitle);
  // for each space create a list item
  spaces.spacesArray.forEach((item) => {
    const listItem = document.createElement("option");
    listItem.classList.add("space-item");
    listItem.textContent = item.spaceTitle;
    listItem.value = item.spaceTitle;

    spaceSelect.append(listItem);
  });

  const title = document.createElement("h3");
  title.textContent = "Spaces";

  const div = document.createElement("div");
  div.classList.add("class-list");
  div.append(title, spaceSelect);

  return div;
};
