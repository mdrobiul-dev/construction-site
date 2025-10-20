import React from "react";
import logo from '/images/logo.png'
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";


const Navbar = () => {
  const navMenu = [
    {
      navContent: "Home",
      navLinks: "/",
    },
    {
      navContent: "Team",
      navLinks: "/",
    },
    {
      navContent: "Products",
      navLinks: "/",
    },
    {
      navContent: "Blog",
      navLinks: "/",
    },
    {
      navContent: "Shop",
      navLinks: "/",
    },
    {
      navContent: "Contact",
      navLinks: "/",
    },
  ];

  return (
    <>
      <nav>
        <div className="main container flex items-center justify-between w-full h-[136px]">
            <div className="img w-[148px]">
                <img src={logo} alt="logo" />
            </div>

            <div className="menu-items flex items-center gap-9">
                {navMenu.map((item, id) => (
                  <a key={id}
                    to={item.navLinks}
                    className="text-[17px] text-[#100F0F] dark:text-white font-bold font-exo hover:text-[#FF6600] cursor-pointer"
                  >
                    {item.navContent}
                  </a>
                ))}
              </div>

              <div className="right-item flex items-center gap-4">
                <div className="flex items-center gap-1 text-base text-whiteText font-semibold font-josefin cursor-pointer">
                  Login
                  <GoPerson />
                </div>
                <div className="flex items-center gap-1 text-base text-whiteText font-semibold font-josefin cursor-pointer">
                  Wishlist
                  <CiHeart />
                </div>
                <div className="text-base text-whiteText font-semibold font-josefin cursor-pointer">
                  <BsCart2 />
                </div>
              </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
