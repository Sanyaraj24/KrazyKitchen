//import React from "react";
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function Imageslider() {

   return (
    <>
    <br></br>
    <br></br>
    <br></br>
      <MDBCarousel showControls interval={1000} touch={true} fade dark style={{width:"900px",marginLeft:'180px'}}>
      <MDBCarouselItem itemId={1} interval={1200}>
        <img src= "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src="https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'className='d-block w-100 h-90' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src="https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='d-block w-100 h-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
      <br></br>
      <br></br>
      </>
   );
}