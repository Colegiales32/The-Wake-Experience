import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';


const ParrafoImg = ({ imagen }) => {
const [t , i18next] = useTranslation("global")

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-4 my-8">
      <div className="md:w-1/2 flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-4 mx-3">{t("parrafoImg.titulo")}</h2>
        <p className="text-left mx-3">{t("parrafoImg.parrafo")}</p>
      </div>
      <img src={imagen} alt="Imagen" className="md:w-1/3 mt-6 md:mt-0 w-full md:h-1/2 md:mx-3" />
    </div>
  );
};

export default ParrafoImg;