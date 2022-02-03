import React from "react";
import SeriesSearch from "../components/SeriesSearch";
import Layout from "../components/Layout";

export default function AddSeries() {
  return (
    <Layout pageTitle="Manage Series">
      <h1 className="text-center font-black text-7xl md:text-8xl text-knicksBlue mt-24">
        MANAGE <span className="text-knicksOrange -rotate-6"> SERIES</span>
      </h1>
      <div className="flex flex-col items-center my-16 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        <SeriesSearch />
      </div>
    </Layout>
  );
}
