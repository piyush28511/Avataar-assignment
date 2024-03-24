import React, { useState } from 'react';
import './Carousel.css'; // Assuming you have your CSS styles in App.css

import image1 from '../../assets/Frame0.jpg';
import image2 from '../../assets/Frame1.jpg';
import image3 from '../../assets/Frame2.jpg';
import image4 from '../../assets/Frame3.jpg';
import image5 from '../../assets/Frame4.png';
import left from '../../assets/Left.png';
import right from '../../assets/icon.png';
import dot from '../../assets/_Dot.jpg';
import bar from '../../assets/Dot.jpg';


const images = [image1 , image2 , image3 , image4 , image5 ];

function Carousel() {

  const [currentIndex , setCurrentIndex] = useState(2); 

  function handleLeft() {
    console.log('left')
    setCurrentIndex((previndex) => {
      if(previndex ===0){
        return images.length -1;
      }
      return previndex-1;
    })
  }

  function handleRight() {
    console.log('right')
    setCurrentIndex((previndex) => {
      if(previndex === images.length-1){
        return 0;
      }
      return previndex+1;
    })
  }

  function handleindex(x){
    setCurrentIndex(x)
  }

  return (
    <>
      <div className="container">
        <div className="image-container">
          <img  onClick={()=> handleindex(((currentIndex-2)+images.length) % images.length)}className="image3" src = {images[((currentIndex-2)+images.length) % images.length]} alt =""/>
          <img  onClick={()=> handleindex(((currentIndex-1)+images.length) % images.length)}className="image2" src = {images[((currentIndex-1)+images.length) % images.length]} alt =""/>
          <img onClick={()=>handleindex(currentIndex)}className="image1" src = {images[currentIndex]} alt =""/>
          <img onClick={()=> handleindex((currentIndex+1)%images.length)} className="image4" src = {images[(currentIndex+1)%images.length]} alt =""/>
          <img onClick={()=>handleindex((currentIndex+2)%images.length)} className="image5" src = {images[(currentIndex+2)%images.length]} alt =""/>
          <div className="buttons">
            <button onClick={handleLeft} className='button-item'>
              <img src={left} alt ="left" />
            </button>
            {images.map((item, index) => (
              <img
                key={index}
                src={index === currentIndex ? bar : dot}
                className='button-item'
              />
            ))}
            <button onClick={handleRight} className='button-item'>
              <img src={right} alt ="right" />
            </button>
          </div>
        </div>

        
      </div>
      
    </>
  );
}

export default Carousel;