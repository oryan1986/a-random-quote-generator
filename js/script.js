/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quotes = [
  {
    quote: 'Our imagination is the only limit to what we can hope to have in the future.',
    source: 'Charles Kettering',
    citation: 'FaceBook',
    year: ''
  },
  {
    quote: 'Alone we can do so little; together we can do so much',
    source: 'Helen Keller',
    citation: '',
    year: ''
  },
  {
    quote: 'Words can inspire, thoughts can provoke, but only action truly brings you closer to your dreams. ',
    source: 'Brad Sugars',
    citation: '',
    year: ''
  },
  {
    quote: 'Quitters never win. Winners never quit!',
    source: 'Dr. Irene C. Kassorla',
    citation: '',
    year: '2019'
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: ''
  }
]




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
  // build the HTML.
  let html = '';
  html += `<p class="quote"> ${quote.quote} </p>`;
  html += `<p class="source"> ${quote.source} `;
  //check to see if there a citation and year
  //if so add it.
  if (quote.citation) {
    html += `<span class='citation'> ${quote.citation}<span>`;
  }
  if (quote.year) {
    html += `<span class="year"> ${quote.year}</span>`;
  }
  html += `</p>`;
  //print the quote to screen.
  print(html);
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
let newQuote;
const changeQuote = () => {
  newQuote = setInterval(printQuote, 20000);
}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);
