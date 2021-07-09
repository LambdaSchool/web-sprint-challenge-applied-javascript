const Header = (title, date, temp) => {
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

const mainHeader = document.createElement('div')
  const dateSpan = document.createElement('span')
  const h1Title = document.createElement('h1')
  const tempSpan = document.createElement('span')

  mainHeader.classList.add('header')
  dateSpan.classList.add('date')
  tempSpan.classList.add('temp')

  dateSpan.textContent = `Published: ${date}`
  h1Title.textContent = title
  tempSpan.textContent = `Temperature: ${temp}`

  mainHeader.appendChild(dateSpan)
  mainHeader.appendChild(h1Title)
  mainHeader.appendChild(tempSpan)

  return mainHeader

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  let entry = document.querySelector(selector)
  entry.appendChild(Header('Lambda Times', '1/6/21', '26 Degrees'))

}


export { Header, headerAppender }
