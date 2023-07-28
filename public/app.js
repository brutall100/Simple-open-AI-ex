async function fetchBooks() {
  try {
    const response = await fetch('/getBooks');
    const data = await response.json();
    console.log(data); // Log the data to the console
    return data.books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return null;
  }
}

  async function displayBooks() {
    const booksDiv = document.getElementById('output');
    const books = await fetchBooks();
  
    if (books && books.length > 0) {
      const booksList = document.createElement('ul');
  
      books.forEach((book) => {
        const bookItem = document.createElement('li');
        bookItem.textContent = book;
        booksList.appendChild(bookItem);
      });
  
      booksDiv.appendChild(booksList);
    } else {
      booksDiv.textContent = 'Failed to fetch books.';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
  });
  