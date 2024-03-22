import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/logo.png";

const Menu = () => (
  <>
    <p className="text-lg capitalize font-medium">
      <a href="#features">Services</a>
    </p>
    <p className="text-lg capitalize font-medium max-[640px]:mt-3">
      <a href="#community">Community</a>
    </p>
    <p className="text-lg capitalize font-medium max-[640px]:mt-3">
      <a href="#about">About Us</a>
    </p>
    <p className="text-lg capitalize font-medium max-[640px]:mt-3">
      <a href="#contact">Contact Us</a>
    </p>
    <p className="text-lg capitalize font-medium max-[640px]:mt-3">
      <a href="#account">Account </a>
    </p>
  </>
);

function navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center bg-white">
      <div className="logo max-sm:-ml-[12vw] max-md:-ml-[9vw]  max-lg:-ml-[6vw]">
        <a href="/">
        <img className="h-7 w-48 scale-90" src={logo} alt="logo" />
        </a>
      </div>

      <div className="hidden lg:flex gap-10 ">
        <a href="#features" className="text-lg capitalize font-medium">
          Services
        </a>
        <a href="#community" className="text-lg capitalize font-medium">
          Community
        </a>
        <a href="#about" className="text-lg capitalize font-medium">
          About Us
        </a>
        <a href="#contact" className="text-lg capitalize font-medium">
          contact us
        </a>
      </div>
      <div className="hidden  lg:flex items-center">
        <a href="account" className="text-lg capitalize font-medium ">
          Account 
        </a>
        <MdAccountCircle className="ml-1" />
      </div>
      <div className="navbar__menu -mr-[6vw]  lg:hidden">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="flex flex-col justify-end items-end text-right px-20 md:px-16 absolute mt-14 right-1 min-w-210 bg-white shadow rounded-xl ">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
}

export default navbar;
