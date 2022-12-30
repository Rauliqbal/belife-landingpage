import { useState } from 'react';

import Logo from '../assets/images/logo.png';
import Button from './Button';

export default function NavBar() {
   const [navbar, setNavbar] = useState(false);

   return (
      <nav className="w-full bg-white shadow">
         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
               <div className="flex items-center justify-between py-4 md:py-6 md:block">
                  <a href="">
                     <img className="h-10" src={Logo} alt="" />
                  </a>
                  <div className="md:hidden">
                     <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                     >
                        {navbar ? (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-orange-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        ) : (
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-orange-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M4 6h16M4 12h16M4 18h16"
                              />
                           </svg>
                        )}
                     </button>
                  </div>
               </div>
            </div>
            <div>
               <div
                  className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                     navbar ? 'block' : 'hidden'
                  }`}
               >
                  <ul className="items-center text-center md:text-left justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                     <li className="text-black hover:text-orange-400 transition-all duration-200">
                        <a href="">Product</a>
                     </li>
                     <li className="text-black hover:text-orange-400 transition-all duration-200">
                        <a href="">Service</a>
                     </li>
                     <li className="text-black hover:text-orange-400 transition-all duration-200">
                        <a href="">Contact US</a>
                     </li>
                     <li className="text-black hover:text-orange-400 transition-all duration-200">
                        <a href="">About BeLife</a>
                     </li>
                  </ul>

                  <div className="mt-8 space-y-2 lg:hidden md:inline-block">
                     <Button className="w-full justify-center bg-orange-200 text-orange-400 hover:text-white hover:bg-orange-400">
                        My Account
                     </Button>
                  </div>
               </div>
            </div>
            <div className="hidden space-x-2 md:inline-block">
               <Button className="bg-orange-200 text-orange-400 hover:text-white hover:bg-orange-400">
                  My Account
               </Button>
            </div>
         </div>
      </nav>
   );
}
