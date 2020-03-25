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
      modalSuccess = $('.modal__success'),
      modalError = $('.modal__error'),
      modalForm = $('.modal__form'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      scrollUpBtn = $('.button__scroll-up__flex-block');
  scrollUpBtn.addClass('button__scroll-up__flex-block--hidden');
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visibility');
  });

  /*Привязка на кнопку отслеживания события click, которое вызывает открытие модального окна*/
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visibility');
  });

  /*Обработчик события click на кнопку закрытия модального окна.*/

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
      scrollUpBtn.removeClass('button__scroll-up__flex-block--hidden wow bounceInUp');
    } else {
      scrollUpBtn.addClass('button__scroll-up__flex-block--hidden wow bounceInUp');
    }
  });

  scrollUpBtn.on('click', function () {
    $("html,body").animate({scrollTop:0},500);
  });


  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  var prevBtn = $('.swiper-button-prev'),
      nextBtn = $('.swiper-button-next'),
      bullets = $('.swiper-pagination');
  nextBtn.css('left', prevBtn.width() + 27 + bullets.width() + 27);
  bullets.css('left', prevBtn.width() + 27);

  new WOW().init();

  //Валидация форм
  // Форма модального окна
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    validClass: "success",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18,
        maxlength: 18
      },
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Пожалуйста, укажите имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длиннее пятнадцати символов"
      },
      userPhone: {
        required: "Пожалуйста, укажите номер телефона",
        minlength: "Некорректный номер телефона",
        maxlength: "Некорректный номер телефона"
      },
      userEmail: {
        required: "Пожалуста, укажите email",
        email: "Email ожидается в формате name@domain.com"
      },
      policyCheckbox: "Вы должны согласиться с обработкой данных до отправки формы"
    }/* ,
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {

          $(form)[0].reset();
        }
      }); 
    }*/
  });
  //Форма блока контроль
  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    validClass: "success",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18,
        maxlength: 18
      },
      controlPolicyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Пожалуйста, укажите имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длиннее пятнадцати символов"
      },
      userPhone: {
        required: "Пожалуйста, укажите номер телефона",
        minlength: "Некорректный номер телефона",
        maxlength: "Некорректный номер телефона"
      },
      controlPolicyCheckbox: "Вы должны согласиться с обработкой данных до отправки формы"
    }
  });
  //Валидация формы footer
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    validClass: "success",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18,
        maxlength: 18
      },
      userQuestion: "required",
      questionPolicyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Пожалуйста, укажите имя",
        minlength: "Имя не должно быть короче двух символов",
        maxlength: "Имя не должно быть длиннее пятнадцати символов"
      },
      userPhone: {
        required: "Пожалуйста, укажите номер телефона",
        minlength: "Некорректный номер телефона",
        maxlength: "Некорректный номер телефона"
      },
      userQuestion: "Пожалуйста, напишите свой вопрос",
      questionPolicyCheckbox: "Вы должны согласиться с обработкой данных до отправки формы"
    }
  });
  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});