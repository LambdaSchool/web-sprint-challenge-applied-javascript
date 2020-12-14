// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
// console.log(axios);
const request = axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {
    console.log('success')
    console.log(response.data.topics)
    response.data.topics.forEach(topics =>{

            //function for creating tab div, looping, then appending to .topics
            let tab = document.createElement('div')
            // console.log(tab)
            tab.classList.add('tab')
            tab.textContent = `${topics}`

            let topDiv = document.querySelector('.topics')
        
            topDiv.appendChild(tab)
        
    })
})
.catch(err => {
    console.log('reject')
    console.log('ERROR:', err)
})

console.log('pending', request)

// console.log(request)

//tab maker function
// function tabMaker (){
//     let tab = document.createElement('div')
//     console.log(tab)
//     tab.classList.add('tab')

//     let topDiv = document.querySelector('.topics')

//     topDiv.appendChild(tab)

    
// }

// tabMaker()