import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToApi, fetchData } from '../redux/books/bookSlice';
import './styles/Books.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        item_id: Date.now(),
        title,
        author,
        category: 'Some Category',
      };
      dispatch(addBookToApi(newBook)).then(() => {
        dispatch(fetchData());
      });
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="BookForm">
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Book Name"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Enter Author Name"
          value={author}
          onChange={handleAuthorChange}
        />
        <button className="AddBook" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
