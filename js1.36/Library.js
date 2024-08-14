class Book {
constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = null;
 }

isAvailable() {
    return this.reader === null;
 }

takeBook(readerName) {
    if (this.isAvailable()) {
        this.reader = readerName;
        return true;
    }
    return false;
 }

returnBook() {
    if (!this.isAvailable()) {
        this.reader = null;
        return true;
    }
    return false;
 }

changeBookName(newBookName) {
    if (typeof newBookName === 'string' && newBookName.trim().length > 0) {
        this.name = newBookName;
        return true;
    }
    return false;
 }

changeAuthorName(newAuthorName) {
    if (typeof newAuthorName === 'string' && newAuthorName.trim().length > 0) {
        this.author = newAuthorName;
        return true;
    }
    return false;
 }

getCurrentReader() {
    return this.reader;
    }
}
const book1 = new Book('1984', 'George Orwell', 1949);
console.log(book1.isAvailable());

console.log(book1.takeBook('Dannil'));
console.log(book1.isAvailable());
console.log(book1.getCurrentReader());

console.log(book1.takeBook('Alina'));

console.log(book1.returnBook());
console.log(book1.isAvailable());

console.log(book1.changeBookName('Tom Soyer'));
console.log(book1.name);

console.log(book1.changeAuthorName('Mark Tven'));
console.log(book1.author);

console.log(book1.isAvailable());

console.log(book1.changeBookName(''));
console.log(book1.changeAuthorName(''));
