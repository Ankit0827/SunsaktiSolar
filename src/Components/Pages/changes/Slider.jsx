import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sliderimg1 from '../../../Images/sliderimg1.jpeg'
import sliderimg2 from '../../../Images/sliderimd3.jpeg'
import sliderimg3 from '../../../Images/slide03.jpg'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % 3); // Assuming 3 images in the carousel
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + 3) % 3); // Assuming 3 images in the carousel
  };

  return (

    <>
      <div className='slider-div px-40 py-3'>

        <div>
          <Carousel showArrows={false} showThumbs={false} selectedItem={currentIndex}>
            <div className='h-80 flex items-center justify-center'>
              <img src={sliderimg1} alt="/" className='object-cover object-center' />
              <p className='text-white absolute bottom-3 '>some text will be here of first Slider</p>
            </div>
            <div className='h-80 flex items-center justify-center'>
              <img src={sliderimg2} alt="/" className='object-cover object-center' />
              <p className=' text-white absolute bottom-3 '>some text text will be here of Second Slider</p>
            </div>
            <div className='h-80 flex items-center justify-center'>
              <img src={sliderimg1} alt="/" className='object-cover object-center' />
              <p className=' text-white absolute bottom-3 '>some text Will be here of third Slider</p>
            </div>
          </Carousel>
        </div>
        <div className='flex justify-between'>
          <button onClick={handlePrev} className=''>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>

      </div>
      <div>
        <div className='text-center'>
          <h1>Our Clients</h1>
        </div>
        <marquee loop="infinite" behavior="sliding" direction="left" scrollamount='10'>
        <div className='flex item-center justify-between px-4 py-8'>
          <div className='shadow-lg p-4 bg-red-500 rounded text-white'>
            <h4 >Netflix</h4>
          </div>
          <div className='shadow-lg p-4 bg-blue-600 rounded text-white'>
            <h4 >Tata</h4>
          </div>
          <div className='shadow-lg p-4 bg-orange-500 rounded'>
            <h4 >Adani</h4>
          </div>
          <div className='shadow-lg p-4 bg-blue-950 rounded text-white'>
            <h4 >Amazon</h4>
          </div>
          <div className='shadow-lg p-4 rounded bg-black text-white'>
            <h4 >Suzuki</h4>
          </div>
          <div className='shadow-lg p-4 bg-red-400 rounded'>
            <h4 >Mahindra</h4>
          </div>
          <div className='shadow-lg p-4 bg-slate-900 rounded text-white'>
            <h4 >Toyota</h4>
          </div>
          <div className='shadow-lg p-4 bg-red-500 rounded text-white'>
            <h4 >Netflix</h4>
          </div>
          <div className='shadow-lg p-4 bg-blue-600 rounded text-white'>
            <h4 >Tata</h4>
          </div>
        </div>
        </marquee>
      </div>
    </>
  );
};

export default ImageCarousel;
