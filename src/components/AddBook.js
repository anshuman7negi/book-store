import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/Books.css';

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

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
        id: Date.now(),
        title,
        author,
        category: 'Some Category',
      };
      onAddBook(newBook);
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

AddBook.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default AddBook;
