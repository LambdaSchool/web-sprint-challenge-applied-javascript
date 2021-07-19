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
  import axios from 'axios'

  
   const Tabs = (topics) => {
    
    const tabsContainer = document.createElement('div')
    tabsContainer.classList.add('topics')
  
    topics.forEach((topic) => {
      const tab = document.createElement('div')
      tab.classList.add('tab')
      tab.textContent = topic
      tabsContainer.appendChild(tab)
    });
  
  return tabsContainer
  }
  
  const tabsAppender = (selector) => {
    // TASK 4
    // ---------------------
    // Implement this function which takes a css selector as its only argument.
    // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
    // Find the array of topics inside the response, and create the tabs using the Tabs component.
    // Append the tabs to the element in the DOM that matches the selector passed to the function.
    //
    const d = document.querySelector(selector)
  
    axios.get(`https://lambda-times-api.herokuapp.com/topics`)
      .then(response => {
        //console.log(response)
        const tabs = Tabs(response.data.topics)
        d.appendChild(tabs)
      })
  
  }
  
  
  export { Tabs, tabsAppender }
  
  


 
