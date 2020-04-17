$(function () {

    'use strict';

    // View All
    var viewAll = $('.view-all');
    viewAll.on('click', function (e) {
        e.preventDefault();
        var viewAllText = $(this).text();
        if (viewAllText === 'Развернуть') {
            $(this).text('Свернуть');
        } else if (viewAllText === 'Свернуть') {
            $(this).text('Развернуть');
        }
    });



    // Menu
    var menuLink = $('.js-menu-link'),
        menuClose = $('.menu-close'),
        overlay = $('.overlay');
    menuLink.on('click', function (e) {
        e.preventDefault();
        var thisMenuLink = $(this).attr('data-target');
        // var scrollX = window.scrollX;
        // var scrollY = window.scrollY;
        // window.onscroll = function () { window.scrollTo(scrollX, scrollY); };
        $(thisMenuLink).addClass('active');
        overlay.addClass('active');
        $('html, body').addClass('hidden');
    });
    menuClose.on('click', function (e) {
        e.preventDefault();
        var thisMenuClose = $(this).attr('data-target');
        // window.onscroll = function () { return; };
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



    // Desktop Search
    $('.header__navigation_search_icon').on('click', function (e) {
        e.preventDefault();
        $('.header__navigation_search').addClass('active');
    });
    $('.header__navigation_search_close').on('click', function (e) {
        e.preventDefault();
        $('.header__navigation_search').removeClass('active');
    });



    // Mobile Search
    $('.mobile__menu_search_icon').on('click', function (e) {
        e.preventDefault();
        $('.mobile__menu').addClass('active');
    });
    $('.mobile__menu_search_close').on('click', function (e) {
        e.preventDefault();
        $('.mobile__menu').removeClass('active');
    });

});