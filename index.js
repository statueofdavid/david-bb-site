const svg = document.getElementById('brain');
const containerRect = svg.getBoundingClientRect();
const regions = document.querySelectorAll('#passion, #plan, #action, #feel, #create, #vision, #listen'); 

let originalPositions = {};

let selectedElement = null;
let initialX, initialY;
let offsetX, offsetY;


function storeInitialPositions() {
  const initialPositions = {}; // Object to store initial positions

  regions.forEach(region => {
    const regionId = region.id;
    const regionRect = region.getBBox();

    // Store the initial x and y coordinates (in viewbox units)
    initialPositions[regionId] = {
      x: regionRect.x,
      y: regionRect.y
    };
  });

  return initialPositions;
}

originalPositions = storeInitialPositions(); 

console.log(originalPositions);

function scatterRegions() {
  regions.forEach(region => {
    const regionRect = region.getBBox();

    const maxX = containerRect.width - (regionRect.width * (containerRect.width / 990));
    let randomX = Math.random() * maxX;

    const maxY = containerRect.height - (regionRect.height * (containerRect.height / 1050));
    let randomY = Math.random() * maxY;
    region.style.transform = `translate(${randomX / 100}px, ${maxY / 100}px)`;

    const centerX = regionRect.x + (regionRect.width / 2); 
    const centerY = regionRect.y + (regionRect.height / 2);
    
    setTimeout(() => {
      const randomRotation = (Math.random() * 1440) - 720;
      region.style.transform += `rotate(${randomRotation}deg)`;
      region.style.transformOrigin = `${centerX}px ${centerY}px`;
    }, 10);
  });
}

setTimeout(scatterRegions, 10000); 


function startDrag(event) {
  selectedElement = event.target;

  const parentRect = selectedElement.parentNode.getBoundingClientRect();
  offsetX = (event.clientX || event.touches[0].clientX) - parentRect.left;
  offsetY = (event.clientY || event.touches[0].clientY) - parentRect.top;

  selectedElement.parentNode.appendChild(selectedElement); // Bring to front
  console.log(`dragging ${selectedElement.id}`);
}

function drag(event) {
  if (!selectedElement) return;
  const x = (event.clientX || event.touches[0].clientX) - offsetX;
  const y = (event.clientY || event.touches[0].clientY) - offsetY;
  selectedElement.style.transform = `translate(${x}px, ${y}px)`;
}

function endDrag() {
  selectedElement = null;
  checkPuzzleSolved();
}

regions.forEach(region => {
  region.addEventListener('mousedown', startDrag);
  region.addEventListener('touchstart', startDrag);
});

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

function checkPuzzleSolved() {
  console.log("checking if puzzle is solved")

  let solved = true; // Assume the puzzle is solved initially

  regions.forEach(region => {
    const regionId = region.id;
    console.log(regionId);
    const target = originalPositions[regionId];

    // Get the region's current position
    const currentRegionLocation = region.getBBox();
    const regionX = currentRegionLocation.x;
    const regionY = currentRegionLocation.y;

    console.log(`Is ${target.x}, ${target.y} the same as ${regionX}, ${regionY}`);

    // Check if the region is within a certain distance of its target position
    const tolerance = 20; // Allowable error margin in pixels
    if (
      Math.abs(regionX - target.x) > tolerance || 
      Math.abs(regionY - target.y) > tolerance
    ) {
      solved = false; // If any region is out of place, the puzzle is not solved
      console.log("not solved");
      return; // No need to check further
    }
  });

  if (solved) {
    console.log("Puzzle solved!");
    // Add your code here to handle the puzzle completion (e.g., animation, message, etc.)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const header = document.querySelector('header');

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const headerNavigationMenu = document.querySelector('.header-menu');

  const followerMenu = document.querySelector('.follow-me');
  const footerNavigationMenu = document.querySelector('.footer-menu');

  //Menu Behavior
  hamburgerMenu.addEventListener('click', () => {
    headerNavigationMenu.classList.toggle('active');
    footerNavigationMenu.classList.remove('active');
    footerNavigationMenu.classList.toggle('hidden');
  });

  followerMenu.addEventListener('click', () => {
    footerNavigationMenu.classList.toggle('active');
    headerNavigationMenu.classList.remove('active');
    headerNavigationMenu.classList.toggle('hidden');
  });
});
