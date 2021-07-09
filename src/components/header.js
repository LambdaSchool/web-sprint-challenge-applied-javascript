const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //   <span class="date">{ date }</span>
  //   <h1>{ title }</h1>
  //   <span class="temp">{ temp }</span> 
  //  </div>
  //lines 15-18 are js element markups in place of what would be my html element framework(s?) (Saweet)
  //21-27 are building on top of the elements above, giving them params & text
  //30-32 are positioning the elements on the webpage
  //15-32 use a js function to display elements provided by a passing function. 


  const header = document.createElement('div');
  const headerTitle = document.createElement('h1');
  const headerDate = document.createElement('span');
  const headerTemp = document.createElement('span');

  headerTitle.classList.add('title');
  headerDate.classList.add('date');
  headerTemp.classList.add('temp');

  headerTitle.textContent = title;
  headerDate.textContent = date;
  headerTemp.textContent = temp;

  header.appendChild(headerTitle);
  header.appendChild(headerDate);
  header.appendChild(headerTemp);
  
  return header

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const element = document.querySelector(selector);
  let header = Header('LambdaTIMES', 'July 9, 2021', '91 F');
  element.appendChild(header);
}

export { Header, headerAppender }
