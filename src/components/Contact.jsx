import React from 'react';
import { IconChevronsRight } from '@tabler/icons';
import Button from './Button';

export default function Contact() {
   const sectionTitle = 'everything you need is here';
   const title = 'Consult us so we will take care of your worries';
   const contact1 = {
      title: 'Customer Service',
      subTitle: 'Contact Us Now By Voice Phone And We Are Ready To Help You',
   };
   const contact2 = {
      title: 'Contact Us',
      subTitle:
         'no time to call? You can contact us via our existing social media',
   };

   return (
      <section className="container">
         <h2 className="section-title text-center">{sectionTitle}</h2>
         <h3 className="title text-center max-w-[480px] mx-auto">{title}</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
            <div
               className="flex items-center justify-between gap-4 md:gap-16 bg-white p-7 rounded-xl"
               data-aos="fade-down"
            >
               <div>
                  <div className="flex gap-3 items-center">
                     <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                     <h3 className="text-xl font-semibold text-slate-900">
                        {contact1.title}
                     </h3>
                  </div>
                  <p className="sub-title">{contact1.subTitle}</p>
               </div>
               <Button className="bg-orange-400 px-6 py-3 rounded-xl hover:bg-orange-400/80 ">
                  <IconChevronsRight className="text-white " />
               </Button>
            </div>
            <div
               className="flex items-center justify-between gap-4 md:gap-16 bg-white p-7 rounded-xl"
               data-aos="fade-up"
            >
               <div>
                  <div className="flex gap-3 items-center">
                     <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                     <h3 className="text-xl font-semibold text-slate-900">
                        {contact2.title}
                     </h3>
                  </div>
                  <p className="sub-title">{contact2.subTitle}</p>
               </div>
               <Button className="bg-orange-400 px-6 py-3 rounded-xl hover:bg-orange-400/80 ">
                  <IconChevronsRight className="text-white " />
               </Button>
            </div>
         </div>
      </section>
   );
}
