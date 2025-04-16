import React from "react";
import { useFetchData } from "../../HOC/useFetchData";
import { Imgs } from "../../Constants/Imgs";
export const FirstSlide = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <img
          src={Imgs.frwhite}
          alt=""
          className="w-40 ransition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in "
        />
      </div>
    </div>
  );
};
// "http://localhost:3001/getImages"
