const messages = [
    'Спасибо за Вашу заявку!<br>Я свяжусь с Вами в течении часа и сообщу стоимость ремонта!',
    'Спасибо! <br>Ваш отзыв принят.'
  ];
  
  const overlay = document.querySelector('.popup-overlay');
  const buttonClose = document.querySelector('.popup__close');
  
  document.addEventListener('wpcf7mailsent', function (event) {

    if(event.detail.status === 'mail_sent') {
      const formId = event.detail.contactFormId;
  
      setMessage(formId);
      openPopup();
  
      buttonClose.addEventListener('click', closePopup);
  
      // Закрыть автоматически через 5 секунд
      setTimeout(closePopup, 5000);
    }
  
  });

  function setMessage(formId) {
    const messageBox = document.querySelector('.popup__title');
  
    switch(formId) {
      case '78': message = messages[0]; break;
      case '93': message = messages[1]; break;
      default: message = 'Успешно отправлено!';
    }
  
    messageBox.innerHTML = message;
  }
  
  function openPopup() {
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closePopup() {
    document.body.style.overflow = '';
    overlay.classList.remove('show');
    buttonClose.removeEventListener('click', closePopup);
  }
  
  // // Add yandex metrica target
  // document.addEventListener('wpcf7mailsent', function () {
  //   if (event.detail.status === 'mail_sent') {
  //     var formId = event.detail.contactFormId;
  //     if (formId === '78') {
  //       yaCounter48050753.reachGoal('Zayavka');
  //     }
  //   }
  // });
  
  // // Add pixel auditory
  // VK.Retargeting.Init('VK-RTRG-225822-6YIGB');
  
  // // Add auditory submited form
  // document.addEventListener('wpcf7mailsent', function () {
  //   if (event.detail.status === 'mail_sent') {
  //     var formId = event.detail.contactFormId;
  //     if (formId === '78') {
  //       VK.Retargeting.Event('form-submited');
  //     }
  //   }
  // });
  
  // Add audotory clicked phone
  // var phoneInHeader = document.querySelector('.phone__link');
  // var phoneInFooter = document.querySelector('.footer__link');
  
  // phoneInHeader.addEventListener('click', function() {
  //   yaCounter48050753.reachGoal('Telefon');
  //   VK.Retargeting.Event('Telefon');
  // });
  
  // phoneInFooter.addEventListener('click', function() {
  //   yaCounter48050753.reachGoal('Telefon');
  //   VK.Retargeting.Event('Telefon');
  // });
  