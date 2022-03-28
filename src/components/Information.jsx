import React from "react";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const navigate = useNavigate();

  const product = [
    {
      id: 0,
      name: "MODEL 1",
    },
    {
      id: 1,
      name: "MODEL 2",
    },
    {
      id: 2,

      name: "MODEL 3",
    },
  ];

  const detail = (id) => {
    console.log(id);
  };
  return (
    <div className="max-w-[1800px] m-auto text-sm md:text-base">
      <div className=" my-1 lg:my-12 xl:my-2 flex flex-wrap items-center justify-center ">
        <img
          className="w-full max-h-[500px] contain xl:max-h-full xl:w-[450px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/talal.png"
          alt=""
        />
        <div>
          <div className="bg-[#F5F5F5] xl:max-w-[700px] space-y-4 md:space-y-7 p-5 sm:py-12">
            <div className="flex items-end justify-center xl:justify-start">
              <hr className=" sm:block hidden w-48 border border-[#978148] rounded-lg m-1" />
              <p className="md:text-4xl font-semibold text-xl">HAKKIMIZDA</p>
            </div>
            <p className="tracking-wider">
              Zeg House; tiny House üreticisi, minimal yaşam, yeni nesil evler
              ve yaşam kompleksi sunan İzmir merkezli bir markadır. Zeg House
              sadece bir ev değil, bir değer ve gelecek. Büyük bir kalbi olan
              küçük bir alanda yaşamak yeni bir yaşam tarzı. Hayat her zaman
              konfor bölgesinin dışında bir adımla başlar. Ekip çalışmamız her
              geçen gün büyümemize, insanların yüzlerine mutluluk ve gülümseme
              getirmemize yardımcı oluyor.
            </p>
          </div>
          <div className="flex items-center justify-around mt-3 sm:mt-10 flex-wrap">
            <div className="flex  flex-col  items-center md:space-x-3 m-1">
              <p className="text-[#A36D4D] text-2xl md:text-5xl font-semibold">
                10
              </p>
              <p className=" md:text-lg tracking-wider w-10 sm:w-full">PROJE</p>
            </div>
            <div className=" flex flex-col items-center md:space-x-3">
              <p className="text-[#A36D4D] text-2xl md:text-5xl font-semibold">
                8
              </p>
              <p className=" md:text-lg tracking-wider w-10 sm:w-full">
                KİŞİLİK EKİP
              </p>
            </div>
            <div className="flex flex-col  items-center md:space-x-3 m-1">
              <p className="text-[#A36D4D] text-2xl md:text-5xl font-semibold">
                3
              </p>
              <p className=" md:text-lg tracking-wider w-10 sm:w-full">
                FARKLI MODEL
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 xl:-my-1 hidden xl:flex flex-wrap items-center justify-center  ">
        <div className=" bg-[#F5F5F5] xl:max-w-[700px] space-y-4 md:space-y-7 p-5 sm:py-12">
          <div className="flex items-end justify-center xl:justify-end">
            <p className="md:text-4xl font-semibold text-xl">MODELLERİMİZ</p>
            <hr className=" sm:block hidden w-52 border border-[#A36D4D] rounded-lg m-1" />
          </div>
          <p className="tracking-wider text-center">
            Şehir yaşamından uzaklaşıp özgürce yaşamanız için aşağıdaki
            modellerimizden birini seçebilirsiniz.
          </p>
          <div className="space-y-8 xl:pt-6 w-full">
            {product.map((prd, i) => (
              <div
                className="flex items-center justify-between border-b border-[#A36D4D] pb-"
                key={i}
              >
                <p className="2 cursor-pointer font-semibold">{prd.name}</p>
              </div>
            ))}
            <button
              onClick={() => navigate(`/products`)}
              className="border py-2 px-4 rounded-lg bg-[#A36D4D] mb-1 text-white"
            >
              Detaylı Bilgi
            </button>
          </div>
        </div>
        <img
          className="max-h-[500px] xl:max-h-full w-full xl:w-[450px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/groupimg.png"
          alt=""
        />
      </div>
      <div className="my-12 xl:my-2 flex xl:hidden flex-wrap items-center justify-around  ">
        <img
          className="max-h-[500px] xl:max-h-full w-full xl:w-[450px] mb-3 md:mb-10 lg:mb-2"
          src="/assets/zeg-images/groupimg.png"
          alt=""
        />
        <div className="bg-[#F5F5F5] xl:max-w-[700px] space-y-4 md:space-y-7 p-5 sm:py-12">
          <div className="flex items-end justify-center xl:justify-end">
            <p className="md:text-4xl font-semibold text-xl">MODELLERİMİZ</p>
            <hr className=" sm:block hidden w-52 border border-[#A36D4D] rounded-lg m-1" />
          </div>
          <p className="tracking-wider">
            Şehir yaşamından uzaklaşıp özgürce yaşamanız için aşağıdaki
            modellerimizden birini seçebilirsiniz.
          </p>
          <div className="space-y-8 xl:pt-6 w-full">
            {product.map((prd, i) => (
              <div
                className="flex items-center justify-between border-b border-[#A36D4D] pb-"
                key={i}
              >
                <p
                 
                  className="2 cursor-pointer font-semibold"
                >
                  {prd.name}
                </p>
              </div>
            ))}
            <button  onClick={() => navigate(`/products`)} className="border py-2 px-4 rounded-lg bg-[#A36D4D] mb-1 text-white">
              Detaylı Bilgi
            </button>
          </div>
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
              <p className="md:text-3xl font-semibold text-xl">
                NEDEN ZEG HOUSE?
              </p>
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

export default Information;
