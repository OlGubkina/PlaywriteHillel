export const myConfigFile = {
    baseURL: process.env.BASE_URL,
    httpCredentials: {
        username: process.env.HTTP_CREDENTIALS_USERNAME,
        password: process.env.HTTP_CREDENTIALS_PASSWORD,
    }
}

// Содержимое .env это текст. Удобнее использовать .js файл для объектов, массивов и тд
// или обращения из кода
// Удобнее редачить конфиг, чем несколько env файлов

// npx playwright test --config=./MyConfiguration/myConfigFile.js ??????