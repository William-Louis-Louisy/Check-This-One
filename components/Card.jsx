/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Card({ url }) {
  return (
    <Link passHref href={url}>
      <div className="cursor-pointer text-knicksBlue hover:text-knicksOrange hover:scale-110 border-2 border-knicksSilver hover:border-knicksOrange py-3 flex flex-col items-center w-4/5 h-[500px] bg-white max-w-[312px] rounded-xl insetShadow hover:shadow-xl duration-300">
        <img
          src="https://image.tmdb.org/t/p/w500/gCxDOdb9LnL1i3d53vV6DjaembV.jpg"
          alt="movie poster"
          className="h-64 rounded-lg mt-4 border-knicksBlue border-2 insetShadow"
        />
        <h2 className="font-black uppercase text-center text-2xl">London</h2>
        <h4 className="font-extralight text-center text-sm">2005-09-03</h4>
        <h4 className="font-semibold text-center text-base mt-6">
          One young man' s incredible journey of self-discovery
        </h4>
        <div className="mt-4 flex flex-col items-center text-center w-full border-t-2 border-knicksSilver">
          <span className="text-sm mt-1">AVAILABLE ON</span>
          <img
            src="https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg"
            alt="provider Logo"
            className="h-10 rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
}
