import React from 'react';

const SectionOur2 = ({ Titulo, Descripcion, SubTitulo, SubDescripcion }) => {
  return (
    <div className="relative my-0 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url(./Img/banner-5.png)] bg-center bg-cover" style={{ objectFit: 'cover' }} />
      <div className="absolute inset-0 bg-[#0A182E] opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="container mx-auto px-6">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7 mx-auto">
              <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">{Titulo}</h1>
              <p className="text-xl">{Descripcion}</p>
              <br />
              <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">{SubTitulo}</h1>
              <p className="text-xl">{SubDescripcion}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOur2;








