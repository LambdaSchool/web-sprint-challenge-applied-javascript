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
// Add a listener for click events so that when a user clicks on a card,
//  the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

class Article{
    constructor(url,at){
        this.arTopics = [];
        at.forEach((a,i) =>{
            this.arTopics[i] = a;
        })
        this.url = { 'url':url };
    }

    articleRe(){
      


        return this.url;
    }
    reTop(){
        return this.arTopics;
    }


     articleMaker(obj){
        // All elements
            const card = document.createElement('div');
            const headLine = document.createElement('div')
            const author = document.createElement('div');
            const imgD = document.createElement('div');
            const img = document.createElement('img');
            const span = document.createElement('span');
            
        //classes and properties
            card.classList.add('card');
            headLine.classList.add('headline');
            author.classList.add('author');
            imgD.classList.add('img-container');
            img.setAttribute('src',obj.authorPhoto);
            
        //Text content
            span.textContent = obj.authorName;
            headLine.textContent = obj.headline;
        // Click Event listener
            card.addEventListener('click', event => {
                console.log(obj.headline)
            })
        //Append the whole thing
            imgD.appendChild(img);
            author.append(imgD,span);
            card.append(headLine,author);
            
        //the Article
            return card;
        }
        
}// End Article Class



let aTop = [
    "javascript",
    "bootstrap",
    "technology",
    "jquery",
    "node"
];
ARTICLES_URL = 'https://lambda-times-api.herokuapp.com/articles';
let art = new Article(ARTICLES_URL,aTop);
console.log(art.reTop());


// Backup array of all topics
let artTops = [];
artTops = art.reTop();

axios.get(ARTICLES_URL)
.then(resp => {
    // console.log(art.reTop());
    // Can you reuse the same object within itself over and over again? if not one day use artTops
    art.reTop().forEach(topic => {
        // Iterate each toipc while appending all articles to that topic
        resp.data.articles[topic].forEach(e => {
        let newD = art.articleMaker(e);
        document.querySelector('.cards-container').appendChild(newD);
    });
    });
})
.catch(failure => {
    console.log('Faild',failure);
});




