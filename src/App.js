import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Book from './components/Book'
import Categories from './components/Categories'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={Book}/>
        <Route path='/categories' element={Categories}/>
      </Routes>
    </div>
  );
}

export default App;
