import Image from "next/image";
import React from "react";
import { merriweatherSans } from "../ui/fonts";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center gap-20 items-center bg-gray-800 font-bold h-screen w-[35%]">
        <h1 className={`${merriweatherSans.className} font-bold text-xl`}>Social matrix</h1>
        <Image src={'/socialmatrix-auth.jpg'} alt="socialmatrix-auth" width={500} height={500} className="border-2 border-gray-800 rounded" />    
      </div>
      {children}
    </div>
  );
};

export default layout;
