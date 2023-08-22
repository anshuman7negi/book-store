import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/bookSlice';
import Book from './Book';
import AddBook from './AddBook';
import './styles/Books.css';

const Books = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);

  return (
    <div className="AllBooks">
      <div className="BookCard">
        {books.map((item) => (
          <Book
            key={item.id}
            title={item.title}
            author={item.author}
            category={item.category}
            onDelete={() => dispatch(removeBook(item.id))}
          />
        ))}
      </div>
      <AddBook onAddBook={(newBook) => dispatch(addBook(newBook))} />
    </div>
  );
};

export default Books;
