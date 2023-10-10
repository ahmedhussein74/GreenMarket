import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [view, setView] = useState(false);
  const [icon, setIcon] = useState("fa-solid fa-bars");

  const changeHeight = () => {
    if (window.screen.width < 1024) {
      if (view) {
        setView(false);
        setIcon("fa-solid fa-bars");
        document.querySelector("nav").style.height = "60px";
      } else {
        setView(true);
        setIcon("fa-solid fa-xmark");
        document.querySelector("nav").style.height = "480px";
      }
    }
  };
  return (
    <nav className="w-full h-[60px] flex overflow-hidden flex-wrap lg:items-center lg:justify-around absolute duration-1000 bg-slate-900 z-10">
      <header className="w-full lg:w-fit h-[60px] px-3 lg:px-0 text-white flex justify-between items-center">
        <p className="text-[24px] lg:text-[30px]">
          Green<span className="text-green-600">Market</span>
        </p>
        <i
          onClick={changeHeight}
          className={`${icon} block lg:hidden text-[25px]`}
        ></i>
      </header>
      <aside className="text-white flex flex-wrap gap-0 lg:gap-[30px]">
        <NavLink
          to="/"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Home
        </NavLink>
        <NavLink
          to="/vegetables"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Vegetables
        </NavLink>
        <NavLink
          to="/fruits"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Fruits
        </NavLink>
        <NavLink
          to="/cheese"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Cheese
        </NavLink>
        <NavLink
          to="/dairy"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Dairy
        </NavLink>
        <NavLink
          to="/desserts"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Desserts
        </NavLink>
        <NavLink
          to="/meat"
          onClick={changeHeight}
          className="h-[60px] lg:h-fit w-full lg:w-fit px-3 lg:px-0"
        >
          Meat
        </NavLink>
      </aside>
    </nav>
  );
};

export default Nav;
