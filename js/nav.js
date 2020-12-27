// Below toggles between hiding and showing nav menu on click of #navbtn
const navToggle = document.getElementById('navbtn');
const navDropdown = document.getElementById('nav-dropdown');
const menuItems = document.getElementsByClassName('menu-item')


// const menuItem = [];


// console.log(menuItems);
// const menuItem = document.querySelectorAll(".dropdown-content > a");
// const menuCount = menuItem.length;

navToggle.addEventListener('click', e => {

  console.log(e);
  navDropdown.classList.toggle('nav-open');

  // ***** This is to animate the individual menu items *****
  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.toggle('open-menu-item');
  }

});

// for (var i = 0; i < menuCount; i++) {
//   menuItem[i].addEventListener('click', () => {
//     menuItem[i].style.cssText = "outline: unset;";
//   });
// }

//  Close the dropdown menu if the user clicks outside of #navbtn or menu

window.onclick = function (event) {
  if (!event.target.matches('#navbarDropdown')) {
    navDropdown.classList.remove('nav-open');

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('open-menu-item');
    }
  }
}

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('nav-open')) {
//         openDropdown.classList.remove('nav-open');
//       }
//     }
//   }
// }

// Below closes nav with esc key
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    navDropdown.classList.remove('nav-open');

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove('open-menu-item');
    }

  }
});

// The below function traps focus inside (open) nav menu