import React, { useState } from "react";
import AllProduct from "../components/AllProducts";
import Navbar from "../components/Navbar";
import { dataProduct } from "../data";

const Product = () => {
    const [inc, setInc] = useState(2)
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="flex items-center md:mb-5 justify-around tracking-wider text-gray-200 py-5 px-3 text-sm md:text-base lg:h-60 bg-[url('/src/utils/backImage/banner.png')]">
            <p className="text-2xl md:text-3xl xl:text-4xl font-bold">
              MODELLERİMİZ
            </p>
          </div>
      <AllProduct/>
    </div>
  );
};

export default Product;
