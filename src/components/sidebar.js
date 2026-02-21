export { sideBar };
import "./sidebar.css";
import logoPNG from "../images/logo/logo.png";

const sideBar = () => {
  const sideBarContainer = document.querySelector(".side-bar");
  sideBarContainer.append(header(), addSpaceBtn());
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
  });
  return addSpaceBtn;
};
