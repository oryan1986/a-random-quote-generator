/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// variables
let newQuote;

/*** 
  Made a quotes array object that contain all the quotes,
  That being display to the screen.
***/
const quotes = [
  {
    quote: 'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.',
    source: 'Mark Twain',
    year: '1910',
    tags: 'Life'
  },
  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    source: 'Charles R. Swindoll',
    tags: 'Motivational'
  },
  {
    quote: 'Words can inspire, thoughts can provoke, but only action truly brings you closer to your dreams. ',
    source: 'Brad Sugars'
  },
  {
    quote: 'Winners never quit and quitters never win.',
    source: 'Vince Lombardi',
    citation: 'Brainy Quote'
  },
  {
    quote: 'Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.',
    source: 'Dr. Seuss',
    tags: 'Insparational',
  }
]

//Having the page to auto-refresh every 20 seconds.
const changeQuote = () => {
  newQuote = setInterval(printQuote, 20000);
}

/*** 
credits:
https://www.youtube.com/watch?v=z4OyThVIr5U
This function is definding a hex value (colorValue).
Gets 6 random hex value from the array and builds a hex code 
example : #82a43a for color green.
and apply that to the background color when the quote changes.
***/
const colorValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const randomBackgroundColor = () => {
  document.body.style.backgroundColor = '#' + getRandomColor();
}

const getRandomColor = () => {
  let hexValue = [];
  for (let i = 0; i < 6; i += 1) {
    const index = Math.floor(Math.random() * colorValue.length);
    hexValue.push(colorValue[index]);
  }
  return hexValue.join('');
}

//generating a random quote function
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//A print function to print out the message.
const print = message => {
  let div = document.getElementById("quote-box");
  div.innerHTML = message;
}

//Building the quotes with this printQuote function
const printQuote = () => {
  let quote = getRandomQuote();
  let html = '';
  html += `<p class="quote"> ${quote.quote} </p>`;
  html += `<p class="source"> ${quote.source} `;
  //check to see if there a citation, year and tags
  if (quote.citation) {
    html += `<span class='citation'> ${quote.citation}<span>`;
  }
  if (quote.year) {
    html += `<span class="year"> ${quote.year}</span>`;
  }
  if (quote.tags) {
    html += `<span class ="tags"> ${quote.tags} </span>`;
  }
  html += `</p>`;
  //print the quote to screen.
  print(html);
  randomBackgroundColor();
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
