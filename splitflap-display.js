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
  addEventListener('mouseover', () => {
    const catchPhrase = getRandomCatchPhrase();
    console.log(catchPhrase);

    for(let i = 0; i < catchPhrase.length; i++) {
      const character = "?";
      splitFlapElements.children[i].textContent = character;
    }
  });
});

function getRandomCatchPhrase() {
  const randomIndex = 
    Math.floor(Math.random() * catchPhrases.length);
  return catchPhrases[randomIndex];
};
