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

    showAll();
}

addBookToLibrary = () => {
    var myBookObject = new sampleBook(bookTitle.value, bookAuthor.value, bookPages.value, realStatus);
    myLibrary.push(myBookObject);

}

var myColors = ['#a6dcef', '#f0e2ec', '#fff475', '#cbf0f8', '#fdcfe8', '#ccff90'];

statusReading = () => realStatus = "Reading";
statusDropped = () => realStatus = "Dropped";
statusComplet = () => realStatus = "Completed"


function showAll() {

    var parentBook = document.querySelector('.displayBook');
    parentBook.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        if (!(myLibrary[i].title == undefined)) {

            var bookC = document.createElement('div');

            var bookTit = document.createElement('p');
            var bookAu = document.createElement('p');
            var bookPa = document.createElement('p');
            var bookSt = document.createElement('p');
            var deleteBook = document.createElement('button');


            deleteBook.innerText = "delete ";
            deleteBook.classList.add('removeBookBtn');

            deleteBook.addEventListener('click', function() {

                if (i == 0) {
                    myLibrary.splice(0, 1);
                    showAll();
                }
                myLibrary.splice(i, i);
                showAll();
            });

            bookTit.innerText = myLibrary[i].title;
            bookAu.innerText = myLibrary[i].author;
            bookPa.innerText = myLibrary[i].pages;
            bookSt.innerText = myLibrary[i].status;

            bookC.appendChild(bookTit);
            bookC.appendChild(bookAu);
            bookC.appendChild(bookPa);
            bookC.appendChild(bookSt);
            bookC.appendChild(deleteBook);
            bookC.classList.add('bookContent');


            parentBook.appendChild(bookC);

        }
    }
}

function showDropped() {

    var parentBook = document.querySelector('.displayBook');
    parentBook.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].status == "Dropped") {
            var bookC = document.createElement('div');

            var bookTit = document.createElement('p');
            var bookAu = document.createElement('p');
            var bookPa = document.createElement('p');
            var bookSt = document.createElement('p');
            var deleteBook = document.createElement('button');

            deleteBook.classList.add('removeBookBtn');
            deleteBook.innerText = "delete ";

            deleteBook.addEventListener('click', function() {

                if (i == 0) {
                    myLibrary.splice(0, 1);
                    showDropped();
                }
                myLibrary.splice(i, i);
                showDropped();
            });

            bookTit.innerText = myLibrary[i].title;
            bookAu.innerText = myLibrary[i].author;
            bookPa.innerText = myLibrary[i].pages;
            bookSt.innerText = myLibrary[i].status;

            bookC.appendChild(bookTit);
            bookC.appendChild(bookAu);
            bookC.appendChild(bookPa);
            bookC.appendChild(bookSt);
            bookC.appendChild(deleteBook);
            bookC.classList.add('bookContent');


            parentBook.appendChild(bookC);
        }
    }
}


function showCompleted() {

    var parentBook = document.querySelector('.displayBook');
    parentBook.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].status == "Completed") {
            var bookC = document.createElement('div');

            var bookTit = document.createElement('p');
            var bookAu = document.createElement('p');
            var bookPa = document.createElement('p');
            var bookSt = document.createElement('p');
            var deleteBook = document.createElement('button');

            deleteBook.classList.add('removeBookBtn');
            deleteBook.innerText = "delete ";

            deleteBook.addEventListener('click', function() {

                if (i == 0) {
                    myLibrary.splice(0, 1);
                    showCompleted();
                }
                myLibrary.splice(i, i);
                showCompleted();
            });

            bookTit.innerText = myLibrary[i].title;
            bookAu.innerText = myLibrary[i].author;
            bookPa.innerText = myLibrary[i].pages;
            bookSt.innerText = myLibrary[i].status;

            bookC.appendChild(bookTit);
            bookC.appendChild(bookAu);
            bookC.appendChild(bookPa);
            bookC.appendChild(bookSt);
            bookC.appendChild(deleteBook);
            bookC.classList.add('bookContent');


            parentBook.appendChild(bookC);
        }
    }
}

function showReading() {

    var parentBook = document.querySelector('.displayBook');
    parentBook.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].status == "Reading") {
            var bookC = document.createElement('div');

            var bookTit = document.createElement('p');
            var bookAu = document.createElement('p');
            var bookPa = document.createElement('p');
            var bookSt = document.createElement('p');
            var deleteBook = document.createElement('button');

            deleteBook.classList.add('removeBookBtn');
            deleteBook.innerText = "delete ";

            deleteBook.addEventListener('click', function() {

                if (i == 0) {
                    myLibrary.splice(0, 1);
                    showReading();
                }
                myLibrary.splice(i, i);
                showReading();
            });

            bookTit.innerText = myLibrary[i].title;
            bookAu.innerText = myLibrary[i].author;
            bookPa.innerText = myLibrary[i].pages;
            bookSt.innerText = myLibrary[i].status;

            bookC.appendChild(bookTit);
            bookC.appendChild(bookAu);
            bookC.appendChild(bookPa);
            bookC.appendChild(bookSt);
            bookC.appendChild(deleteBook);
            bookC.classList.add('bookContent');


            parentBook.appendChild(bookC);
        }
    }
}