import react from "react";

const SectionForm = ({Titulo, SubTitulo, Descripcion}) => {

    return(
        <section
            className="flex relative bg-[#0A182E] bg-cover bg-center bg-[url(././Img/banner3-1.png)] "
            >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div className="relative mx-auto max-w-screen-xl  lg:flex lg:h-screen lg:items-center ">
                <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right text-white">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        {Titulo}
                    </h1>
                    <p className="text-3xl font-extrabold sm:text-5xl">
                        {SubTitulo}
                    </p>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        {Descripcion}
                    </p>
                </div>
                <div>
                <form class="p-8 rounded-lg max-w-md mx-auto pl-16">
                <div class="mb-4">
                    <input type="text" id="name" placeholder="Enter your name" class="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                    <input type="email" id="email" placeholder="Enter your email address" class="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                    <input type="tel" id="phone" placeholder="Enter your phone number" class="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                    <input type="text" id="city" placeholder="Enter your city" class="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-6">
                    <label for="license" class="block text-white font-bold mb-2">Do you have an active real estate license?</label>
                    <select id="license"  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="flex items-center justify-center">
                    <button class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:rin sm:w-auto">
                        Join Us Now
                    </button>
                </div>
            </form>
                </div>            
            </div>
            </section>
    )
};
export default SectionForm;