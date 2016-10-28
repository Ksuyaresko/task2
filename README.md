# Install

## Проверка версии nodejs:
_Должна быть больше или равна 6.0.0_

```bash
node -v 
# v6.2.0
```
если версия не та, если у вас убунту/минт/bash
ставим n если его нет
```bash
sudo n latest || sudo npm i -g n && sudo n latest
```
ставим последнюю ноду
```bash
sudo n latest
```

## Версия npm:
_Должна быть больше или равна 3.3.6_

```bash
npm -v
# 3.8.9
```

## Версия bower:
_Должна быть больше или равна 1.7.1_

```bash
bower -v
# 1.7.9
```

## Версия gulp:
_Должна быть больше или равна 3.8.11_

```bash
gulp -v
# [11:30:23] CLI version 3.9.1
# [11:30:23] Local version 3.9.1
```
Обновляем всё подряд (если нужно)
```bash
sudo npm i -g bower gulp
```

## Установка:

```bash
cd ~/projects # папка с проектами
git clone git@code.branderstudio.com:frontend/node-express-gulp-twig.git # или скачать как архив с гитлаба
cd node-express-gulp-twig
npm install
gulp
```
После, нужно поменять имя проекта (первая строчка в файле package.json) с ```"name": "node-prjct-change-me"``` на
то имя, которым называется **проект в гит**е
и изменить место, куда будет пушиться гит, то есть создать новый репозитарий в гитлабе, взять его имя и запушится в него  
пусть, имя вашего проекта будет ~~'my-first-little-pony'~~  
git remote **set-url** origin git@code.branderstudio.com:~~design-and-markup/my-first-little-pony.git~~  
кусок команды такой
```bash
git remote set-url origin git@code.branderstudio.com:
```
иногда нужно указать такие вещи
```
git config --global push.default simple
```

остальное раскажет гитлаб.

## Запуск:

_Поумолчанию запускается на [**localhost:3010**](http://localhost:3010/)_

*В одном теменале запускаем это*
```bash
npm start
```

## Watch & Browser Sync:

*В другом это*
```bash
# не забыть запустить "gulp default" - он дампит то, что не дампит gulp sync
gulp watch # только обновляй файлы
# или watch + sync
gulp sync # + watch и browsersync
# или
gulp browserSync # только перезагружай браузер
```

В галпе нужно **закоментировать** опции https в *browsersync*, или добавить следовать инструкциям ниже 

## Запуск с https

_По умолчанию запускается на [**https**://localhost.o.o:3443/](https://localhost.o.o:3443/)_

Т.е. нужно **добавить** в */etc/hosts* строчку ```127.0.0.5 localhost.o.o```
```bash
npm run https
```


Если речь идёт о хроме, **можно добавить** в него **сертификат** как доверенный  
*config/keys/client/my-private-root-ca.cert.pem*  
Не забыть перезагрузить браузер.

## Идеология

### Общая
 - верстка должна быть компонентной 
   - максимальное дробление на компоненты и переиспользуемость 
   - для **twig** это *include*ы и *extend*ы
 - в вёрстке не должно быть данных 
   - отсутствие хардкода
   - все данные должны быть в отдельном месте (в этом проекте это fixtures/{*pageName*})
   - тоже самое и ссылками, как внешними, так и с внутренними
   - желательно тоже делать с картинками (особенно, картинки пользователя, категорий...)
   - тоже с метатегами, тайтлами
 - в вёрстке не должно быть скриптов
   - раз мы используем requirejs, то на страницу подключаться должно 2 скрипта:
     - сам requirejs
     - и входная точка для страницы

### Лендинг
 **TODO**