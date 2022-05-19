const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  //for each string in tutorials, properly case the string
  const capitalizedTutorials = tutorials.map(properCaseThis);
  return capitalizedTutorials;
}

//capitalizes every word in string
function properCaseThis(thing){
  //create array "words" of individual words in title "thing"
  const words = thing.split(" ");
  let newThing = "";
  for (let word of words){
    //capitalize first character of word
    const newWord = word.charAt(0).toUpperCase() + word.substr(1);
    //add capitalized word and a whitespace to new string "newThing"
    newThing = newThing.concat(newWord + " ");
  }
  //return capitalized string with white space removed from ends
  return newThing.trim();
}