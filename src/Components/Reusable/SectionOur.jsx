import React from 'react';
import Ring from '../../Assets/Img/anillop.png';

const SectionOur = ({ BG, Titulo, Descripcion, SubTitulo, SubDescripcion }) => {
    return (
        <div className={BG ? "flex flex-col items-center justify-center relative bg-white bg-cover bg-center my-8 h-90" : "flex flex-col items-center bg-[url(././Assets/Img/banner-5.png)] justify-center relative bg-cover bg-center w-full my-8 h-screen"}>
            <div className="container mx-auto px-6 py-16 mt-1"> {/* Añadido mt-1 para ajustar la alineación */}
                <div className="lg:flex justify-between items-start"> {/* Cambiado items-center por items-start */}
                    <div className="lg:w-6/12 lg:p-0 p-7 text-center mx-auto">
                    <img src={Titulo} className="mx-auto my-auto sm:mt-12 " alt="Section Image"/> {/* Reducido el margen inferior */}
                        <br/>
                        <p className="text-xl ">{Descripcion}</p> {/* Reducido el margen inferior */}
                        <h1 className="text-4xl font-bold leading-tight mb-3 capitalize">{SubTitulo}</h1> {/* Reducido el margen inferior */}
                        <br/>
                        <p className="text-xl">{SubDescripcion}</p>
                    </div>
                </div>
                <img
                  className="absolute z-10 right-0 -mr- -mt-12 invisible md:visible "
                  src={Ring}
                  alt="Property"
                />
            </div>
        </div>
    );
}

export default SectionOur;





