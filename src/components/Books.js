import AddBook from './AddBook';
import Book from './Book';
import './styles/Books.css';

const Books = () => {
  const allBooks = [
    {
      id: 1,
      title: 'Harry Potter',
      author: 'J.K Rolling',
      category: 'Magic',
    },
    {
      id: 2,
      title: 'Harry Potter',
      author: 'J.K Rolling',
      category: 'Magic',
    },
  ];

  return (
    <div className="AllBooks">
      <div className="BookCard">
        {
                    allBooks.map((item) => (
                      <Book
                        key={item.id}
                        title={item.title}
                        author={item.author}
                        category={item.category}
                      />
                    ))
                }
      </div>
      <AddBook />
    </div>
  );
};

export default Books;
