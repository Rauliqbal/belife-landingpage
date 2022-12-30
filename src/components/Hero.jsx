import { IconChevronRight } from '@tabler/icons';
import React from 'react';
import heroImg from '../assets/images/hero-img.png';
import icShild from '../assets/images/ic-shild.png';
import partnerImg1 from '../assets/images/partner1.png';
import partnerImg2 from '../assets/images/partner2.png';
import partnerImg3 from '../assets/images/partner3.png';
import partnerImg4 from '../assets/images/partner4.png';
import partnerImg5 from '../assets/images/partner5.png';
import Button from './Button';

export default function Hero() {
   const subTitle =
      'Register as a BeLife member now & get the best offer for your insurance benefit package and your family';

   return (
      <div>
         <div className="bg-[#0D326B] bg-hero-mask bg-no-repeat py-3 pb-12 md:pb-0">
            <div className="container z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-x-8">
                  <div>
                     <img
                        className="-mb-10 max-h-[740px] self-end"
                        src={heroImg}
                        alt=""
                     />
                  </div>
                  <div className="self-center" data-aos="fade-up">
                     <div className="inline-flex items-center gap-2 bg-white/20 p-3 rounded-lg mb-5">
                        <img
                           className="w-8 p-[5px] bg-[#2AB69B] rounded-md"
                           src={icShild}
                           alt="icon shild"
                        />
                        <p className="text-white font-semibold">
                           Trusted Insurance!
                        </p>
                     </div>
                     <h1 className="text-3xl md:text-5xl leading-relaxed font-bold text-white">
                        prepare everything <br /> start now for your <br />
                        family's future
                     </h1>
                     <p className="text-slate-400 mt-5 max-w-[427px]">
                        {subTitle}
                     </p>
                     <Button className="bg-orange-400 hover:bg-orange-400/80 group mt-8">
                        Get Started Now
                        <IconChevronRight className="p-[2px] bg-white stroke-orange-400 rounded-full group-hover:translate-x-1 transition-all duration-200" />
                     </Button>
                  </div>
               </div>
            </div>
         </div>
         <div className="container inset-x-0 md:absolute md:-mt-20 grid grid-cols-1 md:grid-cols-5 gap-10 items-center justify-center md:bg-white p-12 md:rounded-xl z-20 md:shadow-xl">
            <img
               src={partnerImg1}
               alt=""
               data-aos="zoom-in"
               data-aos-delay="500"
            />
            <img
               src={partnerImg2}
               alt=""
               data-aos="zoom-in"
               data-aos-delay="600"
            />
            <img
               src={partnerImg3}
               alt=""
               data-aos="zoom-in"
               data-aos-delay="700"
            />
            <img
               src={partnerImg4}
               alt=""
               data-aos="zoom-in"
               data-aos-delay="800"
            />
            <img
               src={partnerImg5}
               alt=""
               data-aos="zoom-in"
               data-aos-delay="900"
            />
         </div>
      </div>
   );
}
