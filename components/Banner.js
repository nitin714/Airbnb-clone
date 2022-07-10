import React from "react";
import Image from "next/image";
import explore from "../public/assets/explore.jpg";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[660px]">
      <Image src={explore} layout="fill" objectFit="cover" />
      <div className="absolute top-[40%] w-full text-center">
        <p className="font-semibold text-white sm:text-lg md:text-2xl">
          Ready to Explore? Perfect, let's connect.
        </p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition duration-150 hover:shadow-xl active:scale-90">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
