'use strict';

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

// Phone Number
new TypeIt('.phone-link', {
    speed: 120,
    cursor: false
}).go();

// Email Address
new TypeIt('.email-link', {
    speed: 120,
    cursor: false
}).go();

// Website URL
new TypeIt('.website-link', {
    speed: 120,
    cursor: false
}).go();
