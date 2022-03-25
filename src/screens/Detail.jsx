import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { dataProduct } from "../data";

const Detail = () => {
  const params = useParams();

  let product = dataProduct.filter((data) => data.id == params.id);
  return (
    <div>
      <div className="bg-black">
        
        <Navbar />
      </div>
      <div className="flex items-center md:mb-5 justify-around tracking-wider text-gray-200 py-5 px-3 text-sm md:text-base lg:h-60 bg-[url('/src/utils/backImage/banner.png')]">
        <p className="text-2xl md:text-3xl xl:text-4xl font-bold">
          {product[0].name}
        </p>
      </div>
      <div className=" px-2 md:px-0">
        {product[0].images.map((prd, index) => (
          <div className="" key={index}>
            <img
              className="w-full md:w-3/4 m-auto "
              src={prd}
              alt=""
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Detail;
