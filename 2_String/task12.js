let age = 25;
let isMember = false;
let previousEvents = 4;
let resultMessage = "";

if (age < 18) {
    resultMessage = "Отказано: возраст должен быть не менее 18 лет";
} else {
    if (isMember === true) {
        resultMessage = "Одобрено: доступ на мероприятие разрешен (член клуба)";
    } else {
        if (previousEvents >= 5) {
            resultMessage = "VIP-пропуск: доступ на мероприятие со специальным статусом ✨";
        } else if (previousEvents >= 3) {
            resultMessage = "Одобрено: доступ на мероприятие разрешен";
        } else {
            resultMessage = "Отказано: необходимо посетить минимум 3 предыдущих мероприятия";
        }
    }
}

console.log(resultMessage);