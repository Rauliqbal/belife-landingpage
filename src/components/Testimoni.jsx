import { IconChevronRight } from '@tabler/icons';
import React from 'react';
import chatImg from '../assets/images/chat-img.png';
import Button from './Button';

export default function Testimoni() {
   const sectiontitle = 'happy client testimonial';
   const title = 'What They Said after using our service';
   const subTitle =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's";

   return (
      <section className="container">
         <div className="flex flex-col md:flex-row items-center gap-20">
            <div
               className="w-full md:w-3/5"
               data-aos="fade-right"
               data-aos-delay="600"
               data-aos-offset="800"
            >
               <img className="max-h-[28rem]" src={chatImg} alt="" />
            </div>
            <div
               className="w-full md:w-2/5"
               data-aos="fade-left"
               data-aos-offset="800"
            >
               <h2 className="section-title">{sectiontitle}</h2>
               <h3 className="title">{title}</h3>
               <p className="sub-title">{subTitle}</p>
               <Button className="bg-orange-400 hover:bg-orange-400/80 group mt-8">
                  View All
                  <IconChevronRight className="p-[2px] bg-white stroke-orange-400 rounded-full group-hover:translate-x-1 transition-all duration-200" />
               </Button>
            </div>
         </div>
      </section>
   );
}
