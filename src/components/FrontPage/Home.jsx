import React from 'react'
import Imageslider from '../Imageslider'
//import HomeCard from './MyCards/HomeCard'
import Cardbox1 from './MyCards/Cardbox1'
//import Cards from './MyCards/Cards'


function Home() {
  return (
    <div>
      <br>
      </br><br></br>
      <br></br>
    
       <h1 class="text-4xl  font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl p-2">
    <span class="block">
      
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-7xl font-black font-serif mr-5">
        Welcome to Flavor Heaven: 
        </span>
          Explore a World of Unique Dishes!
    </span>
    </h1>
    <Imageslider/>
    <Cardbox1/>
  
    </div>
  )
}

export default Home
