## Table of Contents

- [About](#about)
- [Routes](#routes)
- [AddGen](#addgen)

## About

Что-то вроде пометки для администаторов.

## Routes

Карта сайта:

* `/` is a Home page.
* `/login` is a login page.
* `/user/logout` is a Home page.
* `/user-anketsA`
* `/`
* `/user/user`
* `/user/add`
* `/user/registerScren`
* `/user/edit-post/:id`
* `/user/edit-post-admin/:id/:id`
* `/user/edit-genom/:id`
* `/user/edit-user/:id`
* `/user/edit-geninfo/:id`
* `/books/:id`
* `/user/user-reviews`
* `/user/user-gens`
* `/gen/add`
* `/about`
* `/user/compat`
* `/user/profile`
* `/*` any random route throws you on the Login

## AddGen

- Добавление и редактирование поддерживает только булеановское значение (0 , 1),
- Если есть необходимость внести неопределенность в генокарте в позицию мутации, которые обозначаются как 'н/д' на странице профиля,
- то не обходимо ввести пустое поле и сохранить, а не писать строку 'н'.
