requirejs([
  'jquery', // для работы с DOM
  'testView', // здесь логика фронтенда

  // фронтенд способ подключения CSS НЕ ИСПОЛЬЗОВАТЬ (не поддерживает  rjs сборку)
  //'css!/dependencies/stylesheets/awesome/font-awesome',
  'domReady!' // обязательно, нет смысла работать с DOM, если страница не загрузилась
], function ($, es6TestView) {
'use strict';

  // es6TestView - написана в стили ES6 (es2015)
  const TestView = es6TestView.View;
  const wrapper = $('body .wrapper');
  const testView = new TestView({el: $('body .viewBackBone')}); // так мы жёстко закрепляем существущий элемент за View
  setTimeout(function () {testView.render()}, 1000); // специально ждём, прежде чем отрисовать

  const ItemView = es6TestView.ItemView;
  const itemView = new ItemView({el: $('body .viewMar')});
  setTimeout(function () {itemView.render()}, 1500); // специально ждём

  const CollectionView = es6TestView.CollectionView;
  const SimpleCollection = es6TestView.SimpleCollection;
  const collection = new SimpleCollection([
    {'a': 'data placed at'},
    {'a': 'frontend/js/page/testFrontend.js'},
    {'a': 'via backbone collection'}
  ]);
  const collectionView = new CollectionView({collection: collection});
  collectionView.$el.appendTo(wrapper);
  setTimeout(function () {collectionView.render()}, 2000);

});