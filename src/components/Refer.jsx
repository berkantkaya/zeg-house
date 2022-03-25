import React from "react";

const Refer = ({mt}) => {
  return (
    <div className={`bg-black p-3 h-auto lg:h-72 relative ${mt}`}>
      <div className="lg:max-w-6xl max-w-md m-auto px-5 tracking-wider">
          <div className="flex items-end my-5">
            <hr className=" sm:block hidden w-52 border border-[#A36D4D] rounded-lg m-1" />
            <p className="md:text-3xl text-white text-xl">REFERANSLARIMIZ</p>
          </div>
      </div>
      <div className="w-full lg:absolute flex items-start justify-center flex-wrap lg:space-x-16 lg:top-28">
           <div className="bg-[#C8C3B5] flex flex-col items-center justify-center max-w-[500px] h-72 sm:h-60 py-5 px-2 ">
                 {/* <div className="flex items-center space-x-2 pt-5 pb-2">
                     <img className="w-12" src="/assets/zeg-images/Vector.png" alt="" />
                     <span className="text-2xl font-bold">Logoipsum</span>
                 </div> */}
                 <p className=" sm:px-10 text-center  pt-4 pb-7">Küçük evimizi inşa etmek için bir şirket seçerken önemli araştırmalar yaptık. Başından sonuna kadar nazik, çalışkan ve yardımseverdiler ve gerçekten çok ötesine geçtiler. Bizimle birlikte çalıştılar ve tasarımdan binaya kadar her adımda bizi tamamen bilgilendirdiler.</p>
                 <p className="font-bold text-xl">Özlem Hanım</p>
           </div>
           <div className="bg-[#C8C3B5] mt-10 lg:mt-0 flex flex-col items-center justify-center max-w-[500px] h-72 sm:h-60 py-5 px-2 ">
                 {/* <div className="flex items-center space-x-2 pt-5 pb-2">
                     <img className="w-12" src="/assets/zeg-images/Vector.png" alt="" />
                     <span className="text-2xl font-bold">Logoipsum</span>
                 </div> */}
                 <p className=" sm:px-10 text-center  pt-4 pb-7">Evimizi inşa ederken birçok yönden eşime ve bana yardım ettiler! Çok kaliteli bir işçilik var. En ince detayına kadar düşünülmüş bir çalışma oldu. Teşekkürler.</p>
                 <p className="font-bold text-xl">Veli Aslan</p>
           </div>
      </div>
    </div>
  );
};

export default Refer;
