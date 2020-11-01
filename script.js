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
    statusBtns.value = "";
}

addBookToLibrary = () => {
    var myBookObject = new sampleBook(bookTitle.value, bookAuthor.value, bookPages.value, realStatus);
    myLibrary.push(myBookObject);
}

statusReading = () => realStatus = "Reading";
statusDropped = () => realStatus = "Dropped";
statusComplet = () => realStatus = "Completed"