# Этап разработки
FROM node:20.12-bookworm-slim AS development

WORKDIR /app

# Устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем исходный код
COPY . .

# Открываем порты для Angular и API сервера
EXPOSE 4200 3000

# Запускаем приложение в режиме разработки
CMD ["npm", "run", "ServerWithNg"]

# Этап сборки Angular
FROM development AS build

RUN npm run build

# Этап API сервера
FROM node:20.12-bookworm-slim AS api

WORKDIR /app

# Копируем только необходимые файлы для API сервера
COPY scripts/server.js ./scripts/
COPY server-data ./server-data/
COPY package*.json ./

# Устанавливаем только production зависимости
RUN npm install --production

# Открываем порт для API сервера
EXPOSE 3000

# Запускаем API сервер
CMD ["node", "scripts/server.js"]

# Этап для Angular в production
FROM nginx:1.25.4-alpine AS angular

# Копируем конфигурацию nginx
COPY virtual_host.conf /etc/nginx/conf.d/default.conf

# Копируем собранное Angular приложение
COPY --from=build /app/dist/tours-app/browser /usr/share/nginx/html

# Открываем порт 80 для веб-сервера
EXPOSE 80









