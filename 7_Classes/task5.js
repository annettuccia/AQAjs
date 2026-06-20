class Book {
    constructor(isbn, bookName, authorName, year, genre, pages, popularity, firstSentence) {
        this._isbn = isbn;
        this._bookName = bookName;
        this._authorName = authorName;
        this._year = year;
        this._genre = genre;
        this._pages = pages;
        this._popularity = popularity;
        this._firstSentence = firstSentence;
    }
}

class Library {
    constructor() {
        this._books = [];
    }
    
    addBook(book) {
        this._books.push(book);
    }
    
    getAllBooksName() {
        return this._books.map((book) => book._bookName);
    }
    
    getMostPopularBookByAuthor() {
        const authorBooks = {};
        
        this._books.forEach(book => {
            if (!authorBooks[book._authorName]) {
                authorBooks[book._authorName] = [];
            }
            authorBooks[book._authorName].push(book);
        });
        
        const result = {};
        for (const author in authorBooks) {
            const books = authorBooks[author];
            let mostPopular = books[0];
            
            for (const book of books) {
                if (book._popularity > mostPopular._popularity) {
                    mostPopular = book;
                }
            }
            
            result[author] = mostPopular;
        }
        
        return result;
    }
    
    getMostPopularBooks() {
        return this._books.slice().sort((a, b) => b._popularity - a._popularity);
    }
    
    displayMostPopularBooks() {
        const popularByAuthor = this.getMostPopularBookByAuthor();
        for (const author in popularByAuthor) {
            const book = popularByAuthor[author];
            console.log(`${author}: "${book._bookName}" (${book._popularity}/5)`);
        }
    }
    
    sortByYear() {
        return this._books.slice().sort((a, b) => a._year - b._year);
    }
    
    displaySortedByYear() {
        const sortedLibrary = this.sortByYear();
        sortedLibrary.forEach((book) => console.log(`${book._year} - ${book._bookName} (${book._authorName})`));
    }
}

const library = new Library();
library.addBook(new Book ('978-0-385-12168-4','Оно', 'Стивен Кинг', 1986, 'Ужасы', 1138, 5, 
    'Ужас, который настиг Дерри в 1958-м, называли по-разному, но настоящим его именем было Оно.'));
library.addBook(new Book('978-0-670-81302-7', 'Сияние',  'Стивен Кинг', 1977, 'Ужасы / Психологический триллер', 447, 4, 
    'Джек Торренс подумал: «Господи, как же я сюда вляпался?»'));
library.addBook(new Book('978-0-451-16951-2', 'Кэрри', 'Стивен Кинг', 1974, 'Ужасы', 199, 4, 
    'Кэрри Уайт стояла на коленях в душевой, и по телу её струилась горячая вода.'));
library.addBook(new Book('978-0-14-312305-7', 'Зелёная миля', 'Стивен Кинг', 1996, 'Трагедия / Драма', 400, 4, 
    'Это случилось в 1932-м, когда тюрьма Холодная Гора ещё работала.'));
library.addBook(new Book('978-0-330-45529-9', 'Под куполом', 'Стивен Кинг', 2009, 'Фантастика / Триллер', 1072, 3, 
    'В день, когда на Честерс-Милл упал купол, утром всё выглядело как обычно.'));

library.addBook(new Book('978-0-14-243717-9', 'Приключения Тома Сойера', 'Марк Твен', 1876, 'Приключения / Юмор', 274, 5, 
    'Том! Никакого ответа.'));
library.addBook(new Book('978-0-14-310733-0', 'Приключения Гекльберри Финна', 'Марк Твен', 1884, 'Приключения / Сатира', 327, 4, 
    'Вы не знаете меня, если не читали книжку про Тома Сойера, но это ничего.'));
library.addBook(new Book('978-0-486-40046-7', 'Янки при дворе короля Артура', 'Марк Твен', 1889, 'Фантастика / Сатира', 400, 3, 
    'Я был инженером-механиком, но по воле случая оказался в Англии времён короля Артура.'));
library.addBook(new Book('978-1-85326-069-8', 'Принц и нищий', 'Марк Твен', 1881, 'Историческая драма', 240, 4, 
    'В один из осенних дней в Лондоне родились два мальчика, которым суждено было стать великими.'));
library.addBook(new Book('978-0-19-283500-6', 'Жизнь на Миссисипи', 'Марк Твен', 1883, 'Автобиография / Путевые заметки', 416, 2, 
    'Миссисипи — это река, которая меняет свои берега чаще, чем любая другая река в мире.'));

library.addBook(new Book('978-5-699-12345-6', 'Евгений Онегин', 'Александр Пушкин', 1833, 'Роман в стихах', 368, 5, 
    'Мой дядя самых честных правил, когда не в шутку занемог...'));
library.addBook(new Book('978-5-17-098765-4', 'Капитанская дочка', 'Александр Пушкин', 1836, 'Исторический роман', 192, 4, 
    'Отец мой, Андрей Петрович Гринёв, в молодости своей служил при графе Минихе.'));
library.addBook(new Book('978-5-04-098123-2', 'Пиковая дама', 'Александр Пушкин', 1834, 'Мистика / Повесть', 64, 3, 
    'Однажды играли в карты у конногвардейца Нарумова.'));
library.addBook(new Book( '978-5-08-004567-3', 'Сказка о царе Салтане', 'Александр Пушкин', 1831, 'Сказка', 56, 4, 
    'Три девицы под окном пряли поздно вечерком.'));
library.addBook(new Book('978-5-699-87654-3', 'Медный всадник', 'Александр Пушкин', 1837, 'Поэма', 48, 3, 
    'На берегу пустынных волн стоял он, дум великих полн...'));


console.log('Названия всех книг');
console.log(library.getAllBooksName());

console.log('\nАвтор и его самые популярные книги');
library.displayMostPopularBooks();

console.log('\nОтсортированная библиотека по году выпуска книг');
library.displaySortedByYear();