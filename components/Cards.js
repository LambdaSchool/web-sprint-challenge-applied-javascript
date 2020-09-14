// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
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

function CardCreator(item) {
  const cardMainDiv = document.createElement('div');
  const cardHeadLineDiv = document.createElement('div');
  const cardauthorDiv = document.createElement('div');
  const cardImgDiv = document.createElement('div');
  const img = document.createElement('img');
  const cardBy = document.createElement('span');

  cardMainDiv.appendChild(cardHeadLineDiv);
  cardMainDiv.appendChild(cardauthorDiv);
  cardauthorDiv.appendChild(cardImgDiv);
  cardImgDiv.appendChild(img);
  cardauthorDiv.appendChild(cardBy);

  cardMainDiv.classList.add('card');
  cardHeadLineDiv.classList.add('headline');
  cardauthorDiv.classList.add('author');
  cardImgDiv.classList.add('img-container');

  cardHeadLineDiv.textContent = item.headline;
  img.src = item.authorPhoto;
  cardBy.textContent = `By ${item.authorName}`;

  return cardMainDiv;
}
//}

//robel use entryPoint here
const cardsContainer = document.querySelector('.cards-container');

axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((response) => {
    console.log(response);

    const bulkData = response.data.articles;

    const sortedData = Object.keys(bulkData).map((key) => [bulkData[key]]);

    sortedData.forEach((element) => {
      element.forEach((element) => {
        element.forEach((element) => {
          const card = new CardCreator(element);
          cardsContainer.appendChild(card);
        });
      });
    });
  })
  .catch((error) => {
    console.log('Error:', error);
  });
