const Header = (title, date, temp) => {
  //Create Element 
  const divOne = document.createElement('div')
  const spanOne = document.createElement('span')
  const titleName = document.createElement('h1')
  const spanTwo = document.createElement('span')
  //Parent/Child Connection
  divOne.appendChild(spanOne)
  divOne.appendChild(titleName)
  divOne.appendChild(spanTwo)
  //Add Classes
  divOne.classList.add('header')
  spanOne.classList.add('date')
  spanTwo.classList.add('temp')
  //Connect Parameters
  titleName.textContent(title)
  spanOne.textContent(date)
  spanTwo.textContent(temp)

  const displayScreen = document.querySelector('.header-container')
  displayScreen.appendChild(divOne)
  
  return divOne

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
