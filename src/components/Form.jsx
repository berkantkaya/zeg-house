/* eslint-disable no-undef */
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPrinter, BsTelephone } from "react-icons/bs";
import { send } from "emailjs-com";

const Form = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name:"",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_rpomb2q", "template_9hypkfk", toSend, "uGRi5C1uF4245qlUK")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="lg:bg-[#C8C3B5] lg:h-96 relative flex items-center justify-around flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2 md:flex md:justify-center">
        <div className="md:flex md:flex-col px-6 py-5 md:px-3 md:py-0 space-y-4">
          <p className="text-5xl mb-5">İletişime Geçin</p>
          <p className="font-bold">
            ZEG HOUSE
          </p>
          <p className="text-gray-600">
          Bizimle aşağıdaki numaradan iletişime geçebilirisiniz.
          </p>

          <p className="flex items-center text-gray-600">
            <BsTelephone className="mr-1" /> +90 (530) 678 21 21
          </p>

          <p className="flex items-center text-gray-600">
            <AiOutlineMail className="mr-1" /> info@zeghouse.com
          </p>
        </div>
      </div>
      <div className=" w-full md:w-1/2 ">
        <div className="lg:absolute lg:top-10 block p-6 bg-white max-w-2xl">
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-3 md:mb-6">
                <label
                  for="name"
                  className="form-label inline-block mb-2 text-gray-700 font-semibold"
                >
                  Ad Soyad
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  className="form-control
          block
          w-full
          px-3
          py-2
          text-sm
          tracking-wider
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white  focus:outline-none"
                  id="name"
                  aria-describedby="emailHelp123"
                  placeholder="Adınızı girin"
                />
              </div>
              <div className="form-group mb-3 md:mb-6">
                <label
                  for="eposta"
                  className="form-label inline-block mb-2 text-gray-700 font-semibold"
                >
                  Eposta
                </label>
                <input
                  type="email"
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  className="form-control
          block
          w-full
          px-3
          py-2
          text-sm
          tracking-wider
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:outline-none"
                  id="eposta"
                  aria-describedby="emailHelp124"
                  placeholder="Eposta adresinizi girin"
                />
              </div>
            </div>
            <div className="form-group mb-3 md:mb-6">
              <label
                for="phone"
                className="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                Telefon
              </label>
              <input
                type="text"
                name="to_name"
                value={toSend.to_name}
                onChange={handleChange}
                className="form-control block
        w-full
        px-3
        py-2
        text-sm
        tracking-wider
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white  focus:outline-none"
                id="phone"
                placeholder="Telefon numaranızı girin"
              />
            </div>
            <div className="form-group mb-3 md:mb-6">
              <label
                for="exampleFormControlTextarea1"
                className="form-label inline-block mb-2 text-gray-700 font-semibold"
              >
                Mesaj
              </label>
              <textarea
                name="message"
                value={toSend.message}
                onChange={handleChange}
                className="
        form-control
        block
        w-full
        px-3
        py-2
        text-sm
        tracking-wider
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white  focus:outline-none
      "
                id="exampleFormControlTextarea1"
                rows="8"
                placeholder="Mesajınızı girin"
              ></textarea>
            </div>
            <button
              type="submit"
              className="
              w-1/2
      md:w-1/5
      h-9
      px-2
      bg-white
      text-[#978148]
      border border-[#978148]
      rounded
      shadow-md
      transition
      duration-150
      ease-in-out"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
