import { Spaces, Space } from "./spacesClasses.js";

export { setLocalStorage, getLocalStorage };

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const setLocalStorage = (object) => {
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    localStorage.setItem("userData", JSON.stringify(object));

    //console.log(localStorage.getItem("userData"));
  } else {
    // Too bad, no localStorage for us
  }
};

const getLocalStorage = () => {
  if (storageAvailable("localStorage")) {
    const storedData = localStorage.getItem("userData");

    // --- FIRST RUN LOGIC ---
    if (!storedData) {
      console.log("First load detected. Creating default data...");

      // 1. Create your initial instances
      const userSpaces = new Spaces("User Root");
      const personal = new Space("Personal");

      // 2. Build the relationship
      userSpaces.addSpace(personal);

      // 3. Save it immediately so it's there for the next refresh
      setLocalStorage(userSpaces);

      // 4. Return the new object so the UI can render it
      return userSpaces;
    }

    // --- NORMAL LOAD LOGIC ---
    const rawData = JSON.parse(storedData);
    return Spaces.hydrate(rawData);
  } else {
    // Too bad, no localStorage for us
  }
};
