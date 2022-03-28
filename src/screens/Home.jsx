import React from "react";
import Form from "../components/Form";
import Information from "../components/Information";
import Navbar from "../components/Navbar";
//import PromotionHead from "../components/PromotionHead";
import Map from "../components/Map";
import { useNavigate } from "react-router-dom";
import Refer from "../components/Refer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full">
      <div className="bg-[url('/src/utils/backImage/zegbackgr.png')] h-auto lg:h-[777px] max-w-full bg-no-repeat ">
        {/* <PromotionHead /> */}
        <Navbar />
        <div className="flex flex-col p-8 sm:p-16 lg:px-36 justify-center w-full items-start h-full">
          <div className="text-white">
            <div className="text-3xl sm:text-7xl lg:text-8xl font-semibold mb-2">
            Zeg House ile 
            </div>
            <div className="text-3xl sm:text-7xl lg:text-8xl font-semibold mb-2">
            Özgürce Yaşayın!
            </div>
            <div className="tracking-wider mt-3 lg:mt-6 lg:text-lg font-semibold lg:ml-2">Hayalinizdeki küçük eve kavuşma vakti</div>
            <button  onClick={() => navigate(`/products`)} className="bg-[#A36D4D] text-white py-2 px-4 rounded-lg font-semibold text-base mt-3 lg:mt-8">Daha Fazla</button>
          </div>
        </div>
      </div>
      <Information />

      <Refer mt="mt-16"/>
       
       <div className="h-44"></div>

      <Map size="80vh" />
      <Form />
    </div>
  );
};

export default Home;
