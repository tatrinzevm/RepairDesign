/*document.addEventListener('DOMContentLoaded', function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const modalClose = document.querySelector('.modal__close')
  const switchModal = () => {
    modal.classList.toggle('modal--visibility');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  document.addEventListener('click', function (event) {
    if(modal.classList.contains('modal--visibility')) {
      if(event.target.classList.contains('modal')) {
        switchModal();
      }
    }
  });

  document.addEventListener('keydown', function (event) {
    if(modal.classList.contains('modal--visibility') && event.keyCode == 27) {
      switchModal();
    }
  });

  modalClose.addEventListener('click', switchModal);
});*/
/*Переписываем функционал с применением библиотеки jQuery*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      scrollUpBtn = $('.button__scroll-up__flex-block');
  // scrollUpBtn.removeClass(0);
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visibility');
  });

  /*Привязка на кнопку отслеживания события click, которое вызывает открытие модального окна*/
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visibility');
  });

  /*Обработчик события click на кнопку закрытия модального окна. После */

  $(document).on('click', function (evt) {
    if(evt.target.classList.contains('modal')) {
      modal.toggleClass('modal--visibility');
    }
  });

  $(document).on('keydown', function (evt) {
    console.dir(evt.keyCode);
    if(!modal.is(':hidden') && evt.keyCode == 27) {
      modal.toggleClass('modal--visibility');
    }
  });

  $(window).on('scroll', function () {
    if($(window).scrollTop()>100) {
      scrollUpBtn.removeClass('button__scroll-up__flex-block--hidden');
    } else {
      scrollUpBtn.addClass('button__scroll-up__flex-block--hidden');
    }
  });

  scrollUpBtn.on('click', function () {
    $("html,body").animate({scrollTop:0},500);
  });
});