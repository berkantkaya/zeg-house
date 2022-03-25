import React from "react";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const navigate = useNavigate();

  const product = [
    {
      "id": 0,
      "name": "LOREM IPSUM",
    },
    {
      "id": 1,
      "name": "LOREM IPSUM",
    },
    {
      "id": 2,

      "name": "LOREM IPSUM",
    }
  ];

  const detail = (id) => {
    console.log(id);
  };
  return (
    <div className="max-w-[1800px] m-auto text-sm md:text-base">
          <div className="my-12 xl:-my-1 hidden xl:flex flex-wrap items-center justify-center lg:space-x-20">
        <div className=" xl:max-w-[600px] space-y-4 md:space-y-7 p-5 sm:py-12">
        <div className="flex flex-col items-start">
          <p className="md:text-3xl font-semibold mb-2 text-xl">Model 1</p>
          <hr className=" sm:block hidden w-full border border-[#A36D4D] rounded-lg m-1" />
          </div>
          <p className="tracking-wider">
            Çok Yakında Sizlerle Olacak...
          </p>
          
          <div className="flex items-center mt-3 justify-between sm:mt-10 flex-wrap">
          <div className="flex items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">50</p>
            <p className="tracking-wider w-10 sm:w-16">Metre Kare</p>
          </div>
          <div className=" flex items-center md:space-x-3">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">2</p>
            <p className="tracking-wider w-10 sm:w-16">Oda</p>
          </div>
          <div className="flex items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider w-10 sm:w-16">Kat</p>
          </div>
        </div>
          <div className="w-full">
            <button className="font-semibold border py-2 px-4 rounded-lg bg-[#A36D4D] mb-1 text-white">
                  Katalog İndir
              </button>
          </div> 
        </div>
        <img
          className="max-h-[400px] xl:max-h-full w-full xl:w-[550px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/Group6214.png"
          alt=""
        />
      </div>
      <div className="my-12 xl:my-2 flex xl:hidden flex-wrap items-center justify-around  ">     
        <img
          className="max-h-[400px] xl:max-h-full w-full xl:w-[550px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/Group6214.png"
          alt=""
        />
        <div className=" xl:max-w-[600px] space-y-4 md:space-y-7 p-5 sm:py-12">
        <div className="flex flex-col items-start">
          <p className="md:text-3xl font-semibold mb-2 text-xl">Model 1</p>
          <hr className=" sm:block hidden w-full border border-[#A36D4D] rounded-lg m-1" />
          </div>
          <p className="tracking-wider">
            Çok Yakında Sizlerle Beraber Olacak...
          </p>
          <div className="flex  items-center pb-3 justify-around flex-wrap">
          <div className="flex flex-col items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">50</p>
            <p className="tracking-wider ">Metre Kare</p>
          </div>
          <div className=" flex flex-col items-center md:space-x-3">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">2</p>
            <p className="tracking-wider ">Oda</p>
          </div>
          <div className="flex flex-col items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider ">Kat</p>
          </div>
        </div>
          <div className="w-full">
            <button className="font-semibold border py-2 px-4 rounded-lg bg-[#A36D4D] mb-1 text-white">
                  Katalog İndir
              </button>
          </div> 
        </div>
      </div>

      

      <div className=" my-1 lg:my-12 xl:my-2 flex flex-wrap items-center justify-center lg:space-x-20">
        <img
          className="w-full max-h-[500px] contain xl:max-h-full xl:w-[550px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/Group6214.png"
          alt=""
        />
        <div className=" xl:max-w-[600px] space-y-4 md:space-y-7 p-5 sm:py-12">
        <div className="flex flex-col items-start">
          <p className="md:text-3xl font-semibold mb-2 text-xl">Model 2</p>
          <hr className=" sm:block hidden w-full border border-[#A36D4D] rounded-lg m-1" />
          </div>
          <p className="tracking-wider">
            Çok Yakında Sizlerle Olacak...
          </p>
          
          <div className="flex items-center mt-3 justify-between sm:mt-10 flex-wrap">
          <div className="flex flex-col md:flex-row items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">50</p>
            <p className="tracking-wider w-10 sm:w-16">Metre Kare</p>
          </div>
          <div className=" flex flex-col md:flex-row items-center md:space-x-3">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider w-10 sm:w-16">Oda</p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider w-10 sm:w-16">Kat</p>
          </div>
        </div>

          <div className="w-full">
            <button className="font-semibold border py-2 px-4 rounded-lg bg-[#A36D4D] mb-1 text-white">
                  Katalog İndir
              </button>
          </div> 
        </div>
      </div>


      <div className="my-12 xl:-my-1 hidden xl:flex flex-wrap items-center justify-center lg:space-x-20">
        <div className=" xl:max-w-[600px] space-y-4 md:space-y-7 p-5 sm:py-12">
        <div className="flex flex-col items-start">
          <p className="md:text-3xl font-semibold mb-2 text-xl">Model 3</p>
          <hr className=" sm:block hidden w-full border border-[#A36D4D] rounded-lg m-1" />
          </div>
          <p className="tracking-wider">
            Çok Yakında Sizlerle Olacak...
          </p>
          
          <div className="flex items-center mt-3 justify-between sm:mt-10 flex-wrap">
          <div className="flex items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">40</p>
            <p className="tracking-wider w-10 sm:w-16">Metre Kare</p>
          </div>
          <div className=" flex items-center md:space-x-3">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider w-10 sm:w-16">Oda</p>
          </div>
          <div className="flex items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider w-10 sm:w-16">Kat</p>
          </div>
        </div>
      
          <div className="w-full">
            <button className="font-semibold border py-2 px-4 rounded-lg bg-[#A36D4D] mb-1 text-white">
                  Katalog İndir
              </button>
          </div> 
        </div>
        <img
          className="max-h-[400px] xl:max-h-full w-full xl:w-[550px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/Group6214.png"
          alt=""
        />
      </div>

      <div className="my-12 xl:my-2 flex xl:hidden flex-wrap items-center justify-around  ">
        <img
          className="max-h-[500px] xl:max-h-full w-full xl:w-[450px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/Group6214.png"
          alt=""
        />
       <div className=" xl:max-w-[600px] space-y-4 md:space-y-7 p-5 sm:py-12">
        <div className="flex flex-col items-start">
          <p className="md:text-3xl font-semibold mb-2 text-xl">Lorem Ipsum</p>
          <hr className=" sm:block hidden w-full border border-[#A36D4D] rounded-lg m-1" />
          </div>
          <p className="tracking-wider">
            Çok Yakında Sizlerle Olacak...
          </p>
          
          <div className="flex  items-center pb-3 justify-around flex-wrap">
          <div className="flex flex-col items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">40</p>
            <p className="tracking-wider ">Metre Kare</p>
          </div>
          <div className=" flex flex-col items-center md:space-x-3">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider ">Oda</p>
          </div>
          <div className="flex flex-col items-center md:space-x-3 m-1">
            <p className="text-[#A36D4D] text-2xl md:text-6xl font-semibold">1</p>
            <p className="tracking-wider  ">Kat</p>
          </div>
        </div>
        
          <div className="w-full">
            <button className="font-semibold border py-2 px-4 rounded-lg bg-[#A36D4D] mb-1 text-white">
                  Katalog İndir
              </button>
          </div> 
        </div>
      </div>


      <div className="bg-[url('/src/utils/backImage/infobanner.png')] h-auto my-10 lg:h-[300px] max-w-full bg-no-repeat flex justify-end items-center p-5">
         <div className="flex flex-col items-start mx-10">
           <p className="text-white text-lg font-bold tracking-wider">Sizlere daha iyi hizmet verebilmek için buradayız.</p>
           <p className="text-gray-300 text-sm my-4">Sorularınız veya görüşleriniz için bizimle iletişime geçin</p>
           <button className="text-white bg-transparent border border-white px-3 py-2">Bize Ulaşın</button>
         </div>
      </div>

    
      <div className=" my-1 lg:my-12 xl:my-2 flex flex-wrap items-center justify-center xl:space-x-28">
        <img
          className="w-full contain xl:max-h-full sm:w-[450px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/fiveimage.png"
          alt=""
        />
        <div>
        <div className="xl:max-w-[500px] space-y-4 md:space-y-7 p-5 sm:py-12">
           <div className="flex items-end justify-center xl:justify-start">
          <hr className=" sm:block hidden w-5 md:w-36 border border-[#978148] rounded-lg m-1" />
          <p className="md:text-3xl font-semibold text-xl">NEDEN ZEG HOUSE?</p>
          </div>
          <p className="tracking-wider">
          Zeg House olarak evlerin dış ve iç dekorasyonunda  yüksek kaliteli yapı malzemeleri sunuyoruz.
          </p>
          <p className="tracking-wider">
          Elektrik ve su şebekeleri tamamen kurulu şekilde isteğe bağlı olarak Güneş panelleri mümkündür. Mevcut farklı enerji kaynaklarına uyumlu. Prefabrik yapı, daha düşük malzeme atık maliyetleri sunar ve enerji maliyetlerini önemli ölçüde azaltabilir şekilde evlerimizi tasarladık. 4 Mevsim rahatlıkla kullanabileceğiniz altyapıya sahiptir.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
