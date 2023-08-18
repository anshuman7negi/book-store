import React from 'react';
import PropTypes from 'prop-types';
import './styles/Books.css';

const Book = ({ title, category, author }) => (
  <div className="SingleBook">
    <h3>{title}</h3>
    <p>{author}</p>
    <p>{category}</p>
    <button className="RemoveBook" type="button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
