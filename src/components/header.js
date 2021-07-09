


const headerContainer = document.querySelector('.header-container')
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

  const header = document.createElement('div')
  const Date = document.createElement('span')
  const Title = document.createElement('h1')
  const Temp = document.createElement('span')

  Title.textContent = title
  Date.textContent = date
  Temp.textContent = temp

  console.log(header)

  header.appendChild(Date)
  header.appendChild(Title)
  header.appendChild(Temp)

  header.classList.add('header')
  Date.classList.add('date')
  Title.classList.add('title')
  Temp.classList.add('temp')


  return header
}



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  const header = Header("Lambda Times", "January 6, 2021", "26")
  headerContainer.appendChild(header)
    

}

export { Header, headerAppender }
