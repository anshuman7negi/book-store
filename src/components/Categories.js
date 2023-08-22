import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../redux/categories/categoriesSlice';
import './styles/Category.css';

const Category = () => {
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(getStatus());
  };

  const status = useSelector((state) => state.categories.status);

  return (
    <div className="CategoryContainer">
      <h1>{status}</h1>
      <button className="statusButton" type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Category;
