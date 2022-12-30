import { IconChevronRight, IconChevronsRight } from '@tabler/icons';
import React from 'react';
import icShild from '../assets/images/ic-shild.png';
import Button from './Button';
import Logo from '../assets/images/logo.svg';

export default function Footer() {
   return (
      <section className="container">
         <div className="bg-footer rounded-t-3xl">
            <div className="flex flex-col items-center py-[120px]">
               <div className="mx-auto inline-flex items-center gap-2 bg-white/20 p-3 rounded-lg mb-5">
                  <img
                     className="w-8 p-[5px] bg-[#2AB69B] rounded-md"
                     src={icShild}
                     alt="icon shild"
                  />
                  <p className="text-white font-semibold">Trusted Insurance!</p>
               </div>
               <h2 className="text-3xl md:text-5xl leading-relaxed font-bold text-white text-center">
                  Lets get started <br /> your own insurance
               </h2>

               <div className="flex justify-center items-center gap-3 mt-14">
                  <Button className="bg-orange-400 hover:bg-orange-400/80 group ">
                     View All
                     <IconChevronRight className="p-[2px] bg-white stroke-orange-400 rounded-full group-hover:translate-x-1 transition-all duration-200" />
                  </Button>
                  <Button className="text-white font-normal hover:underline group">
                     Learn More
                     <IconChevronsRight className="group-hover:translate-x-1 stroke-white transition-all duration-200" />
                  </Button>
               </div>
            </div>
         </div>
         <footer className="flex flex-col md:flex-row gap-8 items-center justify-between bg-[#0A2753] rounded-b-3xl py-8 md:px-16">
            <img className="order-1" src={Logo} alt="" />
            <p className="font-medium text-white order-3 md:order-2">
               © 2022 BeLife. All rights reserved.
            </p>
            <div className="flex items-center gap-2 order-2 md:order-3">
               <a href="#" className="group">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-white group-hover:fill-orange-400 transition-all"
                  >
                     <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
               </a>
               <a href="#" className="group">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-white group-hover:fill-orange-400 transition-all"
                  >
                     <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                     <circle cx="11.994" cy="11.979" r="3.003"></circle>
                  </svg>
               </a>
               <a href="#" className="group">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-white group-hover:fill-orange-400 transition-all"
                  >
                     <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
               </a>
            </div>
         </footer>
      </section>
   );
}
