//import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav className='w-full flex px-3 py-4 text-xl absolute z-10 items_center shadow-sm rounded-md justify-start bg-slate-800 text-white' style={{color:"black"}}>
      <div className="links flex gap-4 items justify-start">
        <div className='hover:scale-110 duration-200 ease-linear text-green-500'><Link to="/" style={{color:"white" ,textDecoration:"none"}}>Home </Link></div>
        <div className='hover:scale-110 duration-200 ease-linear text-green-500'><Link to="/recipesearch" style={{color:"white",textDecoration:"none"}}>Recipes</Link></div>
        <div className='hover:scale-110 duration-200 ease-linear text-green-500'><Link to="/" style={{color:"white",textDecoration:"none"}}>Trending</Link></div>
        <div className='hover:scale-110 duration-200 ease-linear text-green-500'><Link to="/blog"style={{color:"white",textDecoration:"none"}}>Blog</Link></div>
        <div className='hover:scale-110 duration-200 ease-linear text-green-500'><Link to="/about"style={{color:"white",textDecoration:"none"}}>About Us</Link></div>
        <div className='hover:scale-110 duration-200 ease-linear text-green-500'><Link to="/contact"style={{color:"white",textDecoration:"none"}}>Contact</Link></div>
        
      </div>
        
    </nav>
    <br></br>
    </>
  );
}

export default Navbar;
