import React, { useState, useEffect } from 'react';
import Header from "../../components/shared/Header";
import MobileFooter  from "../../components/shared/MobileFooter";
import Footer from "../../components/shared/Footer";
import ContactUpperImage from "../../assets/ContactUpperImage.png";
import "../../styles/contact.css";

function Contact() {

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Function to update state based on window width
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  // Set up event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <section className="flex flex-col min-h-screen">
          <Header />
          <section className="flex-grow relative">
            {/* Contact Me Page Background Image */}
            <div
              className="contact-upper-image w-full h-[65vh] md:h-[60vh] flex items-center bg-cover bg-center"
            >
              <div className="text-center gap-3 w-full block md:py-[100px]">
                <h2 className="text-[60px] text-[#376489] font-extrabold font-montserrat">
                  CONTACT
                </h2>
              </div>
            </div>

            <div className='flex py-32 justify-around'>
                {/* Form Section */}
                <div className="absolute flex items-center justify-center font-montserrat relative z-20 bg-[#faf5f1] px-4">
                  <form className="flex flex-col justify-center w-full max-w-3xl h-auto px-8 pl-0 py-6">
                    <div className='flex justify-around'>
                      <div className='flex flex-col mr-2'>
                        <label htmlFor="First_Name" className="mb-2">
                          First Name<span className="text-red-700 text-xl">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="First_Name" 
                          placeholder="Input First Name" 
                          className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                          required 
                          aria-required="true"
                        />
                      </div>
                      <div className='flex flex-col'>
                          <label htmlFor="Last_Name" className="mb-2">
                            Last Name<span className="text-red-700 text-xl">*</span>
                          </label>
                          <input 
                            type="text" 
                            id="Last_Name" 
                            placeholder="Input Last Name" 
                            className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                            required 
                            aria-required="true"
                          />     
                      </div>          
                    </div>

                    <label htmlFor="Email" className="mb-2">
                      Email Address<span className="text-red-700 text-xl">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="Email" 
                      placeholder="Input Email" 
                      className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                      required 
                      aria-required="true"
                    />
                    
                    <label htmlFor="Message" className="mb-2">Message</label>
                    <textarea 
                      id="Message" 
                      placeholder="Leave us a message..." 
                      className="mb-4 px-3 py-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                    />
                    
                    <button type="submit" className="bg-[#376489] text-base py-2 text-white rounded-full hover:bg-[#2c4f63] transition duration-300" aria-label="Submit Message">
                      Submit Message
                    </button>
                  </form>
                </div>

              {/* Image of Women */}
              <div
                className="flex justify-center z-10">
                <img 
                  src={ContactUpperImage} 
                  alt="Illustration representing contact" 
                  className="h-auto max-w-[90vw] md:max-w-[60vw] object-contain"
                />
              </div>

            </div>
            {/* AboveFooterContactMe Section */}
            <div
              className="aboveFooterContactMeSection w-[40vw] h-[15vh] md:h-[25vh] bg-cover object-cover"
            ></div>
          </section>
          <Footer />
        </section>
      ) : (
        <section className="flex flex-col min-h-screen">
          <Header />
          
          <section className="flex-grow relative">
            {/* Contact Me Page Background Image */}
            <div
              className="contact-upper-image w-full h-[65vh] md:h-[60vh] flex items-center bg-cover bg-center"
            >
              <div className="text-center gap-3 w-full block md:py-[100px]">
                <h2 className="text-[50px] mb-[50px] md:text-[60px] text-[#376489] font-extrabold font-montserrat">
                  CONTACT
                </h2>
              </div>
            </div>

            {/* Positioned ContactUpperImage above the ContactMePageImage */}
            <div
              className="ladyImg absolute w-full flex justify-center z-10">
              <img 
                src={ContactUpperImage} 
                alt="Illustration representing contact" 
                className="w-full h-auto max-w-[90vw] md:max-w-[60vw] object-contain"
              />
            </div>

            {/* Form Section */}
            <div className="absolute flex items-center justify-center font-montserrat relative z-20 mt-[10vh] bg-[#faf5f1] px-4 form-position">
              <form className="flex flex-col justify-center w-full max-w-3xl h-auto shadow-md rounded-[20px] px-8 py-6">
                <label htmlFor="First_Name" className="mb-2">
                  First Name<span className="text-red-700 text-xl">*</span>
                </label>
                <input 
                  type="text" 
                  id="First_Name" 
                  placeholder="Input First Name" 
                  className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                  required 
                  aria-required="true"
                />
                
                <label htmlFor="Last_Name" className="mb-2">
                  Last Name<span className="text-red-700 text-xl">*</span>
                </label>
                <input 
                  type="text" 
                  id="Last_Name" 
                  placeholder="Input Last Name" 
                  className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                  required 
                  aria-required="true"
                />

                <label htmlFor="Email" className="mb-2">
                  Email Address<span className="text-red-700 text-xl">*</span>
                </label>
                <input 
                  type="email" 
                  id="Email" 
                  placeholder="Input Email" 
                  className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                  required 
                  aria-required="true"
                />
                
                <label htmlFor="Message" className="mb-2">Message</label>
                <textarea 
                  id="Message" 
                  placeholder="Leave us a message..." 
                  className="mb-4 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#376489]"
                />
                
                <button type="submit" className="bg-[#376489] text-base py-2 text-white rounded-full hover:bg-[#2c4f63] transition duration-300" aria-label="Submit Message">
                  Submit Message
                </button>
              </form>
            </div>

            {/* AboveFooterContactMe Section */}
            <div
              className="aboveFooterContactMeSection w-full h-[45vh] md:h-[50vh] bg-cover bg-center mt-64 object-cover"
            ></div>
          </section>

          <MobileFooter />
        </section>
              )} 
    </>

  );
}

export default Contact;