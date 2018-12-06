const quemsaoSection = document.querySelector('#quemsao');
const contactSection = document.querySelector("#contact");
const quemsaoDescriptionContent = document.querySelector("#description-content");
const contactBirds = document.querySelector("#contact-bird-image>img");

function showContent() {

    if (window.pageYOffset >= (quemsaoSection.offsetHeight - 300)) {
      quemsaoDescriptionContent.classList.add('show-content');
    } 
    
    if (window.pageYOffset >= (contactSection.offsetHeight + 250)) {
        contactBirds.classList.add("show-img");
    }
}