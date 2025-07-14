import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth,provider } from '../config/firebase';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


function Navbar() {
  //LOGIN HANDLER
  const navigate = useNavigate();
  const [user,setUser]=useState(null);
 useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(user)=>{
    if (user) {
      setUser(user); // Store user in your state
    } else {
      setUser(null);
    }
  });
  return ()=>unsubscribe();
 },[])

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);

      console.log("User Info:", user);

      navigate("/");
    } catch (err) {
      console.error("Google Sign-In Error", err);
    }
  };
   console.log(user);
     
  return (
    <>
      <div className="bg-gradient-to-r from-black via-gray-800 to-black h-12 w-full flex items-center justify-center shadow-md">
        <img
          src="./Logo.png"
          alt="Krafty Kitchen Logo"
          className="h-12 w-auto max-h-20 object-contain"
        />
      </div>
      <nav className="w-full flex px-2 py-2 text-base lg:text-lg items-center shadow-md justify-between bg-gradient-to-r from-black via-gray-800 to-black text-white sticky top-0 z-50">
        <div className="links flex gap-4 lg:gap-10 items-center flex-wrap  text-decoration-none">
          <Link to="/" className=" text-white  hover:text-green-400 transition duration-200 text-decoration-none">Home</Link>
          <Link to="/recipesearch" className="text-white hover:text-green-400 transition duration-200 text-decoration-none">Recipes</Link>
          <Link to="/blog" className="text-white hover:text-green-400 transition duration-200 text-decoration-none">Blog</Link>
          <Link to="/about" className="text-white hover:text-green-400 transition duration-200 text-decoration-none">About Us</Link>
          <Link to="/contact" className="text-white hover:text-green-400 transition duration-200 text-decoration-none">Contact</Link>
        </div>
 <div className="hover:text-green-400 transition duration-200 flex items-center gap-3">
          {user ? (
            <>
            <Link to='/profile'>
              <img src={user?.photoURL} alt="user" className="h-8 w-8 rounded-full" 
              />
             </Link>
            </>
          ) : (
            <button onClick={handleGoogleLogin}>
              <FaUserCircle size={30} />
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
