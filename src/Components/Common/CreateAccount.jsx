import React from 'react';
import Agente1 from '../../Assets/Img/agent1.png';

const CreateAccount = () => {
    return (
        <div className="bg-[#0A182E] min-h-screen flex items-center justify-center">
            <div className="flex flex-grow">
                <div className="w-1/2">
                    <div className="bg-white p-4"> {/* Contenedor con fondo blanco */}
                        <img src={Agente1} alt="Maxximum Realty" className="max-w-2xl border border-gray-400" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center text-white px-4">
                    <h2 className="text-2xl font-bold mb-8 text-left">REGISTER</h2>
                    <form class=" p-10 rounded-lg shadow-lg min-w-full">
			<div>
				<label class="text-gray-800 font-semibold block my-3 text-md" for="username"></label>
				<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username" placeholder="username" />
            </div>
				<div>
					<label class="text-gray-800 font-semibold block my-3 text-md" for="email"></label>
					<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="@email" />
                </div>
					<div>
						<label class="text-gray-800 font-semibold block my-3 text-md" for="password"></label>
						<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="password" />
                        </div>
					<div>
							<label class="text-gray-800 font-semibold block my-3 text-md" for="confirm"></label>
							<input class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="confirm" id="confirm" placeholder="confirm password" />
                    </div>
                    <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                            </div>
							<button type="submit" class="w-full mt-6 bg-white rounded-lg px-4 py-2 text-lg text-black tracking-wide font-semibold font-sans">Create Account</button>
		            </form>
                </div>
            </div>

        </div>
    );
}
export default CreateAccount;