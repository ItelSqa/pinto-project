import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import SubscribeSection from "../../components/website/SubscribeSection";
import { useState } from "react";
import ImageGrideR from "../../components/ImageGridsR";

import i1 from '../../assets/resources/3.png';
import i2 from '../../assets/resources/4.png';
import i3 from '../../assets/resources/6.png';
import i4 from '../../assets/resources/10.png';
import i5 from '../../assets/resources/12.png';
import i6 from '../../assets/resources/13.png';
import i7 from '../../assets/resources/14.png';
import i8 from '../../assets/resources/8.png';
import i9 from '../../assets/resources/7.png';



function PublicResources() {

    const Images = [
        {path: i1, text: 'TOPIC NAME 1', class:"w-[300px] h-[450px] object-cover"},
        {path: i2, text: 'TOPIC NAME 1'},
        {path: i3, text: 'TOPIC NAME 1'},
        {path: i4, text: 'TOPIC NAME 1'},
        {path: i5, text: 'TOPIC NAME 1'},
        {path: i6, text: 'TOPIC NAME 1'},
        {path: i7, text: 'TOPIC NAME 1'},
        {path: i8, text: 'TOPIC NAME 1'},
        {path: i9, text: 'TOPIC NAME 1'},
    ];

    
    return(
        <div>
            <Header/>
            <section>
            <div className="  mx-auto flex flex-col items-center justify-center text-center mb-8 md:mb-[30px] mt-[10px] md:mt-[50px]">
                <h1 className="font-normal  text-[#376489]  font-mognolia text-[40px] md:text-[50px] md:leading-[56px] mt-4">
                    Emotional Intelligence Resources for Parents, Teachers and Kids.
                </h1>
                <p className=" md:mb-[80px] w-[344px] h-[87px]  leading-[18px] md:w-[990px] md:h-[72px]  text-center text-bblue md:text-[18px]  font-montserrat md:leading-[30px]  text-[12px]  ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>       
            </div> 

            
                <ImageGrideR Images={Images}/>
                
            
            </section>
            <SubscribeSection />
            <Footer/>
        </div>
    );
}

export default PublicResources;