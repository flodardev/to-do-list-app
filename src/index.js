import "./fonts/fonts.css";
import "./modern-css-reset.css";
import "./index.css";
import { sideBar } from "./components/sidebar.js";
import { home } from "./pages/home.js";
import { events } from "./components/events.js";
import {
  addItemModal,
  addCardModal,
  addSpaceModal,
} from "./components/modal.js";

const mainContainer = document.querySelector(".main");

// Default page
mainContainer.append(home(), addItemModal(), addCardModal(), addSpaceModal());
sideBar();
events();
