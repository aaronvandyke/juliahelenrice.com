// Below toggles between hiding and showing nav menu on click of #navbtn
const navToggle = document.getElementById('navbtn');
const navDropdown = document.getElementById('nav-dropdown');
const menuItems = document.getElementsByClassName('menu-item');

navToggle.addEventListener('click', () => {

    navDropdown.classList.add("dropdown-content");
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.add("menu-item-postLoad");
      menuItems[i].classList.toggle("menu-item-postLoad-toggle");
    }

    navDropdown.classList.toggle('nav-open');

  // ***** This is to animate the individual menu items *****
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('open-menu-item');
  }

});

//  Close the dropdown menu if the user clicks outside of #navbtn or menu
window.onclick = function (event) {
  if (!event.target.matches('#navbarDropdown')) {
    navDropdown.classList.remove('nav-open');

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('open-menu-item');
      menuItems[i].classList.remove('menu-item-postLoad-toggle');
    }
  }
}

// Below closes nav with esc key
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    navDropdown.classList.remove('nav-open');

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('open-menu-item');
      menuItems[i].classList.remove('menu-item-postLoad-toggle');
    }

  }
});

// The below function traps focus inside (open) nav menu