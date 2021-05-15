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
  const div = document.createElement("div");
  const day = document.createElement("span")
  const label = document.createElement("h1");
  const degree = document.createElement("span");

  div.classList.add("header");
  day.classList.add("date");
  degree.classList.add("temp");

  day.textContent = `${date}`
  label.textContent =`${title}`
  degree.textContent = `${temp}`


  div.appendChild(date);
  div.appendChild(title);
  div.appendChild(temp);




  return div;


}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  
  
  const holder = document.querySelector(".header-container");
  holder.appendChild(Header("BOB","12-20","98"))
  


}

export { Header, headerAppender }
