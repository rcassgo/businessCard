'use strict';

// setting.js에서 필요한 데이터 임포트
import * as set from './setting.js';

// Full Name
new TypeIt('.fullName', {
    speed: 120,
    cursor: false
}).go();

// Position
new TypeIt('.position', {
    speed: 250,
    cursor: false
})
    .pause(3800)
    .delete(3)
    .pause(800)
    .type('백 수').go();

// Job Title
new TypeIt('.jobTitle', {
    speed: 120,
    cursor: false
})
    .pause(3000)
    .delete(10)
    .go();

// Phone Number (타이핑은 적용하고, href는 afterComplete에서 다시 설정)
new TypeIt('.phone-link', {
    speed: 120,
    cursor: false,
    afterComplete: function () {
        document.querySelector('.phone-link').setAttribute('href', `tel:${set.phoneNumber}`);
    }
}).go();

// Email Address (타이핑은 적용하고, href는 afterComplete에서 다시 설정)
new TypeIt('.email-link', {
    speed: 120,
    cursor: false,
    afterComplete: function () {
        document.querySelector('.email-link').setAttribute('href', `mailto:${set.emailAddress}`);
    }
}).go();

// Website URL (타이핑은 적용하고, href는 afterComplete에서 다시 설정)
new TypeIt('.website-link', {
    speed: 120,
    cursor: false,
    afterComplete: function () {
        document.querySelector('.website-link').setAttribute('href', set.websiteURL);
    }
}).go();
