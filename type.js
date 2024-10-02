'use strict';

// setting.js에서 필요한 데이터 임포트
import * as set from './setting.js';

// Full Name
new TypeIt('.fullName', {
    speed: 100,
    cursor: false,
    beforeString: (instance) => {
        document.querySelector('.fullName').style.visibility = 'visible';
    },
    afterComplete: function () {
        // Position 타이핑 효과 시작
        new TypeIt('.position', {
            speed: 100,
            cursor: false,
            beforeString: (instance) => {
                document.querySelector('.position').style.visibility = 'visible';
            },
            afterComplete: function () {
                // Job Title 타이핑 효과 시작
                new TypeIt('.jobTitle', {
                    speed: 100,
                    cursor: false,
                    beforeString: (instance) => {
                        document.querySelector('.jobTitle').style.visibility = 'visible';
                    }
                }).go();
            }
        }).go();
    }
}).go();

// Phone Link 타이핑 효과
new TypeIt('.phone-link', {
    speed: 50,
    cursor: false,
    afterComplete: function () {
        document.querySelector('.phone-link').setAttribute('href', `tel:${set.phoneNumber}`);
        // Email Link 타이핑 효과 시작
        document.querySelector('.email-link').style.visibility = 'visible'; // 다음 링크 보이기
        new TypeIt('.email-link', {
            speed: 50,
            cursor: false,
            afterComplete: function () {
                document.querySelector('.email-link').setAttribute('href', `mailto:${set.emailAddress}`);

                // Website Link 타이핑 효과 시작
                document.querySelector('.website-link').style.visibility = 'visible'; // 다음 링크 보이기
                new TypeIt('.website-link', {
                    speed: 50,
                    cursor: false,
                    afterComplete: function () {
                        const websiteLink = document.querySelector('.website-link');
                        websiteLink.setAttribute('href', set.websiteURL);
                        websiteLink.style.color = 'var(--color-info)'; // 색상 다시 설정
                    }
                }).go();
            }
        }).go();
    }
}).go();