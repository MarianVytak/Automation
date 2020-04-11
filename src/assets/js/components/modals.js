$(function () {

    'use strict';

    let modal = $('.modal');
    let modalLink = $('.js-modal-link');
    let modalClose = $('.modal__close');
    let overlayModal = $('.overlay-modal');

    modalLink.on('click', function (e) {
        e.preventDefault();
        let thisModal = $(this).attr('href');
        overlayModal.addClass('active');
        $(thisModal).show();
        $('html, body').addClass('hidden');
    });
    modalClose.on('click', function (e) {
        e.preventDefault();
        overlayModal.removeClass('active');
        modal.hide();
        $('html, body').removeClass('hidden');
    });
    overlayModal.on('click', function (e) {
        e.preventDefault();
        overlayModal.removeClass('active');
        modal.hide();
        $('html, body').removeClass('hidden');
    });

});