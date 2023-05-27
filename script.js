// Dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.dropdown');
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var dropdownContent = this.querySelector('.dropdown-content');
      dropdownContent.classList.toggle('show');
    });
  }
});

// Interactive buttons
var buttons = document.querySelectorAll('.cta-button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    alert('Button clicked!');
  });
}