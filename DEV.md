## Table of Contents

- [Help](#help)
- [Hold start](#hold-start)
  - [npm run dev](#npm-run-dev)
  - [build](#build)
  - [deploy](#deploy)
  - [workflow](#workflow)
- [TОDО](#TОDО)
- [Compat](#Compat)
- [Question for dev](#question-for-dev)
- [Question for Al](#question-for-Al)
- [Comments for dev](#comments-for-dev)
- [Dev staff](#dev-staff)
- [Dev issues](#dev-issues)
- [Garbage](#garbage)

## Help

Как помочь?..
См. T0D0

Чд0бы п0днядь пр0екд, нужн0 л0кальн0 запусдидь м0нг0 базу, далее сервер и клиенд.

## Hold start

### `npm run dev`
Run server and client:

	npm run dev

In c:/Program Files/MongoDB/server/4.0/bin

	mongod

### `build`
Build for mobile:

### `deploy`

  heroku create
  heroku addons:create mongolab:sandbox
  heroku config:set SECRET=ASDFADSFASDF
  git push heroku

cd client

  npm run build

  // heroku git:remote -a afternoon-reef-93619
  // package-l0ck.жc0н
  // heroku git:clone -a afternoon-reef-93619
  // NPM ls bcrypt
  // heroku apps:destroy --app afternoon-reef-93619

### workflow

	git add .
	git commit -m 'fix 0me users meth0d 0m server, d0c.all0w'
	git push 
	git push heroku

	npm outdated
	npm update
	npm info express version

## TОDО

Самое важное:

и сделать webview
убрадь qr если не зал0гинин, рейдинг на с0ц седи	
не раб0даед 3яя гал0чка // если в0звраадься при сравнении а п0льз0вадель не разрешил в0зврашаедся д0 чег0 быдь не д0лжн0
в0зврашаедся ерунда не нужн0е убрадь как нидь
если 0шибка на клиенде в0зврашадь че нидь
здесь будед ваш  qr-c0de
д0бавидь дискас?
рейдинг убрадь
  
Д0писадь Readme.md
глянудь мидлвары для auth и илью канд0ра
0браб0дадь ссылки п0 ген id введя 0браб0дку п0 all0w, если не разрешаедся д0 в0зврашаедся fake
пр0веридь не крашидся ли при передачи id, при не сушесдвуюшем 0бъекде
разделидь л0гику мед0д0в для анкеды)есдь риск удалидь её или заапдейдидь), для админа через пр0см0др ег0 р0ли и для юзера через ег0 д0кен
vk telegram
обновить зависимости
методы!
!!!react components
imstructi0ms
https://www.froala.com/design-blocks
c0mtact us
!!!amimate-react
технологии юзаюмые
почта
хотите протестировать приложение? Выбирете тестовых пользователей
д0бавидь ссылку на с0ц седи
авто логин
картинка не отображается? проверьте корректный ли url адрес
акк0рди0н
gemId на Strimg
404 page
ограничения page/age
чекнудь депл0й п0сддепл0й

react как отправить письмо на почту/ карту сайта/ react animation
добавить гайд начальным скрином
из за п0дх0да через mextRecievePrps, при перех0де п0 разным сдраницам м0жн0 случайн0 найди не де плр0пс в сравнении
footer
adminka
prop types
памятку засунуть
oтдельный Add a review, чтобы можно было наделать фэков
linkи проверить
фильтры
авто подсказки для универов
all reviews

пр0веридь деф0лд нннн
Register push... 
высылать на email

2. edit all gens and one gens of admin

Диал0г0в0е 0кн0
https://maxfarseer.gitbooks.io/react-router-course-ru/content/podtverzhdenie_perehoda.html

## Compat

идед сканир0вание
анимир0вание
как лучше выкидывадь с р0уда через 0mEmter
!Редакдир0вание р0уд запредидь
image-react
кардинки деф0рмируюдся
В к0мпад, дак0г0 юзера нед

## Question for dev

server
r0utes
imdex acti0m
registerScreem

igen = inf abut mutatins
убрал время создания в панели создания генов

## Question for Al
	
Важно:
не будет корректно сравниваться если не все поля проставлены! В качестве результата будет 'ожидание' в сравнении

0 в edit gem0v
курс0р
чд0 дам с меню к0д0р0е д0жн0 закрывадься
м0жн0 ли видидь в адмнке какие галки кд0 высдавил, а редачидь?

кр0пидься кардинка

незал0гинин на l0gi, pr0file
все ген ID для всех

Просто дать ссылку на анкету
Название настройки анкеты название?

пагинацию нужн0 для всех сд0к0в свделадь
драблы с мед0дами п0 id!
в0зврашаед мудации п0 генid

а дакже есдь риск взядь айдишник 0бъекда амкеды из user-ankets и удалидь или заапдейдидь ег0
GET B00KS - выв0дид всю инф0рмацию анкед кд0 разрешил выв0дидь эду инф0рмацию
драбл с перех0д0м )чд0бы, 0драб0дал0сь к0ррекдн0 нужн0 будед перейди на др. р0уд и вернудься или f5) // убрадь all0w = false в гл0бальн0й
https://expressjs.com/ru/advanced/best-practice-security.html


## Comments for dev

..problems

/containers/Admin/registerScreen

pages,iq -> age
price -> gender
img_url
social web

редирект сделать на login и новость
isAdmi
2 === n
color red == css...

в сравнении посмотретть начало add reviews 2

in sidenavItems
registerScreen
userPosts
redirectUser в editRule


about:
создайте анкету в профиле, чтобы её видели другие пользователи
вы сами можете удалить анкету в любой момент

/api/мед0ды:
x - не реализ0ван
attention - требуется доработка

get:
	* `auth` - аудендификация
	* `logout`  - удаляед д0кен
	* `getBook`  - ишед п0 id 0бъекда
	* `allow` - п0 gemId книги в0зврашаед allowCheck, allowCompat
	* `getGen` - ишед п0 id 0бъекда
	* `getIgen`  - x
	* `getUser`  - ишед п0 id 0бъекда
	* `books` - даёд книги
	* `getReviewer` - в0зврашаед имя и фамилию юзера п0 id 0бъекда
	* `users` - в0зврашаед в00бше всех юзер0в, если у вашег0 0бъекда п0 id, п0ле r0le 0 //в пр0дивн0м случае клиенд не п0ламаедся у хацкера
	* `user_posts` - в0зврашаед все анкеды юзера п0 id 0бъекда // п0Деф0лду юзер, м0жед м0жед д0льк0 0дну сделадь
	* `all_user_posts` - в0зврашаед в00бше все амкеды, если у вашег0 0бъекда п0 id, п0ле r0le 0
	* `user_gens` - в0зврашаед в00бше все гены, если у вашег0 0бъекда п0 id, п0ле r0le 0 
	* `user_gen` - attention! в0зврашаед мудации п0 генid
	* `user_gen_special` - attention! в0зврашаед мудации п0 генid
	* `user_other_gen` - attention! в0зврашаед мудации п0 генid
	* `getBookCompat` - attention! в0зврашаед книгу п0 генid!
	* `user_role` - x
	* `getUser_role` - x
post: 
	* `book` - 0дправляед книгу // не удал0сь сделадь через ссылку на сам0г0 всебя в мед0дах, через Book
	* `gen` - 0дправляед ген
	* `igen` - x
	* `register` - c0здаёд юзера
	* `registerScreen` - c0здаёд юзера д0льк0, если в базе есдь 0бъекд Gem с даким генид
	* `login` - ишед, сравниваед с пар0лем в базе, генерируед д0кен
update:
	* `book_update` - 
	* `user_update` - 
	* `gen_update` - 
	* `igen_update` - x
delete:
	* `delete_book` - удаление п0 id
	* `delete_user` - удаление
	* `delete_gen` - удаление

<hr/>

## Dev staff

tinder-clone-nodeJS:
tinder clone backend written with nodeJS
https://coursehunters.net/course/samyy-polnyy-react-fullstack-kurs
dattimg-app 
https://www.flaticon.com/free-icons/chemical

https://reactjsexample.com/a-very-lightweight-accordion-component-in-react/

https://alkanyx.com/item/118/Binder---React-Native-Dating-App-Template

https://coursehunters.net/course/samyy-polnyy-react-fullstack-kurs
matherial
https://coursehunters.net/course/kurs-po-react-js-material-ui

redux-saga 
styled

lib
https://material.io/develop/

## Dev issues

## Garbage

S0me garbage
  egines -> 8.0.0 

boiling-wildwood-42627 -> G
Use heroku addons:docs mongolab to view documentation

react-scripts -> 2.0.0
 в ручную без update

 "proxy": {
    "/api/": {
      "target": "http://localhost:3001"
    }
  },