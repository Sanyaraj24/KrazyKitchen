import { useState, useEffect } from 'react';
import HomeCard from './HomeCard';

export default function Recipe_Category() {
  const [pizzaRecipes, setPizzaRecipes] = useState([]);
  const [tacoRecipes, setTacoRecipes] = useState([]);
  const [cakeRecipes, setCakeRecipes] = useState([]);
  const [coffeeRecipes, setCoffeeRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pizzaResponse = await fetch(
          'https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e'
        );
        const pizzaData = await pizzaResponse.json();
        setPizzaRecipes(pizzaData.hits);

        const tacoResponse = await fetch(
          'https://api.edamam.com/api/recipes/v2?type=public&q=taco&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e'
        );
        const tacoData = await tacoResponse.json();
        setTacoRecipes(tacoData.hits);

        const cakeResponse = await fetch(
          'https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e'
        );
        const cakeData = await cakeResponse.json();
        setCakeRecipes(cakeData.hits);

        const coffeeResponse = await fetch(
          'https://api.edamam.com/api/recipes/v2?type=public&q=coffee&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e'
        );
        const coffeeData = await coffeeResponse.json();
        setCoffeeRecipes(coffeeData.hits);

      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Pizza Section */}
      <div className="text-center py-4">
        <div className="relative inline-block align-middle">
          <span className="text-2xl md:text-3xl font-bold">Pizza Bliss!</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
      </div>
      <div className="flex space-x-5 overflow-x-auto py-4 px-1 h-auto w-auto">
        {pizzaRecipes.map((recipe, index) => (
          <HomeCard key={index} myrecipe={recipe} />
        ))}
      </div>

      {/* Taco Section */}
      <div className="text-center py-8">
        <div className="relative inline-block align-middle">
          <span className="text-2xl md:text-3xl font-bold">Taco Twist!</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
      </div>
      <div className="flex space-x-5 overflow-x-scroll overflow-y-clip w-full h-auto">
        {tacoRecipes.map((recipe, index) => (
          <HomeCard key={index} myrecipe={recipe} />
        ))}
      </div>

      {/* Cake Section */}
      <div className="text-center py-8">
        <div className="relative inline-block align-middle">
          <span className="text-2xl md:text-3xl font-bold">Dessert Delight!</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
      </div>
      <div className="flex space-x-5 overflow-x-scroll overflow-y-clip w-full h-auto">
        {cakeRecipes.map((recipe, index) => (
          <HomeCard key={index} myrecipe={recipe} />
        ))}
      </div>

      {/* Coffee Section */}
      <div className="text-center py-8">
        <div className="relative inline-block align-middle">
          <span className="text-2xl md:text-3xl font-bold">Caffeine Kick?!</span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
      </div>
      <div className="flex space-x-5 overflow-x-scroll w-full h-full mb-5">
        {coffeeRecipes.map((recipe, index) => (
          <HomeCard key={index} myrecipe={recipe} />
        ))}
      </div>
    </>
  );
}
