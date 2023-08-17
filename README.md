# movies-explorer-frontend
#### Ссылка на сайт: https://skor.nomoredomains.monster


## Описание и функциональность проекта
### Frontend

- Свёрстаны компоненты в соответствии макету 
- На сайте реализована регистрация, авторизация и редактирование профиля пользователя
- Был проработан механизм сохранения фильмов в профиле. 
- Полученные фильмы фильтруются на стороне клиента.
- Также были выполнены асинхронные GET- и POST-запросы к API. 

###   Backend
- Был создан сервер на express.
- Подключена база данных MongoDB, созданы схемы и модели ресурсов API. 
- Реализованы механизмы логирования, аутентификации и авторизации на сервере.
- Бэкенд задеплоен на виртуальную машину.

Начальная страница | Фильмы | Авторизация
:---: | :---: | :---:
[![Начальная страница](screenshots/page1.png)](https://skor.nomoredomains.monster) |![Фильмы](screenshots/page2.png) | ![Авторизация](screenshots/page3.png)



## Стэк технологий

| <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer"><img width="45" height="45" alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" /></a> | <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><img width="45" height="45" alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" /></a> | <a href="https://react.dev/" target="_blank" rel="noreferrer"><img width="45" height="45" alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a> | <a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="45" /></a> | <a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="45" /></a> | <a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="45" /></a> |
| :---: | :---: | :---: | :---: | :---: | :---: |
| HTML | CSS  | React | Express | Node.js | MongoDB |

<br>


## Запуск проекта

клонировать репозиторий 

```javascript
git clone https://github.com/Balzak1976/movies-explorer-frontend
```

установить зависимости

```javascript
npm ci 
```
запуск проекта в режиме разработки ( адрес: `http://localhost:3000` )

```javascript
npm run start 
```
создать финальную сборку ( папка `build` )

```javascript
npm run build 
```