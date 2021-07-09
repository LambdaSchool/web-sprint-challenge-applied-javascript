const Card = article => {
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
  const cardYo = document.createElement("div");
  cardYo.classList.add("card");

  const headline1 = document.createElement("div");
  headline1.classList.add("headline");

  const authorStuffs = document.createElement("div");
  authorStuffs.classList.add("author");

  const imageCon = document.createElement("div");
  imageCon.classList.add("img-container");
  imageCon.src = article.authorPhoto;

  const spanStuff = document.createElement("span");
  spanStuff.textContent = `By ${authorName}`;
};
cardYo.appendChild(headline1);
cardYo.appendChild(author);
cardYo.appendChild(img - container);

const cardAppender = h2 => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  fetch("http://localhost:5000/api/articles");
};

export { Card, cardAppender };
