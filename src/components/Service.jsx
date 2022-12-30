import React from 'react';
import Service1 from '../assets/images/service1.png';
import Service2 from '../assets/images/service2.png';
import Service3 from '../assets/images/service3.png';
import Service4 from '../assets/images/service4.png';
import Button from './Button';

export default function Service() {
   const sectionTitle = 'Everything You Need Is Here';
   const title = 'Our Insurance Service For You';
   const serv1 = {
      img: Service1,
      title: 'Health Insurance',
      subTitle:
         'Health Care is simply dummy text of the printing and typesetting industry.',
   };
   const serv2 = {
      img: Service2,
      title: 'property insurance',
      subTitle:
         'Property is simply dummy text of the printing and typesetting industry.',
   };
   const serv3 = {
      img: Service3,
      title: 'Financial insurance',
      subTitle:
         'Money is simply dummy text of the printing and typesetting industry.',
   };
   const serv4 = {
      img: Service4,
      title: 'Education insurance',
      subTitle:
         'Disaster is simply dummy text of the printing and typesetting industry.',
   };

   return (
      <section className="container ">
         <div className="flex justify-center items-center flex-col pt-24">
            <h2 className="section-title">{sectionTitle}</h2>
            <h3 className="title">{title}</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 gap-8">
            <div
               className="flex flex-col items-center bg-white p-7 rounded-xl hover:shadow-xl transition-all duration-300 ease-out"
               data-aos="zoom-in"
               data-aos-delay="500"
            >
               <div className="h-40 w-40 rounded-full bg-[#FEA85F]/10 flex justify-center items-center ">
                  <img className="p-10" src={serv1.img} alt="" />
               </div>
               <div className="text-center mt-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                     {serv1.title}
                  </h3>
                  <p className="sub-title">{serv1.subTitle}</p>

                  <Button className="mt-14 bg-orange-200 text-orange-400 hover:text-white hover:bg-orange-400 w-full justify-center rounded-xl">
                     Learn More
                  </Button>
               </div>
            </div>

            <div
               className="flex flex-col items-center bg-white p-7 rounded-xl hover:shadow-xl transition-all duration-300 ease-out"
               data-aos="zoom-in"
               data-aos-delay="600"
            >
               <div className="h-40 w-40 rounded-full bg-[#FEA85F]/10 flex justify-center items-center ">
                  <img className="p-10" src={serv2.img} alt="" />
               </div>
               <div className="text-center mt-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                     {serv2.title}
                  </h3>
                  <p className="sub-title">{serv2.subTitle}</p>

                  <Button className="mt-14 bg-orange-200 text-orange-400 hover:text-white hover:bg-orange-400 w-full justify-center rounded-xl">
                     Learn More
                  </Button>
               </div>
            </div>

            <div
               className="flex flex-col items-center bg-white p-7 rounded-xl hover:shadow-xl transition-all duration-300 ease-out"
               data-aos="zoom-in"
               data-aos-delay="700"
            >
               <div className="h-40 w-40 rounded-full bg-[#FEA85F]/10 flex justify-center items-center ">
                  <img className="p-10" src={serv3.img} alt="" />
               </div>
               <div className="text-center mt-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                     {serv3.title}
                  </h3>
                  <p className="sub-title">{serv3.subTitle}</p>

                  <Button className="mt-14 bg-orange-200 text-orange-400 hover:text-white hover:bg-orange-400 w-full justify-center rounded-xl">
                     Learn More
                  </Button>
               </div>
            </div>

            <div
               className="flex flex-col items-center bg-white p-7 rounded-xl hover:shadow-xl transition-all duration-300 ease-out"
               data-aos="zoom-in"
               data-aos-delay="800"
            >
               <div className="h-40 w-40 rounded-full bg-[#FEA85F]/10 flex justify-center items-center ">
                  <img className="p-10" src={serv4.img} alt="" />
               </div>
               <div className="text-center mt-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                     {serv4.title}
                  </h3>
                  <p className="sub-title">{serv4.subTitle}</p>

                  <Button className="mt-14 bg-orange-200 text-orange-400 hover:text-white hover:bg-orange-400 w-full justify-center rounded-xl">
                     Learn More
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}
