import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';
import './styles/Books.css';

const Book = ({
  index, title, category, author,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="SingleBook">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{category}</p>
      <button
        className="RemoveBook"
        type="button"
        onClick={() => dispatch(removeBook(index))}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
