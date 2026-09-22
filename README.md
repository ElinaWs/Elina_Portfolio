# Wladyis Portfolio — React + Vite + GitHub Pages

## 1. Создай репозиторий

На GitHub создай репозиторий с названием:

`wladyis-portfolio`

Репозиторий лучше сделать Public.

## 2. Загрузи содержимое этого проекта

Можно через Git:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ТВОЙ_ЛОГИН/wladyis-portfolio.git
git push -u origin main
```

## 3. Включи GitHub Pages

В репозитории открой:

Settings → Pages

В разделе Build and deployment выбери:

Source → GitHub Actions

После `git push` workflow автоматически соберёт React-проект и опубликует его.

## 4. Ссылка

После успешного деплоя сайт будет здесь:

`https://ТВОЙ_ЛОГИН.github.io/wladyis-portfolio/`

Важно: название репозитория должно быть именно `wladyis-portfolio`, потому что `vite.config.js` уже настроен на этот путь.

Если назовёшь репозиторий иначе — измени:

```js
base: '/wladyis-portfolio/',
```

на:

```js
base: '/ИМЯ-ТВОЕГО-РЕПОЗИТОРИЯ/',
```
