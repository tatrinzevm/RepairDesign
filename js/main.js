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

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visibility');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visibility');
  });

  $(document).on('click', function (evt) {
    if(!modal.is(':hidden')) {
      if(evt.target.classList.contains('modal')) {
        modal.toggleClass('modal--visibility');
      }
    } 
  });

  $(document).on('keydown', function (evt) {
    console.dir(evt.keyCode);
    if(!modal.is(':hidden') && evt.keyCode == 27) {
      modal.toggleClass('modal--visibility');
    }
  });
});