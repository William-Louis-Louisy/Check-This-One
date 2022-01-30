import Link from "next/link";
import React from "react";

export default function LinkButton({ content, href }) {
  return (
    <Link passHref href={href}>
      <div className="flex items-center justify-center w-24 h-11 text-center font-extrabold text-knicksBlue hover:text-sm cursor-pointer py-2 px-4 rounded-3xl border-2 border-knicksBlue hover:border-knicksOrange hover:text-knicksOrange hover:shadow-inner hover:shadow-slate-700 focus:shadow-inner focus:shadow-knicksBlack duration-200">
        {content}
      </div>
    </Link>
  );
}
