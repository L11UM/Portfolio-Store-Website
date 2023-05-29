// Get the navigation menu element
const menu = document.querySelector('.menu');

// Toggle the active class on the menu when the menu button is clicked
function toggleMenu() {
  menu.classList.toggle('active');
}

// Add event listener to the menu button for click events
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.logo img');
  menuButton.addEventListener('click', toggleMenu);
});

// Close the menu when a menu item is clicked
const menuItems = menu.querySelectorAll('a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});