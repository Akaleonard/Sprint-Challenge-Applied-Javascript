// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("http://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let card_container = document.querySelector('.cards-container')
        let array = Object.values(response.data.articles)
        array.forEach(elements => {
            elements.forEach(articles => {
                card_container.appendChild(createComp(articles))
            })
        })
    })
    .catch(err => {
        console.log(err);
    });

function createComp(object) {
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let img_container = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    img_container.classList.add('img-container');
    img.src = object.authorPhoto;

    headline.innerHTML = object.headline;
    span.innerHTML = "By" + object.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(img_container);
    img_container.appendChild(img);
    author.appendChild(span);

    return card;
}
