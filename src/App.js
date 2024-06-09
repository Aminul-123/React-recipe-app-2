//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//import Navbar from './component/Navbar';
import Home from './component/Home';
import Category from './component/Category';
import Details from './component/Details';
import Search from './component/Search';




function App() {
  
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/category/:countryName' element={<Category/>} />
    <Route path='/details/:item_name' element={<Details/>} />
    <Route path='/search/:searchByName' element={<Search/>} />
   </Routes>
 
 
  </>
  );
}

export default App;
