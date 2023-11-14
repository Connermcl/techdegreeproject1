/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes =  [ 
  {
     quote: "All our dreams can come true, if we have the courage to pursue them.", 
    
     source: "Walt Disney",
  },

{
  quote:"Creativity is seeing what others see and thinking what no one else ever thought.",

  source: "Albert Einstein",
},
 
{
   quote: "Mankind Was Born On Earth. It Was Never Meant To Die Here.",
    
    source:"Matthew McConaughey", 
    
    citation: "Interstellar",
    
    year: 2014,
//for meet expectation : TAGS
    tags: [
"Astrology",
"Planets",
"Adventure",
"Thriller",
"Alright,Alright, Alrighttttttt",
"Matt Damon",
"Matthew McConaughey",
 ],

  },
  
  {
    quote: "An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.",
    
    source: "Leonardo Dicaprio",
   
    citation: "Inception",
    
    year: 2010 
  
  
  },

  {
  quote: "The two most powerful warriors are patience and time.",
    
  source:"Leo Tolstoy", 

  citation: "War and Peace.",
   
  year: 1867,
  },

{
quote: "You dont know about real loss, cause it only occurs when youve loved something more than you love yourself.",

source: "Robin Williams",

citation: "Good Will Hunting", 

year: 1997,
},
 ];

/***
 * `getRandomQuote` function
***/


function getRandomQuote() {

let randomIndex = Math.floor(Math.random() * quotes.length);

return quotes[randomIndex];
}

//Background Color/Random Color

const randomColor = () => Math.floor(Math.random() *256);
function BGColor() {
const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
document.body.style.backgroundColor = color;
}


/***
 * `printQuote` function
***/
 
function printQuote() {
let randomQuote = getRandomQuote();

let htmlString = 

`<p class = "randomQuote" >${randomQuote.quote} </p>
 <p class = "source">${randomQuote.source}</p>`;


if(Object.keys(randomQuote).includes("citation")) {
htmlString += `<span class = "citation">${randomQuote.citation}</span>`;
}

if(Object.keys(randomQuote).includes("year")) {
htmlString += `<span class = "year">${randomQuote.year}</span>`;
}

htmlString += "</p>"

//Adding if statement for tags

if(Object.keys(randomQuote).includes("tags")) {
  htmlString += `<span class = "tags">${randomQuote.tags.join(', ' )}</span>`;
  }

document.getElementById("quote-box").innerHTML = htmlString;
BGColor();
}

//Refresh quote every 20 Seconds

setInterval(printQuote,20000);





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);