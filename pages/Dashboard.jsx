import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout pageTitle="Dashboard">
      <h1 className="text-center font-black text-7xl md:text-8xl text-knicksBlue mt-24">
        DASH<span className="text-knicksOrange -rotate-6">BOARD</span>
      </h1>
      <div className="flex flex-col items-center my-16 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        <Link passHref href="/AddMovies">
          <div className="w-[260px] h-[180px] border-2 border-knicksBlue rounded-xl bg-movies bg-cover flex justify-center items-center shadow-2xl">
            <h4 className="text-knicksOrange text-4xl font-black">
              ADD MOVIES
            </h4>
          </div>
        </Link>
        <Link passHref href="/AddSeries">
          <div className="w-[260px] h-[180px] border-2 border-knicksBlue rounded-xl bg-series bg-cover flex justify-center items-center shadow-2xl">
            <h4 className="text-knicksOrange text-4xl font-black">
              ADD SERIES
            </h4>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
