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
    console.log('changing tagline to ' + catchPhrase)
    
    switch(catchPhrase) {
      case catchPhrases[0]:
        console.log(catchPhrase);
        
        splitFlapElements.forEach(value => {
          const values = value.querySelectorAll('td');
          console.log(values);
            
          values[0].parentElement.style.setProperty('--ch', '0');
          values[0].style.animation = 'none';
          values[0].style.animation = 'scroll 4s ease-in-out 1s forwards';

          values[1].parentElement.style.setProperty('--ch', '+6');
          values[1].style.animation = 'none';
          values[1].style.animation = 'scroll 4s ease-in-out 1s forwards';
            
        });
        console.log('now displaying ' + catchPhrase);

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
