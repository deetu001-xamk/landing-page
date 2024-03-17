//Image carousel
import React, {useState} from 'react';


const Carousel = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % images.length);

    }

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);

    }



  
  
    return (

        <div>
            <button onClick={handlePrev}>Previous</button>
            <img src={images[activeIndex]} alt="carousel" />
            <button onClick={handleNext}>Next</button>
        </div>
  )
}


export default Carousel