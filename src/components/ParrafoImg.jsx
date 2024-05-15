import React from 'react';

const ParrafoImg = ({ titulo, texto, imagen }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="w-1/3 flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-4">{titulo}</h2>
        <p className="text-left">{texto}</p>
      </div>
      <img src={imagen} alt="Imagen" className="w-1/3 h-auto ml-4" />
    </div>
  );
};

export default ParrafoImg;