import * as set from './setting.js';

document.querySelector(".profileImage").src = set.img;

document.querySelector(".fullName").textContent = set.name;
document.querySelector(".position").textContent = set.position;
document.querySelector(".jobTitle").textContent = set.job;

document.querySelector(".phone-link").href = `tel:${set.phoneNumber}`;
document.querySelector(".phone-link").textContent = set.phoneNumber;

document.querySelector(".email-link").href = `mailto:${set.emailAddress}`;
document.querySelector(".email-link").textContent = set.emailAddress;

document.querySelector(".website-link").href = set.websiteURL__Real;
document.querySelector(".website-link").textContent = set.websiteURL__LOOK;

document.querySelector(".facebook-icon").src = set.facebookImg;
document.querySelector(".instargram-icon").src = set.instargramImg;
document.querySelector(".x-icon").src = set.xImg;

document.querySelector(".facebook-link").href = set.facebook;
document.querySelector(".instagram-link").href = set.instargram;
document.querySelector(".x-link").href = set.x;

const businessCard = document.querySelector('.businessCard');
let originalHTML = businessCard.innerHTML;
let isCleared = false;

businessCard.addEventListener('click', (event) => {
    if (!event.target.closest('.phone-link') &&
        !event.target.closest('.email-link') &&
        !event.target.closest('.website-link') &&
        !event.target.closest('.socialLinks a')) {

        if (isCleared) {
            businessCard.classList.remove('flipped');
            isCleared = false;
        } else {
            originalHTML = businessCard.innerHTML;
            // businessCard.innerHTML = '';
            businessCard.classList.add('flipped');
            document.querySelector(".back-main").textContent = set.backMain;
            document.querySelector(".back-jobTitle").textContent = set.backjobTitle;
            isCleared = true;
        }
    }
});

function setInitialContainerWidth() {
    const textContainer = document.querySelector('.textContainer');
    const containerWidth = textContainer.offsetWidth;
    textContainer.style.width = `${containerWidth}px`;
}
window.addEventListener('load', setInitialContainerWidth);