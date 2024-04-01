import React from "react";
import Agente1 from "../../Assets/Img/agent1.png";

const LogIn = () => {
    return (
        <div className="bg-[#0A182E] min-h-screen flex items-center justify-center">
            <div className="flex flex-grow">
                <div className="w-1/2">
                    <div className="bg-white p-4"> {/* Contenedor con fondo blanco */}
                        <img src={Agente1} alt="Maxximum Realty" className="max-w-2xl border border-gray-400" />
                    </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center text-white px-4">
                    <h2 className="text-2xl font-bold mb-8">Welcome Back!</h2>
                    <h3 className="font-bold mb-8 text-sm">Please enter your detail</h3>
                    <form action="#" className="max-w-md w-full">
                        <div className="mb-4">
                            <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                            <a href="#" className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked />
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" className="text-xs text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</a>
                        </div>
                        <button onClick={() => alert('hello')} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;






