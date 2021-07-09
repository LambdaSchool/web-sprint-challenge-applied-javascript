import axios from "axios"

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

  //*Creating Elements
  const topicDiv = document.createElement('div')
  const tab1Div = document.createElement('div')
  const tab2Div = document.createElement('div')
  const tab3Div = document.createElement('div')
  const tab4Div = document.createElement('div')
  const tab5Div = document.createElement('div')

  //* Adding classNames
  topicDiv.className = 'topics'
  tab1Div.className = 'tab'
  tab2Div.className = 'tab'
  tab3Div.className = 'tab'
  tab4Div.className = 'tab'
  tab5Div.className = 'tab'

  //* TextContent to tabs
  tab1Div.textContent = topics[0]
  tab2Div.textContent = topics[1]
  tab3Div.textContent = topics[2]
  tab4Div.textContent = topics[3]
  tab5Div.textContent = topics[4]

  //* appending tabs to div.topic
  topicDiv.append(tab1Div)
  topicDiv.append(tab2Div)
  topicDiv.append(tab3Div)
  topicDiv.append(tab4Div)
  topicDiv.append(tab5Div)

  return topicDiv
}

//  console.log(Tabs(['javascript', 'bootstrap', 'technology']))

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  selector = document.querySelector('.tabs-container')

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
  .then(res => {
    // console.log(res.data.topics)
     selector.append(Tabs(res.data.topics))
  })
  .catch(err => {
    console.log(err)
  })
}

export { Tabs, tabsAppender }