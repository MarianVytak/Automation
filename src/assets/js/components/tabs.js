$(function () {

    'use strict';

    // Tabs
    let tab = $('.tabs-link');
    let tabLink = '.tabs-link';
    let tabContent = '.tabs-content';

    tab.on('click', function (e) {
        e.preventDefault();

        let thisTab = $(this).attr('href');
        let thisContent = $(this).attr('data-target');

        $(thisContent + ' ' + tabLink).removeClass('active');
        $(thisContent + ' ' + tabContent).removeClass('active');
        $(this).addClass('active');
        $(thisContent + ' ' + thisTab).addClass('active');
    });

});