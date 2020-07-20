// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContain = document.querySelector('.cards-container')
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response=>{
    console.log(response)
    const art = response.data.articles //holds each article catagory


    //for let in loop to loop through each article within each category
    for(let i in art){
        art[i].forEach(item=>{
            cardsContain.append(articleCard(item))
        })
    }
})
.catch(()=>{
    // error stretch
    const errorMsg = document.createElement('h1')
    errorMsg.textContent = "Can not display articles"
    document.querySelector('.errors-container').append(errorMsg)
})


const articleCard = (obj)=>{
    //create elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const authImg = document.createElement('img')
    const authSpan = document.createElement('span')
    
    //add classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    //append

    card.append(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authSpan)
    imgContainer.appendChild(authImg)

    //assign data from obj
    headline.textContent= obj.headline
    authSpan.textContent = `By: ${obj.authorName}`
    authImg.src = obj.authorPhoto

    //click event

    card.addEventListener("click", () => {
        alert(obj.headline)
        console.log(obj.headline)
    })

    return card


}