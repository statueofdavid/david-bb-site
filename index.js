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
const greyMatterPath = document.getElementById("grey-matter");
const greyMatterSvg = greyMatterPath.getAttribute('d');

const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const menuContent = document.querySelector('.menu-content');

const modal = document.getElementById("modal");
const modalHeader = document.getElementById("modal-header");
const modalText = document.getElementById("modal-text");

// Adjusts the brain size as viewport is adjusted
function centerSVG() {
  const svgWidth = greyMatterPath.clientWidth;
  const svgHeight = greyMatterPath.clientHeight;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const svgCenterX = svgWidth / 2;
  const svgCenterY = svgHeight / 2;
  const viewportCenterX = viewportWidth / 2;
  const viewportCenterY = viewportHeight / 2;

  greyMatterPath.style.position = "absolute"; // Make sure SVG is positioned
  greyMatterPath.style.top = `${viewportCenterY - svgCenterY}px`;
  greyMatterPath.style.left = `${viewportCenterX - svgCenterX}px`;
};

// Call the function once initially to center the SVG on page load
window.addEventListener("load", centerSVG);
window.addEventListener("resize", centerSVG);

// Hamburger Menu Behavior
console.log(`MenuToggle: ${menuToggle}`);
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  if (menuToggle.style.visibility == 'visible') {
    menuContent.style.visibility = 'hidden'; 
    menuContent.style.opacity = 0;
    console.log(menuContent.style.visibility);
  } else {
    menuContent.style.visibility = 'visible';
    menuContent.style.opacity = 1;
    menuToggle.classList.toggle('active');
    console.log(menuContent.style.visibility);
  }
});

// Brain Outline Behavior
console.log(`SVG d string: ${greyMatterSvg}`);
greyMatterPath.addEventListener("click", function() {
  console.log("clicked"); 
  showModal();
});

/* helper functions */
// overlays the modal over header,main,footer
function showModal() {
  modalHeader.innerHTML = `This is my Brain on the Internet`;
  modalText.innerHTML += `You clicked!`;
  modal.style.display = "block";
  modal.style.zIndex = 1;
}

// removes the modal
function closeModal() {
  modal.style.display = "none"; // Hide modal
  modalText.innerHTML = "";
}
