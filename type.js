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
    .pause(5800)
    .delete(3)
    .pause(500)
    .type('백 수').go();

// Job Title
new TypeIt('.jobTitle', {
    speed: 120,
    cursor: false
})
    .pause(5200)
    .delete()
    .go();

// Phone Link 타이핑 효과
new TypeIt('.phone-link', {
    speed: 100,
    cursor: false,
    afterComplete: function () {
        document.querySelector('.phone-link').setAttribute('href', `tel:${set.phoneNumber}`);

        // Email Link 타이핑 효과 시작
        document.querySelector('.email-link').style.visibility = 'visible'; // 다음 링크 보이기
        new TypeIt('.email-link', {
            speed: 100,
            cursor: false,
            afterComplete: function () {
                document.querySelector('.email-link').setAttribute('href', `mailto:${set.emailAddress}`);

                // Website Link 타이핑 효과 시작
                document.querySelector('.website-link').style.visibility = 'visible'; // 다음 링크 보이기
                new TypeIt('.website-link', {
                    speed: 100,
                    cursor: false,
                    afterComplete: function () {
                        document.querySelector('.website-link').setAttribute('href', set.websiteURL);
                    }
                }).go();
            }
        }).go();
    }
}).go();