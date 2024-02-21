import React, { useState } from 'react';
import BookList from './components/BookList';
import FilterPanel from './components/FilterPanel';
import Pagination from './components/Pagination';
import Login from './components/Login';
import data from './data/books.json';
import './App.css'; 
import Starfield from 'react-starfield';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [books, setBooks] = useState(data);
  const [filteredBooks, setFilteredBooks] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10);

  const applyFilters = (filters) => {
    const filtered = data.filter(book => {
      return (
        book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
        book.subject.toLowerCase().includes(filters.subject.toLowerCase()) &&
        book.publishDate.toLowerCase().includes(filters.publishDate.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      {!isAuthenticated ? (
        <Login setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <>
          <h1 className="title">Library Management System</h1>
          <div className="filter-container">
            <FilterPanel applyFilters={applyFilters} />
          </div>
          <div className="book-list-container">
            <BookList books={currentBooks} />
          </div>
          <div className="pagination-container">
            <Pagination
              booksPerPage={booksPerPage}
              totalBooks={filteredBooks.length}
              paginate={paginate}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
