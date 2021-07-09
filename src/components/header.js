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
  const head1 = document.createElement("div");
  head1.classList.add("header");

  const datespan = document.createElement("span");
  datespan.textContent = date;

  const heading1 = document.createElement("h1");
  heading1.textContent = title;

  const dspan = document.createElement("span");
  dspan.classList.add(temp);
  dspan.textContent = temp;
};

head1.appendChild(datespan);
head1.appendChild(heading1);
head1.appendChild(dspan);
const headerAppender = header => {
  headerAppender.classList.add("header-container");
  headerAppender.appendChild(header.h1);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
