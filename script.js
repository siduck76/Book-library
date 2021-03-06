let myLibrary = [];
let realStatus; // book status
let randomBookCol;
var myColors = ['#a6dcef', '#f0e2ec', '#fff475', '#cbf0f8', '#fdcfe8', '#ccff90', '#ffa36c', '#ffd5cd', '#bbbfca', , '#e1ccec', '#fcf876', '#d2f5e3', '#fafcc2', '#ffc7c7', '#99f3bd', '#fbfd8a', '#ffbcbc', '#a6b1e1', '#fe8761', '#ffb99a', '#c0ffb3', '#f1ffab'];
class sampleBook {
	constructor(title, author, pages, status) {
		this.title = title,
			this.author = author,
			this.pages = pages,
			this.status = status
	}
};
openSampleBook = () => {
	document.querySelector('.booksContainer').style.cssText = 'display:flex';
	uncheckBtns();
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
	let myBookObject = new sampleBook(bookTitle.value, bookAuthor.value, bookPages.value, realStatus);
	myLibrary.push(myBookObject);
}
statusReading = () => realStatus = "Reading";
statusDropped = () => realStatus = "Dropped";
statusComplet = () => realStatus = "Completed"

function showAll() {
	var parentBook = document.querySelector('.displayBook');
	parentBook.innerHTML = "";
	for(let i = 0; i < myLibrary.length; i++) {
		if(!(myLibrary[i].title == undefined)) {
			var bookC = document.createElement('div');
			var bookTit = document.createElement('p');
			var bookAu = document.createElement('p');
			var bookPa = document.createElement('p');
			var bookSt = document.createElement('p');
			var deleteBook = document.createElement('button');
			deleteBook.innerText = "delete ";
			deleteBook.classList.add('removeBookBtn');
			deleteBook.addEventListener('click', function() {
				/*
				                if (i == 0) {
				                    myLibrary.splice(i, 1);
				                    showAll();
				                } */
				myLibrary.splice(i, 1);
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
			changeCol();
			bookC.style.backgroundColor = randomBookCol;
			parentBook.appendChild(bookC);
		}
	}
}

function showDropped() {
	var parentBook = document.querySelector('.displayBook');
	parentBook.innerHTML = "";
	for(let i = 0; i < myLibrary.length; i++) {
		if(myLibrary[i].status == "Dropped") {
			var bookC = document.createElement('div');
			var bookTit = document.createElement('p');
			var bookAu = document.createElement('p');
			var bookPa = document.createElement('p');
			var bookSt = document.createElement('p');
			var deleteBook = document.createElement('button');
			deleteBook.classList.add('removeBookBtn');
			deleteBook.innerText = "delete ";
			deleteBook.addEventListener('click', function() {
				if(i == 0) {
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
			changeCol();
			bookC.style.backgroundColor = randomBookCol;
			parentBook.appendChild(bookC);
		}
	}
}

function showCompleted() {
	var parentBook = document.querySelector('.displayBook');
	parentBook.innerHTML = "";
	for(let i = 0; i < myLibrary.length; i++) {
		if(myLibrary[i].status == "Completed") {
			var bookC = document.createElement('div');
			var bookTit = document.createElement('p');
			var bookAu = document.createElement('p');
			var bookPa = document.createElement('p');
			var bookSt = document.createElement('p');
			var deleteBook = document.createElement('button');
			deleteBook.classList.add('removeBookBtn');
			deleteBook.innerText = "delete ";
			deleteBook.addEventListener('click', function() {
				if(i == 0) {
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
			changeCol();
			bookC.style.backgroundColor = randomBookCol;
			parentBook.appendChild(bookC);
		}
	}
}

function showReading() {
	var parentBook = document.querySelector('.displayBook');
	parentBook.innerHTML = "";
	for(let i = 0; i < myLibrary.length; i++) {
		if(myLibrary[i].status == "Reading") {
			var bookC = document.createElement('div');
			var bookTit = document.createElement('p');
			var bookAu = document.createElement('p');
			var bookPa = document.createElement('p');
			var bookSt = document.createElement('p');
			var deleteBook = document.createElement('button');
			deleteBook.classList.add('removeBookBtn');
			deleteBook.innerText = "delete ";
			deleteBook.addEventListener('click', function() {
				if(i == 0) {
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
			changeCol();
			bookC.style.backgroundColor = randomBookCol;
			parentBook.appendChild(bookC);
		}
	}
}

function uncheckBtns() {
	var statusBtns = document.querySelectorAll('#statusBtns');
	statusBtns.forEach((statusBtns) => {
		statusBtns.checked = false;
	})
};
changeCol = () => randomBookCol = myColors[Math.floor((Math.random()) * myColors.length)];
