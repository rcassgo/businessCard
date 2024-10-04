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


function setInitialContainerWidth() {
    const textContainer = document.querySelector('.textContainer');
    const elements = textContainer.querySelectorAll('span, a');

    let maxWidth = 0;

    elements.forEach((element) => {
        const elementWidth = element.offsetWidth; // 각 요소의 너비 계산
        if (elementWidth > maxWidth) {
            maxWidth = elementWidth; // 가장 큰 너비를 저장
        }
    });
    textContainer.style.width = `${maxWidth}px`; // 가장 큰 요소의 너비로 textContainer의 너비 설정
}

// 페이지 로드 시 실행
window.addEventListener('load', setInitialContainerWidth);
const businessCard = document.querySelector('.businessCard');
let originalHTML = businessCard.innerHTML;
let isCleared = false;


const backSide = document.createElement('div');
backSide.classList.add('businessCard-back');
backSide.innerHTML = `
    <h2 class="back-main"></h2>
    <p class="back-des"></p>
`;

businessCard.addEventListener('click', (event) => {
    // 클릭된 요소가 전화번호, 이메일, 소셜 링크가 아닌 경우에만 뒷면으로 이동
    if (!event.target.closest('.phone-link') &&
        !event.target.closest('.email-link') &&
        !event.target.closest('.website-link') &&
        !event.target.closest('.socialLinks a')) {

        if (isCleared) {
            businessCard.innerHTML = originalHTML;
            businessCard.classList.remove('flipped');
            isCleared = false;
        } else {
            originalHTML = businessCard.innerHTML;
            businessCard.innerHTML = '';
            businessCard.appendChild(backSide);
            businessCard.classList.add('flipped');
            document.querySelector(".back-main").textContent = set.backMain;
            document.querySelector(".back-des").textContent = set.backDes;
            isCleared = true;
        }
    }
});
