/* 
 * api.monkeytype.com/documentation
 * */

console.log("requesting personal bests from monkeytype.");

const headers = { 'Authorization': 'NjY2YjJjNTFlZGU4NTdmOTcyZTUwNjc5Lm5xS0Fxa1QyUzctdWlOYjk5U3lHUXkxanU1bER1THJJ' };
fetch('https://api.monkey.com/users/personalBests', { headers })
  .then(response => response.json())
  .then(data => element.innerHTML = data.name);

console.log("done.")
