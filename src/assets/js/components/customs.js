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



    // Menu
    let menuLink = $('.js-menu-link'),
        menuClose = $('.menu-close'),
        overlay = $('.overlay');
    menuLink.on('click', function (e) {
        e.preventDefault();
        let thisMenuLink = $(this).attr('data-target');
        $(thisMenuLink).addClass('active');
        overlay.addClass('active');
        $('html, body').addClass('hidden');
    });
    menuClose.on('click', function (e) {
        e.preventDefault();
        let thisMenuClose = $(this).attr('data-target');
        $(thisMenuClose).removeClass('active');
        overlay.removeClass('active');
        $('html, body').removeClass('hidden');
    });
    overlay.on('click', function (e) {
        e.preventDefault();
        $('.js-menu').removeClass('active');
        overlay.removeClass('active');
        $('html, body').removeClass('hidden');
    });



    // Mobile Search
    $('.header__bot_mobile_search_icon').on('click', function (e) {
        e.preventDefault();
        $('.header__bot_mobile').addClass('active');
    });
    $('.header__bot_mobile_search_close').on('click', function (e) {
        e.preventDefault();
        $('.header__bot_mobile').removeClass('active');
    });

});