// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  const headerDivDefinition = document.createComment('div');
  const dateSpanDefinition = document.createComment('span');
  const titleDefinition = document.createComment('h1');
  const tempSpanDefinition = document.createComment('span');

  //Seeting the parent and chilld
  headerDivDefinition.appendChild(dateSpanDefinition);
  headerDivDefinition.appendChild(titleDefinition);
  headerDivDefinition.appendChild(tempSpanDefinition);

  //adding the needed class
  headerDivDefinition.classList.add('header');
  dateSpanDefinition.classList.add('date');
  tempSpanDefinition.classList.add('temp');

  //setting the text content
  dateSpanDefinition.textContent = 'MARCH 28, 2020';
  titleDefinition.textContent = 'Lambda Times';
  tempSpanDefinition.textContent = '98°';

  return headerDivDefinition;
}

document.querySelector('.header-container').appendChild(Header());
