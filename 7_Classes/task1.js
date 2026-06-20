class Song {
    constructor(name, author) {
        this._name = name;
        this._author = author;
    }

    get author() {
    return this._author;
    }

    set author(writer) {
        this._author = writer;
    }
}

const songExample = new Song ('Tears of Gold', 'Faouzia');
console.log(songExample.author);