import "./modal.css";
import { format } from "date-fns";
export { addItemModal, addCardModal, addSpaceModal };

const addItemModal = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "add-item-dialog";

  const form = document.createElement("form");
  form.classList.add("form");

  const h2 = document.createElement("h2");
  h2.textContent = "New Task";

  // title
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.htmlFor = "title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.placeholder = "Task name...";
  titleInput.required = true;

  const titleDiv = document.createElement("div");
  titleDiv.append(titleLabel, titleInput);

  // description
  const descLabel = document.createElement("label");
  descLabel.textContent = "Description";
  descLabel.htmlFor = "description";
  const descTxtArea = document.createElement("textarea");
  descTxtArea.id = "description";
  descTxtArea.name = "description";
  descTxtArea.rows = "3";
  descTxtArea.placeholder = "Details...";

  const descDiv = document.createElement("div");
  descDiv.append(descLabel, descTxtArea);

  const divRow = document.createElement("div");
  divRow.classList.add("row");
  // dueDate
  const dueDiv = document.createElement("div");
  const dueLabel = document.createElement("label");
  dueLabel.htmlFor = "dueDate";
  dueLabel.textContent = "Due Date";
  const dueInput = document.createElement("input");
  dueInput.type = "date";
  dueInput.id = "dueDate";
  dueInput.name = "dueDate";
  dueInput.defaultValue = format(new Date(), "yyyy-MM-dd");
  dueDiv.append(dueLabel, dueInput);

  // priority
  const prioDiv = document.createElement("div");
  const prioLabel = document.createElement("label");
  prioLabel.htmlFor = "priority";
  prioLabel.textContent = "Priority";

  const prioSelect = document.createElement("select");
  prioSelect.id = "priority";
  prioSelect.name = "priority";
  ["low", "medium", "high"].forEach((item) => {
    const option = document.createElement("option");
    if (item === "low") {
      option.value = 1;
    } else if (item === "medium") {
      option.value = 2;
    } else if (item === "high") {
      option.value = 3;
    }

    option.textContent = item.charAt(0).toUpperCase() + item.slice(1);
    prioSelect.append(option);
  });

  prioDiv.append(prioLabel, prioSelect);
  divRow.append(dueDiv, prioDiv);

  const divAction = document.createElement("div");
  divAction.classList.add("actions");
  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.id = "saveBtn";
  saveButton.textContent = "Save Task";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.id = "closeBtn";
  cancelButton.value = "cancel";
  cancelButton.textContent = "Cancel";

  divAction.append(saveButton, cancelButton);

  form.append(h2, titleDiv, descDiv, divRow, divAction);
  dialog.append(form);

  cancelButton.addEventListener("click", (event) => {
    dialog.close();
  });

  return dialog;
};

const addCardModal = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "add-card-dialog";

  const form = document.createElement("form");
  form.classList.add("form");

  const h2 = document.createElement("h2");
  h2.textContent = "New Card";

  // title
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.htmlFor = "title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.placeholder = "Card name...";
  titleInput.required = true;

  const titleDiv = document.createElement("div");
  titleDiv.append(titleLabel, titleInput);

  const divAction = document.createElement("div");
  divAction.classList.add("actions");
  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.id = "saveBtn";
  saveButton.textContent = "Save Card";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.id = "closeBtn";
  cancelButton.value = "cancel";
  cancelButton.textContent = "Cancel";

  divAction.append(saveButton, cancelButton);

  form.append(h2, titleDiv, divAction);
  dialog.append(form);

  cancelButton.addEventListener("click", (event) => {
    dialog.close();
  });

  return dialog;
};

const addSpaceModal = () => {
  const dialog = document.createElement("dialog");
  dialog.id = "add-space-dialog";

  const form = document.createElement("form");
  form.classList.add("form");

  const h2 = document.createElement("h2");
  h2.textContent = "New Space";

  // title
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title";
  titleLabel.htmlFor = "title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";
  titleInput.placeholder = "Space name...";
  titleInput.required = true;

  const titleDiv = document.createElement("div");
  titleDiv.append(titleLabel, titleInput);

  const divAction = document.createElement("div");
  divAction.classList.add("actions");
  const saveButton = document.createElement("button");
  saveButton.type = "submit";
  saveButton.id = "saveSpaceBtn";
  saveButton.textContent = "Save Space";

  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.id = "closeSpaceBtn";
  cancelButton.value = "cancel";
  cancelButton.textContent = "Cancel";

  divAction.append(saveButton, cancelButton);

  form.append(h2, titleDiv, divAction);
  dialog.append(form);

  cancelButton.addEventListener("click", (event) => {
    dialog.close();
  });

  return dialog;
};
