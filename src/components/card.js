import axios from "axios"
const Card = (article) => {
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

  //*create elements
  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const containerDiv = document.createElement('div')
  const image = document.createElement('img')
  const spanTag = document.createElement('span')

  //* add classNames
  cardDiv.className = 'card'
  headlineDiv.className = 'headline'
  authorDiv.className = 'author'
  containerDiv.className = 'img-container'

  //* create textContent
  headlineDiv.textContent = article.headline
  image.setAttribute('src', article.authorPhoto)
  spanTag.textContent = article.authorName

  //* appending elements
  cardDiv.append(headlineDiv)
  cardDiv.append(authorDiv)
  authorDiv.append(containerDiv)
  containerDiv.append(image)
  authorDiv.append(spanTag)

  //*EventListener
  cardDiv.addEventListener('click', e => {
    console.log(headlineDiv.textContent)
  })

  return cardDiv
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  selector = document.querySelector('.cards-container')

    // const tech = [{bootstrap}, {javascript}, {jquery}, {node}, {technology}]

  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res => {
    // console.log(res.data.articles)
    const articles = res.data.articles;
    const bootstrap = articles.bootstrap
    const javascript = articles.javascript
    const jquery = articles.jquery
    const node = articles.node
    const technology = articles.technology
    // console.log(articles)

     selector.append(Card(bootstrap[0]))
     selector.append(Card(bootstrap[1]))
     selector.append(Card(bootstrap[2]))
     selector.append(Card(javascript[0]))
     selector.append(Card(javascript[1]))
     selector.append(Card(javascript[2]))
     selector.append(Card(javascript[3]))
     selector.append(Card(jquery[0]))
     selector.append(Card(jquery[1]))
     selector.append(Card(jquery[2]))
     selector.append(Card(node[0]))
     selector.append(Card(node[1]))
     selector.append(Card(technology[0]))
     selector.append(Card(technology[1]))
     selector.append(Card(technology[2]))
  })
  .catch(err => {
    console.log(err)
  })
}

export { Card, cardAppender }