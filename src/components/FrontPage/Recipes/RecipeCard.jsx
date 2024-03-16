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
//API_ID=0b63114e
//API_KEY=f50710039ad863a4d9fecc8d4605657e	
//import { useState,useEffect} from 'react';


export default function RecipeCard({photo}) {
    
  return(
    <>
   
    <div className='card-box flex flex-row justify-center my-5 mx-6' >
      
    
    <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay flex justify-center'style={{ width:"300px"}} >
        <img src={photo?.recipe?.image} className='object-cover'  alt='...' />
        <a>
          <div className='mask flex justify-center' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <div className='box align-items-center'>
      <MDBCardBody className='flex flex-col justify-between' style={{height:'250px'}}>
        <MDBCardTitle className='text-lg'>{photo?.recipe?.label}</MDBCardTitle>
        <MDBCardText>
        Some quick example text to build on card.
        </MDBCardText>
        
        <MDBBtn href='#' className='button flex' >Button</MDBBtn>
        
      </MDBCardBody>
      </div>
    </MDBCard>
    </div>
     </>
  )
  
  
}