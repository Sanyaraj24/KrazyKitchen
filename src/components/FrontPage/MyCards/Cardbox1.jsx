import React, { useState, useEffect } from 'react';
import HomeCard from './HomeCard';

export default function Cardbox1() {
    const [pizzaRecipes, setPizzaRecipes] = useState([]);
    const [tacoRecipes, setTacoRecipes] = useState([]);
    const [cakeRecipes, setCakeRecipes] = useState([]);
    const [coffeeRecipes, setCoffeeRecipes] = useState([]);
  useEffect(() => {
        const fetchData = async () => {
          const LocalStorageData=localStorage.getItem('My_recipe');
          if(!LocalStorageData){
            const pizzaRequest = fetch('https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e').then(res => res.json());
            const tacoRequest = fetch('https://api.edamam.com/api/recipes/v2?type=public&q=taco&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e').then(res => res.json());
            const cakeRequest = fetch('https://api.edamam.com/api/recipes/v2?type=public&q=cake&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e').then(res => res.json());
            const coffeeRequest = fetch('https://api.edamam.com/api/recipes/v2?type=public&q=coffee&app_id=0b63114e&app_key=f50710039ad863a4d9fecc8d4605657e').then(res => res.json());

            const [pizzaData, tacoData, cakeData, coffeeData] = await Promise.all([pizzaRequest,tacoRequest,cakeRequest,coffeeRequest]);
            
            setPizzaRecipes(pizzaData);
            setTacoRecipes(tacoData);
            setCakeRecipes(cakeData);
            setCoffeeRecipes(coffeeData);
            localStorage.setItem('My_recipe',JSON.stringify({
            pizza:pizzaData,
            taco:tacoData,
            cake:cakeData,
            coffee:coffeeData
          }))
        }
        else{
          const data=JSON.parse(LocalStorageData);
          setPizzaRecipes(data.pizza);
          setTacoRecipes(data.taco);
          setCakeRecipes(data.cake);
          setCoffeeRecipes(data.coffee);
        }
        
        };

        fetchData();
    }, []);

    return (
        <>   
       
        
        <div class="flex justify-center items-center">
        <div class="relative inline-block align-middle text-center">
        <span class="text-2xl md:text-3xl font-bold">
            Pizza Bliss!
        </span>
        <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
        </div>
        <div className='myCards flex overflow-x-scroll' style={{ display: 'flex' }}>
                {pizzaRecipes?.hits?.map((recipe, index) => (
                    <HomeCard key={index} myrecipe={recipe} />
                ))}
        </div>

        {/*2*/}
        <div class="flex justify-center items-center">
        <div class="relative inline-block align-middle text-center">
        <span class="text-2xl md:text-3xl font-bold">
            Taco Twist!
        </span>
        <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
        </div>
          <div className='myCards flex overflow-x-scroll' style={{ display: 'flex' }}>
                {tacoRecipes?.hits?.map((recipe, index) => (
                    <HomeCard key={index} myrecipe={recipe} />
                ))}
            </div>
      {/**3 */}
       <div class="flex justify-center items-center">
        <div class="relative inline-block align-middle text-center">
        <span class="text-2xl md:text-3xl font-bold">
            Desert Delight!
        </span>
        <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
        </div>  
       <div className='myCards flex overflow-x-scroll' style={{ display: 'flex' }}>
                {cakeRecipes?.hits?.map((recipe, index) => (
                    <HomeCard key={index} myrecipe={recipe} />
                ))}
            </div>
        

        {/*4*/}
        <div class="flex justify-center items-center">
        <div class="relative inline-block align-middle text-center">
        <span class="text-2xl md:text-3xl font-bold">
            Caffeine Kick?!
        </span>
        <span class="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-600 rounded-full"></span>
        </div>
        </div>
            <div className='myCards flex overflow-x-scroll' style={{ display: 'flex' }}>
                {coffeeRecipes?.hits?.map((recipe, index) => (
                    <HomeCard key={index} myrecipe={recipe} />
                ))}
            </div>
        </>
    );
}
