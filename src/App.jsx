/* eslint-disable react/prop-types */

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Contact from './components/FrontPage/Contact/Contact';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/FrontPage/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import BlogCard from './components/FrontPage/Blog/BlogCard';
import About from './components/FrontPage/About/About';
import RecipeSearch from './components/FrontPage/Recipes/RecipeSearch';
import Details from './components/FrontPage/Detailpage/Details';


function App() {
  return (
    <>
  
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/recipesearch" element={<RecipeSearch/>} />
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/blog" element={<BlogCard/>} />
          <Route exact path="/contact" element={<Contact />} />
          
          
          <Route path="/details/:id" element={<Details/>}/>
          
        </Routes>
      </Router>

      <Footer/>
     
    </>
  )
}

export default App;
