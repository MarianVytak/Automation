$(function () {

    'use strict';

    let dropdownLink = $('.dropdown-link');
    let dropdownContent = $('.dropdown-content');

    dropdownLink.on('click', function (e) {
        e.preventDefault();
        let thisDropdownContent = $(this).attr('href');
        $(this).toggleClass('active');
        $(thisDropdownContent).slideToggle();
    })

});