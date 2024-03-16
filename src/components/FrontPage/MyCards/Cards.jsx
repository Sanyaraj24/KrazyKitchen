import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import Details from '../Detailpage/Details';
//API_ID=0b63114e
//API_KEY=f50710039ad863a4d9fecc8d4605657e	
//import { useState,useEffect} from 'react';


export default function Cards({item}) {
  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate(`/details/${item?.recipe?.uri.split('_')[1]}`);
    
  };
  
  return(
    <>
   
    <div className='card-box  my-5 mx-6 ' style={{marginRight:'5px',marginLeft:"5px",width:"300px",alignItems:"center"}}>
    
    <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'style={{ width:"330px",height:"280px"}} >
        <img src={item.recipe.image} className='object-cover'  alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='flex flex-col' style={{height:'200px',width:"200px"}}>
        <MDBCardTitle className='line-clamp-2 text-xl'>{item.recipe.label}</MDBCardTitle>
        <MDBCardText>
        <div className='description ' style={{fontFamily:"cursive"}} > CuisineType : {item.recipe.cuisineType}</div>
        
        </MDBCardText>
      
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-large rounded-lg text-xl  m-4 mt-auto  w-full h-11 flex" onClick={handleClick}>  Let's Cook! </button>
      
        
      </MDBCardBody>
    </MDBCard>
    </div>
    </>
  )
  
  
}