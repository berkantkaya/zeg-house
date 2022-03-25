import React from 'react'
import Navbar from '../components/Navbar'
import PromotionHead from '../components/PromotionHead'

const About = () => {
  return (
    <div>
        <div className="bg-[#343433]">
        <PromotionHead />
        <Navbar />
      </div>
      <div className="flex items-center md:mb-5 justify-around tracking-wider text-gray-200 py-5 px-3 text-sm md:text-base lg:h-52 bg-[url('/src/utils/backImage/banner.png')]">
        <p className="text-2xl md:text-3xl xl:text-4xl font-bold">
          Hakkımızda
        </p>
      </div>
      <div className="my-1 lg:my-12 xl:my-2 flex flex-wrap items-center justify-around ">
        <div className="xl:max-w-[500px] 2xl:max-w-[600px] space-y-4 md:space-y-7 p-2 mb-10 md:mb-20 text-center">
          <p className="md:text-6xl text-xl">HAKKIMIZDA</p>
          <hr className="w-20 border-2 border-[#978148] rounded-full m-auto" />
          <p>
            Gökmen Zeki Alüminyum Kapak Sistemleri, 1997 yılında İzmir Karşıyaka
            Şemikler’de kurulmuş; uzun süre perakende cam sektöründe hizmet
            vermiştir. 2009 yılında ise alüminyum cam kapak ve ray dolap kapağı
            imalatı ile mobilya sektörüne başlamıştır. Ufkunu hep açık tutan,
            prensiplerinden ödün vermeyen, yenilikçi işletme vizyonunu hiç
            bozmayan Gökmen Zeki; hedefi daima müşteri memnuniyeti olan ve
            kazancını müşteri memnuniyeti için harcayan bir firma olmaya devam
            edecektir. Gökmen Zeki, yeni markası Propino ile daha inovatif, daha
            aktif bir firma yolunda emin adımlarla yürümekte ve sektördeki
            yerini ön sıralara taşımaktadır.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About