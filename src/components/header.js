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

const Header = (title, date, temp) => {
  const header = document.createElement('div')
  const dateSpan = document.createElement('span')
  const titleTag = document.createElement('h1')
  const tempSpan = document.createElement('span')

  

  header.classList.add('header')
  dateSpan.classList.add('date')
  dateSpan.textContent = date
  titleTag.textContent = title
  tempSpan.classList.add('temp')
  tempSpan.textContent = temp

  header.appendChild(dateSpan)
  header.appendChild(titleTag)
  header.appendChild(tempSpan)

  return header
  
}

// TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const headerAppender = (selector) => {
  const headerSelector = document.querySelector(selector)
  let header = Header('Lambda Times', 'January 6, 2021', '26°')
  headerSelector.appendChild(header)
  
}

export { Header, headerAppender }
