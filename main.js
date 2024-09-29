import * as set from './setting.js';

document.querySelector(".name").textContent = set.name;
document.querySelector(".job").textContent = set.job;

document.querySelector(".number__a").href = `tel:${set.phoneNumber}`;
document.querySelector(".number__a").textContent = set.phoneNumber;

document.querySelector(".email__a").href = `mailto:${set.emailAddress}`;
document.querySelector(".email__a").textContent = set.emailAddress;

document.querySelector(".site__a").href = set.websiteURL;
document.querySelector(".site__a").textContent = set.websiteURL;