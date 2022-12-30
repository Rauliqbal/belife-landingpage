import { IconChevronRight, IconChevronsRight } from '@tabler/icons';
import React from 'react';
import oldImage from '../assets/images/old-img.png';
import Button from './Button';

export default function OldAge() {
   const sectiontitle = 'relaxing life in old age';
   const title =
      'enjoy your old age comfortably and peacefully by using our old age insurance';
   const subTitle =
      "Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy ";

   return (
      <section className="container overflow-hidden">
         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right">
               <h2 className="section-title">{sectiontitle}</h2>
               <h3 className="title">{title}</h3>
               <p className="sub-title">{subTitle}</p>
               <div className="inline-flex flex-col md:flex-row md:items-center gap-3 mt-8">
                  <Button className="bg-orange-400  hover:bg-orange-400/80 group">
                     Get Started Now
                     <IconChevronRight className="p-[2px] bg-white stroke-orange-400 rounded-full group-hover:translate-x-1 transition-all duration-200" />
                  </Button>
                  <Button className="text-slate-500 font-normal hover:underline group">
                     Learn More
                     <IconChevronsRight className="group-hover:translate-x-1 stroke-slate-500 transition-all duration-200" />
                  </Button>
               </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="600">
               <img src={oldImage} alt="" />
            </div>
         </div>
      </section>
   );
}
