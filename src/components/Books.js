import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import './styles/Books.css';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div className="AllBooks">
      <div className="BookCard">
        {books.map((item) => (
          <Book
            key={item.id}
            index={item.id}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))}
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
