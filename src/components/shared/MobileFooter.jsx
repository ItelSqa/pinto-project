import React from 'react';
import footerLogo from "../../assets/footerLogo.png";

export default function MobileFooter() {
  return (
    <footer className="w-full flex justify-around items-center bg-[#C1989F] text-[#FAF5F0] text-center py-4 text-[20px] font-semibold px-3 z-10">
       <img src={footerLogo} width={80} height={80} />
       <span className="text-xs">© 2024 Stephanie Pinto. All rights reserved.</span>
    </footer>
  );
};
