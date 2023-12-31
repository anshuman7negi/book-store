import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './styles/Books.css';

const Books = () => (
  <div className="AllBooks">
    <Book />
    <div className="ThirdLine" />
    <AddBook />
  </div>
);

export default Books;
