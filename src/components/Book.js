import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteBook, fetchData } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css';
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
      {books.map((item) => {
        const randomProgress = Math.floor(Math.random() * 101);
        return (
          <div className="SingleBook" key={item.id}>
            <div className="bookDetailsContainer">
              <div className="details">
                <p className="category">{item.category}</p>
                <h3 className="title">{item.title}</h3>
                <p className="author">{item.author}</p>
              </div>
              <div className="buttonContainer">
                <p>comments</p>
                <div className="Line" />
                <button type="button" className="removeButton" onClick={() => handleDelete(item.id)}>
                  Remove
                </button>
                <div className="Line" />
                <p>edit</p>
              </div>
            </div>
            <div className="progressBarContainer">
              <CircularProgressbar
                className="progressResult"
                value={randomProgress}
                styles={buildStyles({
                  textColor: '#000',
                  trailColor: '#d6d6d6',
                })}
              />
              <div className="progressBar">
                <p className="percent">
                  {randomProgress}
                  %
                </p>
                <p className="text">completed</p>
              </div>
            </div>
            <div className="SecondLine" />
            <div className="chapter">
              <p className="currentChapter">Current Chapter</p>
              <p className="chapterNumber">Chapter 17</p>
              <button type="submit">Update Progress</button>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default Book;
