/* Some Typed Thoughts for the brain's behavior 
 * 1. It will have brain sections 
 * 2. If user's cursor IS NOT on over the Grey Matter 
 *  a. Grey Matter will jiggle 
 *  (not sure what that means really but brain jiggle right)
 *  b. I think my brain should be extroverted
 *    i. start with the title[`This is My Brain on the Internet`]
 *      1. but after a few wiggles and jiggles
 *    ii. be similar to BillyBass project
 * 3. While user's cursor IS over the Grey Matter
 *  a. when it the cursor is over a region
 *    i. the region will animate (not sure how)
 *    ii. the region will emit a pixel out to other regions (0 - endOfAnimation) 
 *  c. for each region receiving a pixel must 
 *    i. emit a pixel 1/2 the received if not having previously received a pixel 
 *    ii. emit a pixel 2x the received if this region is the origin of the pixel 
 **/

const footer = document.querySelector('footer');
const header = document.querySelector('header');

const hamburgerMenu = document.querySelector('.hamburger-menu');
const headerNavigationMenu = document.querySelector('.header-menu');

const followerMenu = document.querySelector('.follow-me');
const footerNavigationMenu = document.querySelector('.footer-menu');

//Menu Behavior
hamburgerMenu.addEventListener('click', () => {
  headerNavigationMenu.classList.toggle('active');
});

followerMenu.addEventListener('click', () => {
  footerNavigationMenu.classList.toggle('active');
});
