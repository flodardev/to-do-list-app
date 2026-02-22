import "./fonts/fonts.css";
import "./modern-css-reset.css";
import "./index.css";
import { sideBar } from "./components/sidebar.js";
import { spaces } from "./components/spaces.js";
import { home } from "./pages/home.js";

const mainContainer = document.querySelector(".main");

// Default page
mainContainer.append(home());
sideBar();
