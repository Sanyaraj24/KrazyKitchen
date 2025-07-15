
import RecipeCard from "./RecipeCard";

import { motion } from "framer-motion"; 
const CreateRecipes = ({ onRecipeSubmit }) => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-6 md:px-0 md:py-10 lg:py-10">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
           <p className="text-sm text-gray-500 sm:text-xl">
              A New Cooking Experience
            </p>
              <h1 className="font-serif text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl">
              Got Ingredients? 
              <span className="block bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent">
                We have Got Recipes!
              </span>
            </h1>
            
            <p className="text-sm text-gray-500 sm:text-xl">
              Tired of staring at the same ingredients? Krafty Kitchen helps you whip up delicious, no-waste meals using what you already have!
            </p>
            {/* Divider */}
            <div className="mb-8 mt-8 h-px w-full bg-black"></div>
            {/* Image with motion effects */}
            <motion.img
              src='/KL.png'
              alt="Description of the image"
              className="w-full max-w-md object-contain rounded-md shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl" // Responsive sizing
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }} // Adds hover effect
            />

          </div>
          {/* Recipe Card Component */}
          <RecipeCard onSubmit={onRecipeSubmit} />
        </div>
      </div>
    </section>
  );
};

export default CreateRecipes;