function getRandomCatchPhrase() {
  const randomIndex = 
    Math.floor(Math.random() * catchPhrases.length);
  return catchPhrases[randomIndex];
};

let catchPhrases = [
  "be a brother",
  "be a dad",
  "be a friend",
  "be a human",
  "be a husband",
  "be a son",
  "build digital products",
  "celebrate the fruits of any labor",
  "do things with my hands",
  "find new adventures",
  "solve problems",
];

const splitFlapElements = 
  document.querySelectorAll('[class^="posi-"]');
  console.log(splitFlapElements);

splitFlapElements.forEach(element => {

  element.addEventListener('mouseover', () => {
    console.log("mousing over");

    const catchPhrase = getRandomCatchPhrase();
    console.log("Now displaying" + catchPhrase)
    
    switch(catchPhrase) {
      case catchPhrases[0]:
        console.log(catchPhrase);
        break;
      case catchPhrases[1]:
        console.log(catchPhrase);
        break;
      case catchPhrases[2]:
        console.log(catchPhrase);
        break;
      case catchPhrases[3]:
        console.log(catchPhrase);
        break;
      case catchPhrases[4]:
        console.log(catchPhrase);
        break;
      case catchPhrases[5]:
        console.log(catchPhrase);
        break;
      case catchPhrases[6]:
        console.log(catchPhrase);
        break;
      case catchPhrases[7]:
        console.log(catchPhrase);
        break;
      case catchPhrases[8]:
        console.log(catchPhrase);
        break;
      case catchPhrases[9]:
        console.log(catchPhrase);
        break;
      default:
        console.log('should never happen but nice to have.');
    }

  });
});
