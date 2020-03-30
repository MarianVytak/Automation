$(function () {

    'use strict';

    // View All
    let viewAll = $('.view-all');
    viewAll.on('click', function (e) {
        e.preventDefault();
        let viewAllText = $(this).text();
        if (viewAllText === 'Развернуть') {
            $(this).text('Свернуть');
        } else if (viewAllText === 'Свернуть') {
            $(this).text('Развернуть');
        }
    });



    // Hamburger
    let hamburger = $('.hamburger');
    hamburger.on('click', function(){
        hamburger.toggleClass('hamburger-active');
        $('.header__mid').slideToggle();
        $('.header__bot').slideToggle();
    });

});