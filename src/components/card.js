const Card = (article) => {

  const headline = document.createElement("div")
headline.classlist.add("headline")
headline.text.content = ("headline")

const authorPhoto = document.createElement ("img")
authorPhoto.setAttribute("src")

const authorName = document.createElement("span")
text.content = "authorName"

const card = document.createElement("div")
card.classList.add("card")


// establishing higharchy

card.append(headline)
card.append(autorPhoto)
card.append(authorName)

return card
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}



const container = document.querySelector(".cards-container")

const cardAppender = (selector) => {
axios.get("https;//lambda-times-api.herokuapp.com/articles")

.then((res) => {
 console.log("here is a res:", res)
  res.data.articles.forEach(url => {
container.append(Card(articles))
})
.catch(err => { 


})
  })
}







  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

export { Card, cardAppender }
