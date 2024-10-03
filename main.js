import * as set from './setting.js';

document.querySelector(".profileImage").src = set.img;

document.querySelector(".fullName").textContent = set.name;
document.querySelector(".position").textContent = set.position;
document.querySelector(".jobTitle").textContent = set.job;

document.querySelector(".phone-link").href = `tel:${set.phoneNumber}`;
document.querySelector(".phone-link").textContent = set.phoneNumber;

document.querySelector(".email-link").href = `mailto:${set.emailAddress}`;
document.querySelector(".email-link").textContent = set.emailAddress;

document.querySelector(".website-link").href = set.websiteURL;
document.querySelector(".website-link").textContent = set.websiteURL;

document.querySelector(".facebook-icon").src = set.facebookImg;
document.querySelector(".instargram-icon").src = set.instargramImg;
document.querySelector(".x-icon").src = set.xImg;

document.querySelector(".facebook-link").href = set.facebook;
document.querySelector(".instagram-link").href = set.instargram;
document.querySelector(".x-link").href = set.x;