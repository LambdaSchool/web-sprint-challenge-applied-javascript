// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

// Once the data is resolved use console logs or breakpoints to review the structure.

// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabs = document.querySelector('.tabs');
axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response=>{
    console.log(response) //displays object
    response.data.topics.forEach(item=>{
        //create element/assign content/add class/append
        const topic = document.createElement('div')
        topic.textContent = item
        const topics = document.querySelector('.topics')
        topic.classList.add('tab')
        topics.append(topic)
    })

})
.catch((errorResponse)=>{
    alert('Something Broke')
})
