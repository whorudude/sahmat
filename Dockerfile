# Используем официальный образ Node.js LTS
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы
COPY . .

# Исключаем файлы, указанные в .dockerignore
RUN rm -rf node_modules/.cache

# Собираем приложение
RUN npm run build

# Определите порт, на котором работает ваше приложение
EXPOSE 3000

# Команда для запуска приложения при запуске контейнера
CMD ["npm", "start"]
