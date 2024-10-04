'use strict';

// Full Name
new TypeIt('.fullName', {
    speed: 100,
    cursor: false,
    beforeString: (instance) => {
        document.querySelector('.fullName').style.opacity = '1';
    },
    afterComplete: function () {
        // Position 타이핑 효과 시작
        new TypeIt('.position', {
            speed: 100,
            cursor: false,
            beforeString: (instance) => {
                document.querySelector('.position').style.opacity = '1';
            },
            afterComplete: function () {
                // Job Title 타이핑 효과 시작
                new TypeIt('.jobTitle', {
                    speed: 100,
                    cursor: false,
                    beforeString: (instance) => {
                        document.querySelector('.jobTitle').style.opacity = '1';
                    },
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
        // Email Link 타이핑 효과 시작
        document.querySelector('.email-link').style.opacity = '1';
        new TypeIt('.email-link', {
            speed: 50,
            cursor: false,
            afterComplete: function () {

                // Website Link 타이핑 효과 시작
                document.querySelector('.website-link').style.opacity = '1';
                new TypeIt('.website-link', {
                    speed: 50,
                    cursor: false,
                    afterComplete: function () {
                        document.querySelector('.textContainer').style.width = '';
                    }
                }).go();
            }
        }).go();
    }
}).go();