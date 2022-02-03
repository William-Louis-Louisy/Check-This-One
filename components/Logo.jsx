import Link from "next/link";
import React from "react";

export default function Logo({ link }) {
  return (
    <Link passHref href={link}>
      <div className="flex flex-row -rotate-6 cursor-pointer hover:rotate-0 duration-150">
        <p className="font-black text-5xl text-knicksBlue w-max">C</p>
        <p className="font-black text-5xl text-knicksOrange w-max">T</p>
        <p className="font-black text-5xl text-knicksBlue w-max">O</p>
      </div>
    </Link>
  );
}
