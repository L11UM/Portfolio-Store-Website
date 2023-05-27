document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    
    // Toggle dropdown menu
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function() {
        this.classList.toggle('active');
        var dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.classList.toggle('show');
      });
    });
    
    // Interactive buttons
    var buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Button clicked!');
      });
    });
  });