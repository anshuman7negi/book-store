import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, fetchData } from '../redux/books/bookSlice';
import './styles/Books.css';

const Book = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const books = Object.entries(booksData).flatMap(
    ([key, value]) => value.map((item) => ({ ...item, id: key })),
  );

  async function handleDelete(id) {
    await dispatch(deleteBook(id));
    dispatch(fetchData());
  }

  return (
    <div className="BookCard">
      {books.map((item) => (
        <div className="SingleBook" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.category}</p>
          <button
            className="RemoveBook"
            type="button"
            onClick={() => handleDelete(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

    </div>
  );
};

export default Book;
