"use strict";

var lightDarkButton = document.querySelector("#light-dark-button");
var body = document.querySelector('body');
var contactLis = document.querySelectorAll('.contact-li');
console.log(contactLis);

var toggleLightDark = function toggleLightDark() {
  lightDarkButton.classList.toggle('fa-sun');
  lightDarkButton.classList.toggle('fa-moon');
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode'); // contactLis.classList.toggle('light-mode')

  contactLis.forEach(function (li) {
    return li.classList.toggle('li-dark-mode');
  });
};

lightDarkButton.addEventListener('click', function () {
  return toggleLightDark();
});