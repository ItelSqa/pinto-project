import React from "react";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import "../../styles/BooksNew.css"
import imgUpper from "../../assets/image 6 (3).png"
import imgLower from "../../assets/aruba.png"
import upperBorder from "../../assets/upperBorder.png"
import image_2 from "../../assets/image_2.png"
import image_7 from "../../assets/image 7.png"
import countries from "../../assets/countries.png"
import aruba from "../../assets/aruba 3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image_asset.png"
import image6 from "../../assets/image copy.png"

function Books() {
  return (
    <section>
      <Header />
      <div className="section-1 bg-cover bg-center relative overlay mb-5">
        <div className="text-center gap-3 block md:py-[100px]">
            <div className="relative">
              <img src={imgUpper} className="z-10 relative" alt="Upper Image" />
              <img src={upperBorder} className="absolute top-4 left-1 z-0" alt="Upper Border" />
            </div>
            <h2 className="text-[32px] w-[80vw] mx-auto mt-5 mb-3 text-[#376489] font-extrabold font-montserrat">
              MY NEW BOOK IS HERE!
            </h2>
            <h3 className="font-mognolia text-[28px] midtext-color mb-3">With Stephanie Pinto</h3>
            <p className="text-[16px] w-[80vw] mx-auto midtext-color mb-4">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec.</p>
            <div className="relative flex justify-end">
              <img src={imgLower} className="z-10 relative" alt="Lower Image" />
              <img src={upperBorder} className="absolute top-3 right-5 z-0" alt="Upper Border" />
            </div>
        </div>
      </div>
      <div className="section-2">
        <img src={image_2} />
      </div>
      <div className="section-3 font-montserrat  bg-[#faf5f1]">
        <div className="px-8">
          <h3 className="text-[28px] font-black relative top-[-5vh]">
            <div className="bg-[#faf5f1] pt-3 pl-3 opacity-[0.9]">
              <span className="text-[#C1989F]">FROM</span> <span className="text-[#376489]">CHAOS</span> <span className="text-[#C1989F]">TO</span>
            </div>
            <span className="text-[#376489] pl-3">CONNECTION</span>
          </h3>
          <h3 className="font-mognolia text-[36px] text-[#376489] mb-3 mt-[-20px]">My new book is here!</h3>
          <p className="mb-3 text-[#376489]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit.</p>
          <p className="mb-3 text-[#376489]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet.</p>
          <div className="flex mt-4 mb-4">
            <span className="text-[#376489] font-bold mr-5 w-[103] h-[32]">BUY NOW</span>
            <span><img src={image_7} /></span>
          </div>
          <div className="flex z-10 relative">
            <img src={countries} />
          </div> 
        </div> 
        <div className="flex w-full relative mt-[-40vh] left-0 px-0">
          <img src={aruba} className="z-0 bg-cover bg-center object-cover"/>
        </div>
      </div> 
      <div className="section-4">
        <img src={image4} />
      </div>
      <div className="section-5 font-montserrat  bg-[#FAF5F0] opacity-[0.9] bg-cover bg-center relative overlay px-9">
        <div className="w-[80vw] bg-[#FAF5F0] px-9 pb-9">
          <h3 className="text-[28px] w-[100vw] font-black relative top-[-7vh]">
            <div className="bg-[#faf5f1] pt-3 px-[2vw] pl-4 w-[80vw] ml-[-8vw] opacity-[0.9]">
              <span className="text-[#C1989F]">ORDER</span> <span className="text-[#376489]">YOUR</span> <span className="text-[#376489]">SIGNED</span>
            </div>
            <span className="text-[#376489] ml-[-8vw] px-3">COPY!</span>
          </h3>
          <h3 className="font-mognolia text-[36px] text-[#376489] mb-3 mt-[-20px] opacity-[0.9] px-1">My new book is here!</h3>
          <p className="mb-3 text-[#376489]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit.</p>
          <p className="mb-3 text-[#376489]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet.</p>
          <div className="flex mt-4 mb-4">
            <span className="text-[#376489] font-bold mr-5 w-[103] h-[32]">BUY NOW</span>
            <span><img src={image_7} /></span>
          </div>
          <div className="flex z-10 relative">
            <img src={countries} />
          </div> 
        </div>
        <div className="flex w-[100vw] relative left-0 px-0 mt-[-40vh]">
          <img src={image5} className="z-0 bg-cover bg-center object-cover"/>
        </div>
      </div> 
      <div className="section-7 font-montserrat bg-[#faf5f1]">
      {/* <div className=" w-[80vw] bg-[#376489] px-8 pt-64 bg-last-img">
          <h3 className="font-mognolia text-[36px] text-[#376489] mb-3 mt-[-20px]">My new book is here!</h3>
          <p className="mb-3 text-[#376489]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet. Tempus enim volutpat elit vel a nisl eu felis. Leo eget donec ullamcorper adipiscing faucibus blandit.</p>
          <p className="mb-3 text-[#376489]">Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla nec. Risus id risus risus duis quisque dignissim amet.</p>
          <div className="flex mt-4 mb-4">
            <span className="text-[#376489] font-bold mr-5 w-[103] h-[32]">BUY NOW</span>
            <span><img src={image_7} /></span>
          </div>
          <div className="flex z-10 relative">
            <img src={countries} />
          </div> 
        </div>  */}
        

        <div className='container relative z-10 flex flex-col items-center gap-8 px-4 mx-auto md:gap-16 lg:flex-row'>
        {/* Left side - Subscribe Form */}
        <div className='flex flex-col justify-center w-full p-4 lg:w-1/2 md:p-8'>
          <h2 className='mb-2 md:mb-4 text-2xl md:text-3xl 2xl:text-[36px] font-extrabold text-[#376489] font-montserrat'>
            LOVE WHAT YOU'RE READING
          </h2>
          <h3 className='mb-4 md:mb-6 text-4xl md:text-5xl 2xl:text-[60px] text-[#376489] font-mognolia'>
            Subscribe for more.
          </h3>
          <p className='mb-6 md:mb-8 text-base md:text-lg 2xl:text-[20px] text-[#376489] font-semibold'>
            Lorem ipsum dolor sit amet consectetur. Nibh consectetur mi nulla
            nec. Risus id risus risus duis quisque dignissim amet. Tempus enim
            volutpat elit vel a nisi eu felis. Leo eget donec ullamcorper
            adipiscing
          </p>
          <form className='flex flex-col sm:flex-row bg-[#FAF5F0] rounded-full overflow-hidden'>
            <input
              type='email'
              placeholder='Enter Email ID'
              className='flex-grow px-4 py-3 border-none outline-none'
              required
            />
            <button
              type='submit'
              className='px-8 sm:px-12 py-3 text-white transition duration-300 bg-[#376489] hover:bg-blue-700 font-semibold'
            >
              SUBMIT
            </button>
          </form>
        </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Books;