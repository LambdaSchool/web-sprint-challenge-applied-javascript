import axios from "axios"

const tabsContainer = document.querySelector("tabs-container")
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

  const Topics = document.createElement('div')
  const javascript = document.createElement('div')
  const bootstrap = document.createElement('div')
  const technology = document.createElement('div')

  Topics.appendChild(javascript)
  Topics.appendChild(bootstrap)
  Topics.appendChild(technology)

  Topics.classList.add('topics')
  javascript.classList.add('javascript')
  bootstrap.classList.add('bootstrap')
  technology.classList.add('technology')

  javascript.textContent = topics["javascript"]
  bootstrap.textContent = topics["bootstrap"]
  technology.textContent = topics["technology"]

  console.log(Topics)

  return Topics
}


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`http://localhost:5000/api/topics/`)
  .then(res =>{
      res.data.forEach(topics=>{
        const Topics = Tabs(topics)
        tabsContainer.appendChild(Topics)
      })
    }) 
  
  .catch(err =>{
    console.log(err)
  })
  .finally(()=>{
    console.log('done')
  })

}


export { Tabs, tabsAppender }
