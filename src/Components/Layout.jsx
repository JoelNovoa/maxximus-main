import React from "react";
import Employes from "../Img/employees1.png";
import Phone from "../Img/megaphone1.png";
import Tech from "../Img/technology1.png";

const Layout =() => {
    return(<div className="bg-[#0A182E] items-center justify-center align-center">
    <h1 className="text-3xl font-bold text-center mb-6 text-white">
        HERE IS WHAT WE OFFER YOU?
    </h1>
    <div className="bg-[#0A182E] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">  
        {/* Primer elemento */}
        <div className="text-white p-4 rounded-lg shadow-md flex items-center justify-center border-white ">
            <img src={Employes} className="h-20 w-auto mr-4" />
            <div>
                <h2 className="text-xl font-bold mb-2 text-left">Employee 
                    <br />
                    Training  & HR
                </h2>
            </div>
        </div>
        {/* Segundo elemento */}
        <div className="text-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={Phone} className="h-20 w-auto mr-4" />
            <div>
                <h2 className="text-xl font-bold mb-2 text-left">Marketing & 
                    <br />
                    Referral Software
                </h2>
            </div>
        </div>
        {/* Tercer elemento */}
        <div className="text-white p-4 rounded-lg shadow-md flex items-center justify-center">
            <img src={Tech} alt="Maxximum Logo" className="h-20 w-auto mr-4" />
            <div>
                <h2 className="text-xl font-bold mb-2 text-left">Technology</h2>
            </div>
        </div>
    </div>
</div>

    );
}
export default Layout;