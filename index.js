const svg = document.getElementById('brain');
const regions = document.querySelectorAll('#passion, #plan, #action, #feel, #create, #vision, #listen');

let originalPositions = {};

let selectedElement = null;
let initialX, initialY;
let offsetX, offsetY;

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

  return initialPositions;
}

function scatterRegions() {
  const containerRect = svg.getBBox();
  
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

  const containerRect = svg.getBoundingClientRect();
  const regionRect = selectedElement.getBoundingClientRect();

  const maxX = window.innerWidth - regionRect.width;
  const maxY = window.innerHeight - regionRect.height;

  let x = (event.clientX || event.touches[0].clientX) - offsetX;
  let y = (event.clientY || event.touches[0].clientY) - offsetY;
  
    console.log("Container Rect:", containerRect);
    console.log("Region Rect:", regionRect);
    console.log("maxX:", maxX, "maxY:", maxY);
    console.log("x:", x, "y:", y);

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  selectedElement.style.transform = `translate(${x}px, ${y}px)`;
  event.preventDefault();
}

function endDrag() {
      if (selectedElement) {
        const containerRect = svg.getBoundingClientRect();
        const regionRect = selectedElement.getBoundingClientRect();

        const maxX = svg.offsetWidth - regionRect.width;
        const maxY = svg.offsetHeight - regionRect.height;

        let currentX = regionRect.left - containerRect.left;
        let currentY = regionRect.top - containerRect.top;

        if (currentX < 0 || currentX > maxX || currentY < 0 || currentY > maxY) {
            const targetX = Math.max(0, Math.min(currentX, maxX));
            const targetY = Math.max(0, Math.min(currentY, maxY));

            selectedElement.style.transition = "transform 0.2s ease";
            selectedElement.style.transform = `translate(${targetX}px, ${targetY}px)`;

            selectedElement.addEventListener("transitionend", () => {
              selectedElement.style.transition = "";
	      const updatedRegionRect = selectedElement.getBoundingClientRect(); 

                // Adjust position based on the updated regionRect
                const updatedX = updatedRegionRect.left - containerRect.left;
                const updatedY = updatedRegionRect.top - containerRect.top;
                const finalX = Math.max(0, Math.min(updatedX, maxX));
                const finalY = Math.max(0, Math.min(updatedY, maxY));

		selectedElement.style.transition = "transform 0.1s ease";
                selectedElement.style.transform = `translate(${finalX}px, ${finalY}px)`;
            }, { once: true });
        }
    }

  selectedElement = null;
  checkPuzzleSolved();
}

function checkPuzzleSolved() {
  console.log("checking if puzzle is solved")

  let solved = true;

  regions.forEach(region => {
    const regionId = region.id;
    const target = originalPositions[regionId];

    const currentRegionLocation = region.getBBox();
    const regionX = currentRegionLocation.x;
    const regionY = currentRegionLocation.y;

    const tolerance = 20; 
    if (
      Math.abs(regionX - target.x) > tolerance || 
      Math.abs(regionY - target.y) > tolerance
    ) {
      solved = false;
      return;
    }
  });

  if (solved) {
  }
}

