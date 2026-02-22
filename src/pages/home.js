import "./home.css";
import { renderSpace } from "../components/renderSpace.js";
import { userSpaces } from "../components/spacesdata.js";
export { home };

const home = () => {
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-wrapper");

  const spaces = userSpaces;
  const array = spaces.spacesArray;

  console.log(array[0]);

  homeWrapper.append(renderSpace(array[0]));

  return homeWrapper;
};
