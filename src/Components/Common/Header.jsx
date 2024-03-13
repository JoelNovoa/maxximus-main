import React, { useEffect } from "react";



const Header = ({img, Titulo, Descripcion, Buton}) => {

    console.log(img)
    useEffect (() => {
        console.log(img)
    }, [])

    const sectionImage = `relative bg-cover bg-center bg-no-repeat ${img}`
    return(
        <section
        className={sectionImage}
        >
        <div
            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
            <div className="text-white max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-left">
                {Titulo}
                <strong className="block font-extrabold text-white text-left"></strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">
                {Descripcion}
            </p>

            {Buton ?? <div className="mt-8 flex flex-wrap gap-4 lg:items-center text-center">
                <a
                href="#"
                className="block w-full rounded-xl bg-white px-12 py-3 text-sm font-medium text-black shadow sm:w-auto"
                >
                Learn More
                </a>
            </div>}
            </div>
        </div>
        </section>
    )
};
export default Header;
