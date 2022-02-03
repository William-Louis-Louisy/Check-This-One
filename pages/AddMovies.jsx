import React from "react";
import MoviesSearch from "../components/MoviesSearch";
import Layout from "../components/Layout";

export default function AddMovies() {
  return (
    <Layout pageTitle="Add Movies">
      <h1 className="text-center font-black text-7xl md:text-8xl text-knicksBlue mt-24">
        ADD <span className="text-knicksOrange -rotate-6"> MOVIES</span>
      </h1>
      <div className="flex flex-col items-center my-16 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        <MoviesSearch />
      </div>
    </Layout>
  );
}
