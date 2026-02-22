export { sideBar };
import { addSpaceBtn, spaceList } from "./spaces.js";
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
