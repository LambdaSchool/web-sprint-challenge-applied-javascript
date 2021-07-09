import axios from "axios";
import { response } from "msw";

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

  const cardNode = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');

  cardNode.appendChild(headline);
  cardNode.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);

  cardNode.classList.add('card');
  headline.classList.add('headline');
  author.classList.add(`author`);
  imgContainer.classList.add('img-container');
  
  img.src = article.authorPhoto;
  headline.textContent = article.headline;
  span.textContent = `by ${article.authorName}`;


cardNode.addEventListener('click', () =>{
  console.log(headline);
});

  return cardNode;
};

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const cardAppender = (selector) => {
  axios.get('http://localhost:5000/api/articles', {})
  .then(res => {
    const newCard = document.querySelector(selector);
    res.data.articles.javascript.forEach(e => {
      newCard.appendChild(Card(e));
    });
    res.data.articles.bootstrap.forEach(e => {
      newCard.appendChild(Card(e));
    });
    res.data.articles.technology.forEach(e => {
      newCard.appendChild(Card(e));
    });
    res.data.articles.jquery.forEach(e => {
      newCard.appendChild(Card(e));
    });
    res.data.articles.node.forEach(e => {
      newCard.appendChild(Card(e));
    });

  })
//Unsuccessful refactoring attempt. bummed about it. 
  // axios.get('http://localhost:5000/api/articles')
  // .then(function (response) {
  //   const newCard = document.querySelector(selector);
  //   Object.keys(response.data.articles).forEach( key => {
  //         let result = response.data.articles`.${ key }`;
  //         result.forEach(i => {
  //           newCard.appendChild(Card(i));
  //       });
  //     });
  //   }    
  // )
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
};

export { Card, cardAppender }
