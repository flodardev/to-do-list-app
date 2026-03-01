import "./home.css";
import { renderSpace } from "../components/renderSpace.js";
import { getUser } from "../components/getterFunctions.js";
export { home };

const home = () => {
  const homeWrapper = document.createElement("div");
  homeWrapper.classList.add("home-wrapper");

  const spaces = getUser();
  const array = spaces.spacesArray;

  // console.log(array[0]);

  homeWrapper.append(renderSpace(array[0]));

  return homeWrapper;
};
