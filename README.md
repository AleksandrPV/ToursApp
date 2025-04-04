# ToursApp - Приложение для управления турами

## Описание проекта
ToursApp - это современное веб-приложение для управления туристическими предложениями, разработанное с использованием Angular 17. Приложение предоставляет удобный интерфейс для просмотра, поиска и бронирования туров.

## Технологический стек
- **Frontend Framework:** Angular 17
- **Язык программирования:** TypeScript
- **Стилизация:** SCSS
- **Маршрутизация:** Angular Router
- **Управление состоянием:** Angular Services
- **Серверная часть:** Node.js с Express
- **База данных:** MongoDB

## Основные функции
- Просмотр списка доступных туров
- Фильтрация туров по различным параметрам
- Детальная информация о каждом туре
- Система бронирования
- Административная панель для управления турами
- Адаптивный дизайн для всех устройств

## Структура проекта
```
src/
├── app/
│   ├── layout/           # Компоненты макета
│   │   ├── header/      # Шапка сайта
│   │   ├── aside/       # Боковая панель
│   │   └── footer/      # Подвал сайта
│   ├── features/        # Основные модули
│   │   ├── tours/       # Модуль туров
│   │   └── admin/       # Административный модуль
│   ├── shared/          # Общие компоненты
│   └── core/            # Ядро приложения
├── assets/              # Статические ресурсы
└── environments/        # Конфигурация окружений
```

## Установка и запуск

### Предварительные требования
- Node.js (версия 18 или выше)
- npm (версия 9 или выше)
- MongoDB

### Установка зависимостей
```bash
npm install
```

### Запуск приложения
```bash
# Запуск сервера разработки
npm run start

# Запуск сервера разработки с серверной частью
npm run ServerWithNg

# Сборка для продакшена
npm run build
```

## Доступ к приложению
- Frontend: http://localhost:4200
- Backend API: http://localhost:3000

## Разработка
- Используйте `ng serve` для запуска сервера разработки
- Код автоматически перезагружается при изменениях
- Используйте `ng test` для запуска тестов

## Стилизация
- Используется SCSS для стилей
- Применяется модульный подход к стилям
- Поддерживается адаптивный дизайн

## Маршрутизация
- Реализована на основе Angular Router
- Поддерживает ленивую загрузку модулей
- Включает защиту маршрутов

## Вклад в проект
1. Создайте форк проекта
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## Лицензия
MIT License - свободное использование и модификация

## Контакты
Для вопросов и предложений обращайтесь к администратору проекта.

---

# Учебный проект в политехе

## Docker
```bash
docker build -t example-angular -f Dockerfile .
docker run --rm -ti --name angular_1 -p "127.0.0.1:4200:4200" example-angular
```

запусе docker как разработка 
docker-compose up --build

запуск docker как производство 
docker-compose -f docker-compose.prod.yml up --build