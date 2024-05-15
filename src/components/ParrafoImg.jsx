import React from 'react';

const ParrafoImg = ({ titulo, texto, imagen }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-4 my-8">
      <div className="md:w-1/2 flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-4 mx-3">{titulo}</h2>
        <p className="text-left mx-3">{texto}</p>
      </div>
      <img src={imagen} alt="Imagen" className="md:w-1/3 mt-6 md:mt-0 w-full md:h-1/2 md:mx-3" />
    </div>
  );
};

export default ParrafoImg;