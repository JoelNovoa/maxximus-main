import React from 'react';

const SectionOur = ({BG, Titulo, Descripcion, SubTitulo, SubDescripcion}) => {
    return (
<div className={BG ? "flex flex-col items-center justify-center relative bg-white bg-cover bg-center my-8" : "flex flex-col items-center bg-[url(./Img/banner-5.png)] justify-center relative bg-cover bg-center h-full w-full my-8"}>
    <div className="container mx-auto px-6">
        <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7 text-center mx-auto">
                <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">{Titulo}</h1>
                <p className="text-xl">{Descripcion}</p>
                <br/>
                <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">{SubTitulo}</h1>
                <p className="text-xl">{SubDescripcion}</p>

            </div>
        </div>
    </div>
</div>
    );
}

export default SectionOur;


