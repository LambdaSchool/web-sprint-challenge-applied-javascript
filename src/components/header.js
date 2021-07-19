
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


    // create the element
   const header = document.createElement('div');  
   const hDate = document.createElement('span');
   const hTitle = document.createElement('h1');
   const hTemp = document.createElement('span');
  
   // add the styles
   header.classList.add('header');
   hDate.classList.add('date');
   hTitle.classList.add('title')
   hTemp.classList.add('temp');
   
  // add the text
   hTitle.textContent = title;
   hDate.textContent = date;
   hTemp.textContent = temp;
  
  
   // append + attach
   header.appendChild(hTitle)
   header.appendChild(hDate)
   header.appendChild(hTemp)  
  
  return header
  
  }
  


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerAppender = (selector) => {
  
    //select it
    const b = document.querySelector(selector)
    //
    let header = Header('Lambda Times', 'June 4, 2021', '90 deg')
    
    b.appendChild(header)
  }
  
  export { Header, headerAppender }
  
