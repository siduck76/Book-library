let myLibrary = [];
let realStatus; // book status

function sampleBook(title, author, pages, status) {
    this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
}

openSampleBook = () => {
    document.querySelector('.booksContainer').style.cssText = 'display:flex';
}

removeSampleBook = () => {
    addBookToLibrary();
    document.querySelector('.booksContainer').style.cssText = 'display:none';

    bookTitle.value = "";
    bookPages.value = "";
    bookAuthor.value = "";
    realStatus = "";
}

addBookToLibrary = () => {
    var myBookObject = new sampleBook(bookTitle.value, bookAuthor.value, bookPages.value, realStatus);
    myLibrary.push(myBookObject);

}

var myColors = ['#a6dcef', '#f0e2ec', '#fff475', '#cbf0f8', '#fdcfe8', '#ccff90'];

statusReading = () => realStatus = "Reading";
statusDropped = () => realStatus = "Dropped";
statusComplet = () => realStatus = "Completed"


function bubu() {
    for (let i = 0; i < myLibrary.length; i++) {

        var bookC = document.createElement('div');

        var bookTit = document.createElement('p');
        var bookAu = document.createElement('p');
        var bookPa = document.createElement('p');
        var bookSt = document.createElement('p');


        bookTit.innerText = myLibrary[i].title;
        bookAu.innerText = myLibrary[i].author;
        bookPa.innerText = myLibrary[i].pages;
        bookSt.innerText = myLibrary[i].status;

        bookC.appendChild(bookTit);
        bookC.appendChild(bookAu);
        bookC.appendChild(bookPa);
        bookC.appendChild(bookSt);
        bookC.classList.add('bookContent');

        var parentBook = document.querySelector('.displayBook');
        parentBook.appendChild(bookC);
    }
}