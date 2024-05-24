import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Booking from './Components/Booking';
import {Routes,Route } from 'react-router-dom';
import About from './Components/About'
import Login from './Components/Login'
import Slider from './Components/Slider'
import SignUp from './Components/SignUp'


function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='Booking'element={<Booking/>} />
      <Route path='About'element={<About/>} />
      <Route path='Login'element={<Login/>} />
      <Route path='Slider'element={<Slider/>} />
      <Route path='SignUp'element={<SignUp/>} />
      
      </Routes>
    </div>
  );
}

export default App;
