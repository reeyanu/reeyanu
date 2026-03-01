# reeyanu-bio

Это простой и стильный сайт-визитка (био). Он создан с использованием HTML, CSS и JavaScript, и его легко настроить под себя.

## ✨ Возможности

-   **Адаптивный дизайн**: Отлично выглядит на любых устройствах.
-   **Минимализм**: Чистый и аккуратный интерфейс.
-   **Эффект пишущей машинки**: Приветственное сообщение анимировано.
-   **Простая настройка**: Легко изменить информацию, ссылки и стили.
-   **Нет зависимостей**: Не требует сборки или установки пакетов.

## 🚀 Начало работы

Чтобы запустить этот сайт локально, вам не нужно ничего устанавливать. Просто выполните следующие шаги:

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/reeyanu/reeyanu-bio.git
    ```

2.  **Перейдите в папку проекта:**
    ```bash
    cd reeyanu-bio
    ```

3.  **Откройте `index.html` в браузере:**
    Просто дважды щелкните по файлу `index.html` или откройте его через ваш браузер.

## 🛠️ Кастомизация

Вы можете легко изменить любую информацию на сайте, отредактировав файлы проекта.

### 1. Основная информация (`index.html`)

Откройте файл [`index.html`](index.html) в любом текстовом редакторе и измените следующие секции:

-   **Заголовок и описание:**
    ```html
    <title>reeyanu — bio</title>
    <meta name="description" content="reeyanu aka aleksandr — 16 y.o. developer. bio, projects, contacts." />
    ```

-   **Приветствие и информация о себе:**
    ```html
    <h1 class="typewriter" aria-label="welcome!">welcome!</h1>
    <p class="muted">hello! i'm <strong>reeyanu</strong> aka <strong>aleksandr</strong>, 16 y.o. — i build things or nothing on the internet.</p>
    ```

-   **Секция "Обо мне" (`#about`):**
    ```html
    <section class="block" id="about" data-title="# about">
      <p>ненавижу кодинг учу питон и все такое для програмистов you know, терминалы и аккуратные интерфейсы. чаще всего — ничего. занимаюсь эдитами и что-то пытаюсь учить.</p>
    </section>
    ```

-   **Проекты (`#projects`):**
    Добавьте или измените карточки проектов.
    ```html
    <a class="card" href="www.tiktok.com/@sweexyzt" target="_blank" rel="noreferrer noopener">
      <span class="card-title">TikTok</span>
      <span class="card-sub">sweexyzt</span>
      <span class="card-desc">вылаживаю все что сделал в АЕ для комьюнити</span>
    </a>
    ```

-   **Навыки (`#skills`):**
    ```html
    <ul class="list">
      <li><strong>learning typescript</strong> (node.js, deno, bun, python-for rn)</li>
      <li><strong>After Effects</strong>editing</li>
    </ul>
    ```

-   **Контакты (`#contacts`):**
    Не забудьте поменять ссылку на свой контакт.
    ```html
    <a class="contact-card big" href="https://t.me/reeyanu" target="_blank" rel="noreferrer noopener">
      <div class="name">настаящи reeyanu</div>
      <div class="handle">@reeyanu</div>
    </a>
    ```

### 2. Стили (`styles.css`)

Если вы хотите изменить цвета, шрифты или отступы, откройте файл [`styles.css`](styles.css). Основные переменные находятся в начале файла:
```css
:root {
  --bg: #0b0c0f;
  --fg: #e4e4e7;
  --muted: #a1a1aa;
  --accent: #92ff9bff;
  --border: #27272a;
  --radius: 24px;
}
```

### 3. Скрипты (`main.js`)

Файл [`main.js`](main.js) отвечает за интерактивные элементы, такие как эффект пишущей машинки и копирование адресов кошельков. Вы можете изменять или добавлять свою логику в этот файл.

## Деплой

Этот сайт можно легко разместить на любом статическом хостинге, например:
-   **GitHub Pages**
-   **Vercel**
-   **Netlify**

Просто загрузите файлы из репозитория на выбранную платформу.

---

Сделано с ❤️ от reeyanu, идея by starkow.
