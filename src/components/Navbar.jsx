import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="bg-black h-10 w-full flex items-center justify-center">
        <img
          src="./Logo.png"
          alt="Krafty Kitchen Logo"
          className="h-10 w-[30%] max-h-20"
        />
      </div>
      <nav className="w-full flex px-3 py-2 lg:py-10 text-lg lg:text-xl absolute z-10 items-center shadow-sm justify-between bg-black text-white">
        <div className="links flex gap-4 lg:gap-6 items-center">
          <div className="hover:scale-110 duration-200 ease-linear text-green-500">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </div>
          <div className="hover:scale-110 duration-200 ease-linear text-green-500">
            <Link to="/recipesearch" style={{ color: "white", textDecoration: "none" }}>
              Recipes
            </Link>
          </div>
          <div className="hover:scale-110 duration-200 ease-linear text-green-500">
            <Link to="/blog" style={{ color: "white", textDecoration: "none" }}>
              Blog
            </Link>
          </div>
          <div className="hover:scale-110 duration-200 ease-linear text-green-500">
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
              About Us
            </Link>
          </div>
          <div className="hover:scale-110 duration-200 ease-linear text-green-500">
            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </Link>
          </div>
        </div>

        <div className="hover:scale-110 duration-200 ease-linear text-green-500">
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          <FaUserCircle size={25}/>
          </Link>
        </div>
      </nav>
      <br />
    </>
  );
}

export default Navbar;
