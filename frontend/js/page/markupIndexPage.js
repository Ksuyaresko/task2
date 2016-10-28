requirejs([
  'jquery', // для работы с DOM
  'domReady!', // обязательно, нет смысла работать с DOM, если страница не загрузилась
], ($) => {
  'use strict';

  const mobileSwitcher = $('.open-inner');
  mobileSwitcher.click(() => {
    if(!mobileSwitcher.hasClass('opened')) {
      mobileSwitcher.addClass('opened');
      mobileSwitcher.removeClass('fa-folder');
      mobileSwitcher.addClass('fa-folder-open');
    } else {
      mobileSwitcher.removeClass('opened');
      mobileSwitcher.removeClass('fa-folder-open');
      mobileSwitcher.addClass('fa-folder');
    }
  });
});
