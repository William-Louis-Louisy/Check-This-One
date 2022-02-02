import React from "react";
import SeriesSearch from "../components/SeriesSearch";
import Layout from "../components/Layout";

export default function AddSeries() {
  return (
    <Layout>
      <div className="flex flex-col items-center my-24 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        <SeriesSearch />
      </div>
    </Layout>
  );
}
