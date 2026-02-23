import "./fonts/fonts.css";
import "./modern-css-reset.css";
import "./index.css";
import { sideBar } from "./components/sidebar.js";
import { home } from "./pages/home.js";
import { events } from "./components/events.js";

const mainContainer = document.querySelector(".main");

// Default page
mainContainer.append(home());
sideBar();
events();
