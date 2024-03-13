import React from 'react';

const SectionOur2 = ({ Titulo, Descripcion, SubTitulo, SubDescripcion }) => {
  return (
<div className="flex flex-col items-center justify-center relative bg-[url(./Img/banner-5.png)] bg-center bg-cover my-8" style={{ objectFit: 'cover' }}>
      <div className="container mx-auto px-6">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-6/12 lg:p-0 p-7 text-center mx-auto">
            <br/>
            <h1 className="text-4xl font-bold leading-tight mb-5 capitalize text-white">{Titulo}</h1>
            <p className="text-xl text-white">{Descripcion}</p>
            <br />
            <h1 className="text-4xl font-bold leading-tight mb-5 capitalize text-white">{SubTitulo}</h1>
            <p className="text-xl text-white">{SubDescripcion}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOur2;


