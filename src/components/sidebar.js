export { sideBar };
import "./sidebar.css";
import logoPNG from "../images/logo/logo.png";

const sideBar = () => {
  const sideBarContainer = document.querySelector(".side-bar");
  sideBarContainer.append(header(), addSpaceBtn(), spaceList());
};

const header = () => {
  const header = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "To Do-Em!";
  header.append(logo(), title);
  header.classList.add("header");

  return header;
};

const logo = () => {
  const logo = document.createElement("img");
  logo.classList.add("logo");
  logo.src = logoPNG;
  return logo;
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

const spaceList = () => {
  // data for spaces
  const spacesArray = [
    { name: "space 1" },
    { name: "space 2" },
    { name: "space 3" },
    { name: "space 4" },
    { name: "space 5" },
  ];

  const spaceSelections = document.createElement("select");
  spaceSelections.classList.add("space-selection");
  spaceSelections.id = "spaces";
  spaceSelections.name = "spaces";
  spaceSelections.addEventListener("change", (event) => {
    console.log(event.target.value);
  });

  // for each space create a list item
  spacesArray.forEach((item) => {
    const listItem = document.createElement("option");
    listItem.classList.add("space-item");
    listItem.textContent = item.name;
    listItem.value = item.name;

    spaceSelections.append(listItem);
  });

  const div = document.createElement("div");
  div.classList.add("class-list");
  div.append(spaceSelections);
  return div;
};
