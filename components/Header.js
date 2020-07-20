// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container')

const Header = () => {

    //create element
    const header = document.createElement('div')
    const dateSpan = document.createElement('span')
    const lambdaH1 = document.createElement('h1')
    const tempSpan = document.createElement('span')

   
    

    //add classes

    header.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    //add text

    dateSpan.textContent = "March 28, 2020"
    lambdaH1.textContent = "Lambda Times"
    tempSpan.textContent = "98°"

    //append
    header.append(dateSpan,lambdaH1,tempSpan)
    
    return header;

}

headerContainer.appendChild(Header())


