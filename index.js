const svg = document.getElementById('brain');
const regions = document.querySelectorAll('#passion, #plan, #action, #feel, #create, #vision, #listen');

let originalPositions = {};

let selectedElement = null;
let initialX, initialY;
let offsetX, offsetY;

/* menu behavior  */
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const header = document.querySelector('header');

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const headerNavigationMenu = document.querySelector('.header-menu');

  const followerMenu = document.querySelector('.follow-me');
  const footerNavigationMenu = document.querySelector('.footer-menu');

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

/* drag-drop behavior */
if(svg != undefined) {  
  originalPositions = storeInitialPositions();
  setTimeout(scatterRegions, 2000); 
  
  regions.forEach(region => {
    region.addEventListener('mousedown', startDrag);
    region.addEventListener('touchstart', startDrag);
  });

  document.addEventListener('mousemove', drag, { passive: false });
  document.addEventListener('touchmove', drag, { passive: false });

  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);
}


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

  console.log(`start positions for each brain section: ${JSON.stringify(initialPositions)}`);
  return initialPositions;
}

function scatterRegions() {
  const containerRect = svg.getBoundingClientRect();
  console.log(`board size dimensions: ${JSON.stringify(containerRect.height)}, ${JSON.stringify(containerRect.width)}`);

  regions.forEach(region => {
    console.log(`scattering: ${region.id}`);
    const regionRect = region.getBoundingClientRect();
    const regionBounds = region.getBBox();
    console.log(`region box dimensions: ${JSON.stringify(regionRect.height)}, ${JSON.stringify(regionRect.width)}`);

    const maxX = containerRect.width;
    let randomX = Math.random() * maxX;

    const maxY = containerRect.height;
    let randomY = Math.random() * maxY;

    region.style.transform = `translate(${randomX / 15}px, ${maxY / 2}px)`;

    const centerX = regionBounds.x + (regionBounds.width / 2);
    const centerY = regionBounds.y + (regionBounds.height / 2);

    setTimeout(() => {
      const randomRotation = (Math.random() * 1440) - 720;
      region.style.transform += `rotate(${randomRotation}deg)`;
      region.style.transformOrigin = `${centerX}px ${centerY}px`;
    }, 10);
  });
}

function startDrag(event) {
  selectedElement = event.target;

  const parentRect = selectedElement.parentNode.getBoundingClientRect();

  offsetX = (event.clientX || event.touches[0].clientX) - parentRect.left;
  offsetY = (event.clientY || event.touches[0].clientY) - parentRect.top;

  selectedElement.parentNode.appendChild(selectedElement); 
  event.preventDefault();
  console.log(`dragging ${selectedElement.id}`);
}

function drag(event) {
  if (!selectedElement) return;
  event.preventDefault();
}

function endDrag() {
  selectedElement = null;
}
