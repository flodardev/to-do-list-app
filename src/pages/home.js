export { home };

const home = () => {
  const homeWrapper = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = "This is the home page";
  homeWrapper.append(header);

  return homeWrapper;
};
