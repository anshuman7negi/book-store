import React from 'react';
import './styles/Books.css';

const AddBook = () => (
  <div className="BookForm">
    <h3>Add New Book</h3>
    <form>
      <input
        type="text"
        placeholder="Enter Book Name"
      />
      <input
        type="text"
        placeholder="Enter Author Name"
      />
      <button className="AddBook" type="submit"> Add Book </button>
    </form>
  </div>
);

export default AddBook;
