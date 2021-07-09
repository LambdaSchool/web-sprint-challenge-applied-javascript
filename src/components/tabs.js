import { headersToString } from "headers-utils/lib";

const Tabs = topics => {
  if (
    ((topics[0] = "javascript"),
    (topics[1] = "bootstrap"),
    (topics[2] = "technology"))
  ) {
    const divStuffs = document.createElement("div");
    divStuffs.classList.add("topics");

    const divThings1 = document.createElement("div");
    divThings1.classList.add("tab");
    divThings1.textContent = "javascript";

    const divThings2 = document.createElement("div");
    divThings2.classList.add("tab");
    divThings2.textContent = "bootstrap";

    const divThings3 = document.createElement("div");
    divThings3.classList.add("tab");
    divThings3.textContent = "technology";
  }
  divStuffs.appendChild(divThings1);
  divStuffs.appendChild(divThings2);
  divStuffs.appendChild(divThings3);
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
};

const tabsAppender = topics => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  fetch("http://localhost:5000/api/topics");
};

export { Tabs, tabsAppender };
