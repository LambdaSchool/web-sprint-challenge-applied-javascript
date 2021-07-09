const Header = (title, date, temp) => {
  const div = document.createElement('div'),
  dateSpan = document.createElement('span'),
  h1 = document.createElement('h1'),
  tempSpan = document.createElement('span')

  div.classList.add('header');
  dateSpan.classList.add('date');
  tempSpan.classList.add('temp');


  div.appendChild(h1);
  div.appendChild(dateSpan);
  div.appendChild(tempSpan);

  h1.textContent = title;
  dateSpan.textContent = date;
  tempSpan.textContent = temp;
  
  
  
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


  return div
}

const headerAppender = (selector) => {


  const headerDiv = document.querySelector(selector)
headerDiv.appendChild(Header('Lambda Times', 'April 16th, 2021', '68°F'))

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  return headerDiv
}

export { Header, headerAppender }
