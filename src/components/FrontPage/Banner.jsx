//import React from 'react'

import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <>
    <div className="bg-amber-50 border border-amber-100 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto my-8">
      <div className="flex flex-col md:flex-row">
        {/* Text Content */}
        <div className="p-8 md:p-10 flex-1">
          <h1 className="font-serif font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-4xl sm:text-5xl md:text-6xl mb-4">
            Got Ingredients? 
            <span className="block">We have Got Recipes!</span>
          </h1>
          <p className="font-dm-sans text-amber-900 mb-6 text-lg">
            Turn what you have into delicious meals—no extra trip to the store needed!
          </p>
          <Link to="/createRecipe">
          <button className="bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            Start Crafting Your Meal →
          </button>
          </Link>
          
        </div>
        
        {/* Image Section */}
        <div className="bg-gradient-to-br from-indigo-100 to-teal-50 flex-1 flex items-center justify-center p-4 min-h-64">
          <div className="text-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-32 w-32 mx-auto text-indigo-500 opacity-90" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <p className="font-dm-sans text-indigo-800 mt-2">
              Quick • Easy • Custom
            </p>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Banner
