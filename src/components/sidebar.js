export { sideBar };

const sideBar = () => {
  const sideBarContainer = document.querySelector(".side-bar");

  sideBarContainer.append(header(), buttons());
};

const header = () => {
  const header = document.createElement("h1");
  header.textContent = "To Do-Em!";

  return header;
};

const buttons = () => {
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("add-task-btn");
  addTaskBtn.textContent = "Add Task";

  return addTaskBtn;
};
