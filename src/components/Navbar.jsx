import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, isOpen] = useState(true);
  const navigate = useNavigate();

  const navLink = [
    {
      name: "ANASAYFA",
      link: "/",
    },
    {
      name: "ÜRÜNLER",
      link: "/products",
    },
    {
      name: "İLETİŞİM",
      link: "/information",
    },
  ];

  return (
    <nav className="relative lg:flex lg:justify-around lg:items-center border-b border-gray-400">
      <div className="flex justify-between items-center px-4 py-4">
        <div
          style={{ whiteSpace: "nowrap" }}
          className="text-xl -ml-2 lg:ml-4 bold mt-1"
        >
          <img
            onClick={() => navigate("/")}
            className="mb-2 cursor-pointer"
            src="/assets/zeg-images/Logo1.png"
            alt=""
          />
        </div>
        <div className="lg:hidden pt-2 cursor-pointer mt-3">
          {open ? (
            <AiOutlineMenu
              color="white"
              fontSize={28}
              onClick={() => isOpen(!open)}
            />
          ) : (
            <AiOutlineClose
              color="white"
              fontSize={28}
              onClick={() => isOpen(!open)}
            />
          )}
        </div>
      </div>
      <div
        className={
          open
            ? "hidden px-4 lg:block"
            : "block px-4 lg:block bg-black fixed left-0 w-full"
        }
      >
        {navLink.map((nav, i) => (
          <button
            onClick={() => navigate(nav.link)}
            key={i}
            style={{ whiteSpace: "nowrap" }}
            className="text-white font-semibold h-16 font-sans duration-300 block mr-3 ml-3 lg:inline-block  rounded pr-2 pl-2 mt-3 pb-2 pt-1 hover:text-gray-400"
          >
            {nav.name}
          </button>
        ))}
      </div>
      <div className="sm:flex flex-col items-center space-y-1 hidden">
       <p className="text-white">+90 500 000 00 00</p>
       <div className='flex space-x-2 cursor-pointer ml-1'>
        <img src="/assets/zeg-images/facebook.png" alt="" />
        <img src="/assets/zeg-images/instagram.png" alt="" />
        <img src="/assets/zeg-images/twitter.png" alt="" />
        <img src="/assets/zeg-images/youtube.png" alt="" />
        <img src="/assets/zeg-images/linkedin.png" alt="" />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
