import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './componentes/Home/Home';
import ShowBooks from './componentes/Services/ShowBooks';
import AddBook from './componentes/Services/AddBook';
import EditBook from './componentes/Services/EditBook';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/showBooks' element={<ShowBooks></ShowBooks>}></Route>
        <Route path='/addBooks' element={<AddBook></AddBook>}></Route>
        <Route path='/editBook' element={<EditBook></EditBook>}></Route>
      </Routes>
    </div>
  );
}

export default App;
