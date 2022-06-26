
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Tourism from './component/Tourism';
import Kpop from './component/Kpop';
import Technology from './component/Technology';
import Movie from './component/Movie';
import Food from './component/Food';
import One from './component/One';
import Tourone from './component/Tourone';
import Kpopone from './component/Kpopone';
import Techone from './component/Techone';
import Movieone from './component/Movieone';
import Foodone from './component/Foodone';


function App() {
  return (
    <>
    <div className='App'>
  
    </div>
    <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Category/Tourism" element={<Tourism/>}/>
        <Route path="/Category/Kpop" element={<Kpop/>}/>
        <Route path="/Category/Technology" element={<Technology/>}/>
        <Route path="/Category/Movie" element={<Movie/>}/>
        <Route path="/Category/Food" element={<Food/>}/>
        <Route path="/Home/Category/article/1/Tourism" element={<One/>}/>
        <Route path="/Home/:1" element={<One/>}/>
        <Route path="/Tourism/Category/article/1" element={<Tourone/>}/>
        <Route path="/Tourism/:1" element={<Tourone/>}/>
        <Route path="/Kpop/Category/article/1" element={<Kpopone/>}/>
        <Route path="/Kpop/:1" element={<Kpopone/>}/>
        <Route path="/Technology/Category/article/1" element={<Techone/>}/>
        <Route path="/Technology/:1" element={<Techone/>}/>
        <Route path="/Movie/Category/article/1" element={<Movieone/>}/>
        <Route path="/Movie/:1" element={<Movieone/>}/>
        <Route path="/Food/Category/article/1" element={<Foodone/>}/>
        <Route path="/Food/:1" element={<Foodone/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
