import React, { useState } from 'react';




const Slider = ({ imagenes }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % imagenes.length);
  };

  const handlePrev = () => {
    const newIndex = index - 1 < 0 ? imagenes.length - 1 : index - 1;
    setIndex(newIndex);
  };

  return (  
    <div className='my-20'>       
        <div className="relative object-cover">
          <button className="prev  h-full w-1/3 text-left" onClick={handlePrev}>&#10094;</button>
          <img className='object-fill align-middle' src={imagenes[index]} alt={`Imagen ${index + 1}`} />
          <button className="next  h-full w-1/3 text-right" onClick={handleNext}>&#10095;</button>
        </div>
    </div>
  );
};

export default Slider;