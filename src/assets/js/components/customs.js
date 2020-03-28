$(function () {

    'use strict';

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

});