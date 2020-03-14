document.addEventListener('DOMContentLoaded', function(event) {
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
});