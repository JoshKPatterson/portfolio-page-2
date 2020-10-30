const lightDarkButton = document.querySelector("#light-dark-button")
const body = document.querySelector('body');
const contactLis = document.querySelectorAll('.contact-li')

console.log(contactLis)

const toggleLightDark = () => {
  lightDarkButton.classList.toggle('fa-sun')
  lightDarkButton.classList.toggle('fa-moon')
  body.classList.toggle('light-mode')
  body.classList.toggle('dark-mode')
  // contactLis.classList.toggle('light-mode')
  contactLis.forEach(li => (
    li.classList.toggle('li-dark-mode'),
    li.classList.toggle('li-light-mode')
  ));
}

lightDarkButton.addEventListener('click', () => toggleLightDark());

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});