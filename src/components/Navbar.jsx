import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../config/firebase';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Navbar() {
  // LOGIN HANDLER
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/");
    } catch (err) {
      console.error("Google Sign-In Error", err);
    }
  };

  return (
    <>
      {/* Logo Banner */}
      <div className="bg-gradient-to-r from-black via-gray-800 to-black h-12 md:h-16 w-full flex items-center justify-center shadow-md">
        <img
          src="./Logo.png"
          alt="Krafty Kitchen Logo"
          className="h-8 md:h-12 w-auto object-contain"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="w-full flex px-4 py-2 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg items-center shadow-md justify-between bg-gradient-to-r from-black via-gray-800 to-black text-white sticky top-0 z-50">
        {/* Navigation Links */}
        <div className="links flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
          <Link 
            to="/" 
            className="text-white hover:text-green-400 transition duration-200 whitespace-nowrap no-underline"
          >
            Home
          </Link>
          <Link 
            to="/recipesearch" 
            className="text-white hover:text-green-400 transition duration-200 whitespace-nowrap no-underline"
          >
            Recipes
          </Link>
          <Link 
            to="/blog" 
            className="text-white hover:text-green-400 transition duration-200 whitespace-nowrap hidden sm:block no-underline"
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-green-400 transition duration-200 whitespace-nowrap hidden md:block no-underline"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-white hover:text-green-400 transition duration-200 whitespace-nowrap hidden lg:block no-underline"
          >
            Contact
          </Link>
        </div>

        {/* User Profile */}
        <div className="hover:text-green-400 transition duration-200 flex items-center gap-2 md:gap-3">
          {user ? (
            <Link to='/profile'>
              <img 
                src={user?.photoURL} 
                alt="user" 
                className="h-6 w-6 md:h-8 md:w-8 rounded-full object-cover" 
              />
            </Link>
          ) : (
            <button onClick={handleGoogleLogin} className="focus:outline-none">
              <FaUserCircle size={24} className="md:h-7 md:w-7" />
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;