

const header = document.querySelector('header');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuContent = document.querySelector('.menu-content');

hamburgerMenu.addEventListener('click', () => {
  let invisible = getComputedStyle(menuContent).display;
  console.log(invisible)

  const modalHeader = document.getElementById("modal-header");
  const modalText = document.getElementById("modal-text");
  
  if (invisible) {
    menuContent.classList.toggle('show');  // Toggle 'show' class for visibility
  } else {
    menuContent.classList.toggle('none');
  }
});

const footer = document.querySelector('footer');

const greyMatterPath = document.getElementById("grey-matter");
const greyMatterSvg = greyMatterPath.getAttribute('d');
console.log(`SVG d string: ${greyMatterSvg}`);

greyMatterPath.addEventListener("click", function() {
  console.log("clicked"); 
  showModal();
});

const modal = document.getElementById("modal");
const modalHeader = document.getElementById("modal-header");
const modalText = document.getElementById("modal-text");

function showModal() {
  modalHeader.innerHTML = `This is my Brain on the Internet`;
  modalText.innerHTML += `You clicked!`;
  modal.style.display = "block"; 
  header.style.display = 'none';
  footer.style.display = 'none';
}

// Function to close the modal when the button is clicked
function closeModal() {
  modal.style.display = "none"; // Hide modal
  modalText.innerHTML = "";
  
  header.style.display = 'block';
  footer.style.display = 'block';
}

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
