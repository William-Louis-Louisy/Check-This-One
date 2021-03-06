import Link from "next/link";
import React from "react";

export default function AdminBtn({ link }) {
  return (
    <Link passHref href={link}>
      <div className="cursor-pointer flex flex-row justify-center items-center border-knicksBlue border-2 p-2 rounded-full text-knicksBlue ml-8 hover:border-knicksOrange hover:text-knicksOrange hover:shadow-inner hover:shadow-slate-700 focus:shadow-inner focus:shadow-knicksBlack duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>
      </div>
    </Link>
  );
}
