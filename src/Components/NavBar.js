import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillWallet,
  AiFillFire,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite, MdLocalOffer } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav ]= useState(false);
  
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={20} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          BEST <span className="font-bold">EATS</span>
        </h1>
        <div className=" lg:flex   flex-row items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full  p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center  px-2 w-[300px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search Foods"
        ></input>
      </div>
      <button className="bg-black text-white flex justify-center items-center  rounded-lg py-3 w-[120px]">
        <BsFillCartFill size={20} className="mr-1" />
        Cart
      </button>
      {nav ? 
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      : ""}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={20}
          className=" absolute right-4 top-4"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-4 ">
              <TbTruckDelivery size={30} className="mr-2" />
              Orders
            </li>
            <li className="flex text-xl py-4 ">
              <MdOutlineFavorite size={30} className="mr-2" />
              Favorites
            </li>
            <li className="flex text-xl py-4 ">
              <AiFillWallet size={30} className="mr-2" />
              Wallet
            </li>
            <li className="flex text-xl py-4 ">
              <FiHelpCircle size={30} className="mr-2" />
              Help
            </li>
            <li className="flex text-xl py-4 ">
              <MdLocalOffer size={30} className="mr-2" />
              Promotion
            </li>
            <li className="flex text-xl py-4 ">
              <AiFillFire size={30} className="mr-2" />
              Best One
            </li>
            <li className="flex text-xl py-4 ">
              <FaUserFriends size={30} className="mr-2" />
              Invite friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
