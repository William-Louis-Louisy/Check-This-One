import React, { useState } from "react";
import AdminBtn from "./AdminBtn";
import BurgerMenu from "./BurgerMenu";
import CloseBtn from "./CloseBtn";
import LinkButton from "./LinkButton";
import Logo from "./Logo";

export default function Header({ onClickFunction }) {
  return (
    <div className=" z-50 w-full h-14 fixed shadow-lg px-8 flex flex-row justify-between items-center bg-white">
      <button onClick={onClickFunction} className="flex md:hidden">
        <BurgerMenu />
      </button>
      <Logo link="/" />
      <div className="hidden md:flex flex-row gap-3">
        <LinkButton content="MOVIES" href="/Movies" />
        <LinkButton content="SERIES" href="/Series" />
        <AdminBtn link="/Dashboard" />
      </div>
      <div className="h-10 w-10 bg-transparent md:hidden"></div>
    </div>
  );
}
