import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/books/bookSlice';
import './styles/Books.css';

const Book = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const books = Object.values(booksData).flatMap((item) => item);

  return (
    <div className="BookCard">
      {books.map((item) => (
        <div className="SingleBook" key={item.item_id}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.category}</p>
          <button
            className="RemoveBook"
            type="button"
          >
            Remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default Book;
