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


export default function HomeCard({myrecipe}) {
    
  return(
    <>
   
    <div className='card-box  my-5 mx-6 ' style={{marginRight:'5px',marginLeft:"5px",width:"300px",alignItems:"center"}}>
    
    <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'style={{ width:"330px",height:"280px"}} >
        <img src={myrecipe.recipe.image}  className='object-cover'  alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='flex flex-col' style={{height:'150px',width:"170px"}}>
        <MDBCardTitle className='line-clamp-2 text-xl'>{myrecipe.recipe.label}</MDBCardTitle>
        <MDBCardText>
        <div className='description ' style={{fontFamily:"cursive"}} > CuisineType : {myrecipe.recipe.cuisineType}</div>
        
        </MDBCardText>
       
      
      </MDBCardBody>
    </MDBCard>
    </div>
    </>
  )
  
  
}