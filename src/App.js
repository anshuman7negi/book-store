import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={Book} />
        <Route path="/categories" element={Categories} />
      </Routes>
    </div>
  );
}

export default App;
