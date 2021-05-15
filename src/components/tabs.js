const Tabs = (topics) => {
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
let topic = document.createElement("div");

let javascript = document.createElement("div");
jav.textContent = javascript;

let bootstrap = document.createElement("div");
boot.textContent = javascript;

let technology = document.createElement("div");
tech.textContent = technology;
topic.appendChild(javascript)
topic.appendChild(bootstrap)
topic.appendChild(technology)
return topic
}

const tabsAppender = (selector) => {
axios.get(`https://lambda-times-api.herokuapp.com/topics`) 
.then((res) => {
console.log("here is another:", res)
res.data.topics.forEach(url => {
  entry.append(Tabs(url))
  
 

} )
.catch(err =>{
  console.log("error")
})
}
)
}

const entry = document.querySelector(".tabs-container")


  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }
