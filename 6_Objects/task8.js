const library = [
    // Стивен Кинг
    {
        'isbn': '978-0-385-12168-4',
        'bookName': 'Оно',
        'authorName': 'Стивен Кинг',
        'year': 1986,
        'genre': 'Ужасы',
        'pages': 1138,
        'popularity': 5,
        'firstSentence': 'Ужас, который настиг Дерри в 1958-м, называли по-разному, но настоящим его именем было Оно.'
    },
    {
        'isbn': '978-0-670-81302-7',
        'bookName': 'Сияние',
        'authorName': 'Стивен Кинг',
        'year': 1977,
        'genre': 'Ужасы / Психологический триллер',
        'pages': 447,
        'popularity': 4,
        'firstSentence': 'Джек Торренс подумал: «Господи, как же я сюда вляпался?»'
    },
    {
        'isbn': '978-0-451-16951-2',
        'bookName': 'Кэрри',
        'authorName': 'Стивен Кинг',
        'year': 1974,
        'genre': 'Ужасы',
        'pages': 199,
        'popularity': 4,
        'firstSentence': 'Кэрри Уайт стояла на коленях в душевой, и по телу её струилась горячая вода.'
    },
    {
        'isbn': '978-0-14-312305-7',
        'bookName': 'Зелёная миля',
        'authorName': 'Стивен Кинг',
        'year': 1996,
        'genre': 'Трагедия / Драма',
        'pages': 400,
        'popularity': 4,
        'firstSentence': 'Это случилось в 1932-м, когда тюрьма Холодная Гора ещё работала.'
    },
    {
        'isbn': '978-0-330-45529-9',
        'bookName': 'Под куполом',
        'authorName': 'Стивен Кинг',
        'year': 2009,
        'genre': 'Фантастика / Триллер',
        'pages': 1072,
        'popularity': 3,
        'firstSentence': 'В день, когда на Честерс-Милл упал купол, утром всё выглядело как обычно.'
    },
    // Марк Твен
    {
        'isbn': '978-0-14-243717-9',
        'bookName': 'Приключения Тома Сойера',
        'authorName': 'Марк Твен',
        'year': 1876,
        'genre': 'Приключения / Юмор',
        'pages': 274,
        'popularity': 5,
        'firstSentence': 'Том! Никакого ответа.'
    },
    {
        'isbn': '978-0-14-310733-0',
        'bookName': 'Приключения Гекльберри Финна',
        'authorName': 'Марк Твен',
        'year': 1884,
        'genre': 'Приключения / Сатира',
        'pages': 327,
        'popularity': 4,
        'firstSentence': 'Вы не знаете меня, если не читали книжку про Тома Сойера, но это ничего.'
    },
    {
        'isbn': '978-0-486-40046-7',
        'bookName': 'Янки при дворе короля Артура',
        'authorName': 'Марк Твен',
        'year': 1889,
        'genre': 'Фантастика / Сатира',
        'pages': 400,
        'popularity': 3,
        'firstSentence': 'Я был инженером-механиком, но по воле случая оказался в Англии времён короля Артура.'
    },
    {
        'isbn': '978-1-85326-069-8',
        'bookName': 'Принц и нищий',
        'authorName': 'Марк Твен',
        'year': 1881,
        'genre': 'Историческая драма',
        'pages': 240,
        'popularity': 4,
        'firstSentence': 'В один из осенних дней в Лондоне родились два мальчика, которым суждено было стать великими.'
    },
    {
        'isbn': '978-0-19-283500-6',
        'bookName': 'Жизнь на Миссисипи',
        'authorName': 'Марк Твен',
        'year': 1883,
        'genre': 'Автобиография / Путевые заметки',
        'pages': 416,
        'popularity': 2,
        'firstSentence': 'Миссисипи — это река, которая меняет свои берега чаще, чем любая другая река в мире.'
    },
    // Александр Сергеевич Пушкин
    {
        'isbn': '978-5-699-12345-6',
        'bookName': 'Евгений Онегин',
        'authorName': 'Александр Пушкин',
        'year': 1833,
        'genre': 'Роман в стихах',
        'pages': 368,
        'popularity': 5,
        'firstSentence': 'Мой дядя самых честных правил, когда не в шутку занемог...'
    },
    {
        'isbn': '978-5-17-098765-4',
        'bookName': 'Капитанская дочка',
        'authorName': 'Александр Пушкин',
        'year': 1836,
        'genre': 'Исторический роман',
        'pages': 192,
        'popularity': 4,
        'firstSentence': 'Отец мой, Андрей Петрович Гринёв, в молодости своей служил при графе Минихе.'
    },
    {
        'isbn': '978-5-04-098123-2',
        'bookName': 'Пиковая дама',
        'authorName': 'Александр Пушкин',
        'year': 1834,
        'genre': 'Мистика / Повесть',
        'pages': 64,
        'popularity': 3,
        'firstSentence': 'Однажды играли в карты у конногвардейца Нарумова.'
    },
    {
        'isbn': '978-5-08-004567-3',
        'bookName': 'Сказка о царе Салтане',
        'authorName': 'Александр Пушкин',
        'year': 1831,
        'genre': 'Сказка',
        'pages': 56,
        'popularity': 4,
        'firstSentence': 'Три девицы под окном пряли поздно вечерком.'
    },
    {
        'isbn': '978-5-699-87654-3',
        'bookName': 'Медный всадник',
        'authorName': 'Александр Пушкин',
        'year': 1837,
        'genre': 'Поэма',
        'pages': 48,
        'popularity': 3,
        'firstSentence': 'На берегу пустынных волн стоял он, дум великих полн...'
    }
];

console.log('Названия всех книг');
library.forEach((book => console.log(book.bookName)));

console.log('\nАвтор и его самые популярные книги');
let authors = [];
for (let i = 0; i < library.length; i++) {
    let book = library[i];
    if (!authors.includes(book.authorName)) {
        authors.push(book.authorName);
    }
}
for (let i = 0; i < authors.length; i++) {
    let authorName = authors[i];
    let authorBooks = library.filter(book => book.authorName === authorName);
    let topBook = getMostPopularBooks(authorBooks);
    console.log(`${authorName}: ${topBook.bookName} (популярность: ${topBook.popularity})`);
}
function getMostPopularBooks(books) {
    let mostPopular = books[0];
    for (let i = 1; i < books.length; i++) {
        if (books[i].popularity > mostPopular.popularity) {
            mostPopular = books[i];
        }
    }
    return mostPopular;
}

console.log('\nОтсортированная библиотека по году выпуска книг');
const sortedlibrary = library.sort((a, b) => a.year - b.year)
sortedlibrary.forEach((book) => console.log(book));