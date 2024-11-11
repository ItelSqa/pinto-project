import { useState } from "react";

const CardImg = ({imagePath, text}) => {

    
        const [isHovered, setIsHovered] = useState(false);
      
    return(
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={imagePath} alt={text} className="w-[500px] h-[450px] object-cover" />
       

         {isHovered && ( 
            <div className="absolute inset-0 flex justify-center items-end md:mb-[40px]"> 
            <button className="bg-dark-blue font-montserrat font-medium md:text-[24px] md:h-[45px] text-[10px] text-white md:w-[250px] h-[28px] w-[147px] rounded-full flex items-center justify-center gap-3 mb-4">
           
            Available Soon
            </button> 
       </div> 
    
       )} 
       </div>
    );
};

const ImageGridsR = ({ Images }) => {
    const [visibleImages, setvisibleImages] = useState(Images);
    

    return(
            <div className="max-w-[1000px] mx-auto grid grid-cols-2 p-2 gap-3 md:grid-cols-3 align-middle justify-center">
                {visibleImages.map((image, index) => (
                <CardImg key={index} imagePath={image.path} text={image.text} />
                ))}
            </div>
    );
}
export default ImageGridsR; 