// all books stored in the library array
const myLibrary = [];

class Book{
constructor (author, title, pages, id){
this.author = author;
this.title = title;
this.pages = pages;
// unique id
this.id = crypto.randomUUID();

}


info() {
    return `${this.title} by ${this.author}, ${this.pages} pages. (id: ${this.id})`;
  }
};
// create books
const favBook = new Book("A.A", "Peter Pan", 24, 6);
const book1 = new Book ("D.W", "Frozen", 45, 8);
const book2 = new Book("T.A", "Marvel", 48, 9);

//for (let i = 0; i < new Book; i++ ){

//}

// add them to library
myLibrary.push(favBook, book1, book2);

// loop through library
for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i].info());
  }

  const container = document.querySelector('.container');
  


  const tableBody = document.querySelector("#mylibrary tbody");

    myLibrary.forEach(Book => {
    const row = document.createElement("tr");
    
    const titleCell = document.createElement("td");
    titleCell.textContent = Book.title;

    const authorCell = document.createElement("td");
    authorCell.textContent = Book.author;

    const pagesCell = document.createElement("td");
    pagesCell.textContent = Book.pages;

    const idCell = document.createElement("td");
    idCell.textContent = Book.id;

    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell);
    row.appendChild(idCell);

    tableBody.appendChild(row);

  });

  
  