import React from 'react'
import profilepic from './profilepic.jpeg'

function About() {
  return (
    <>
    
    {/** PROFILE CARD */}
    <br></br>
    <br></br>
  
    
    <div className="container mx-auto py-12 px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-200 rounded-lg border shadow-lg p-4 lg:p-0">
        <div className="lg:col-span-1 flex justify-center">
            <img src={profilepic} alt="Profile" className="h-48 lg:h-full object-cover object-center w-48 lg:w-full rounded-full lg:rounded-none" />
        </div>
        <div className="lg:col-span-2 flex flex-col justify-center p-4">
        <h2 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
                        About Us
                    </h2>
            
            <p className="text-sm mt-4 text-black opacity-75 font-serif">
            HEY!<br>
            </br>I am Sanya<br></br>
            At KrazyKitchen, we believe that food is not just sustenance; it's an experience that brings people together, stirs emotions, and creates memories. Our mission is to inspire and empower you to create delicious meals that nourish both body and soul.

Whether you're a seasoned chef or a kitchen novice, our website offers a treasure trove of recipes, cooking tips, and culinary inspiration. From quick and easy weekday meals to show-stopping desserts for special occasions, we've got you covered.

But we're more than just recipes. We're a community of food lovers, sharing our passion for cooking and eating well. Join us on this gastronomic adventure, and together, let's explore the endless possibilities of food!
            </p>
        </div>
    </div>
</div>


   
    </>
  )
}

export default About
