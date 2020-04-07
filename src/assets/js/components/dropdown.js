$(function () {

    'use strict';

    var dropdownLink = $('.dropdown-link');

    dropdownLink.on('click', function (e) {
        e.preventDefault();
        var thisDropdownContent = $(this).attr('href');
        $(this).toggleClass('active');
        $(thisDropdownContent).slideToggle();
    })

});