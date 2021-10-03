//carousel

let myFlipster = $('.my-flipster').flipster({
    itemContainer: 'ul',
    itemSelector: 'li',
    start: 'center',
    fadeIn: 400,
    loop: true,
    autoplay: 2500,
    pauseOnHover: true,
    style: 'coverflow',
    spacing: -0.6,
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap
    click: true,
    keyboard: true,
    scrollwheel: true,
    touch: true,
    nav: false,
    buttons: true,
    buttonPrev: 'Previous',
    buttonNext: 'Next',
    onItemSwitch: false
});
