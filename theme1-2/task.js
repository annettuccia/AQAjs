// БЛОК 1: Объявление переменных
const USER_1_NAME = 'Алиса';
const USER_1_SCORE = 17;

const USER_2_NAME = 'Карл';
const USER_2_SCORE = 22;

const MAX_SCORE = 25;

// БЛОК 2: Приветствие
console.log('Добро пожаловать в отчёт о результатах пользователей!\n');

// БЛОК 3: Вывод заголовка отчёта
console.log('Отчёт о результатах');

// БЛОК 4: Расчет и вывод процентных результатов
const user1Percent = (USER_1_SCORE / MAX_SCORE) * 100;
const user2Percent = (USER_2_SCORE / MAX_SCORE) * 100;

console.log(`\nПроцентные результаты:`);
console.log(`${USER_1_NAME}: ${user1Percent}% (${USER_1_SCORE}/${MAX_SCORE})`);
console.log(`${USER_2_NAME}: ${user2Percent}% (${USER_2_SCORE}/${MAX_SCORE})`);

// БЛОК 5: Проверка, кто набрал больше 20 баллов
console.log(`\nПроверка, кто набрал больше 20 баллов:`);
console.log(`${USER_1_NAME}: ${USER_1_SCORE > 20}`);
console.log(`${USER_2_NAME}: ${USER_2_SCORE > 20}`);