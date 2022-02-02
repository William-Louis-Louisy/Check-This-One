import React from "react";
import MoviesSearch from "../components/MoviesSearch";
import Layout from "../components/Layout";

export default function AddMovies() {
  return (
    <Layout>
      <div className="flex flex-col items-center my-24 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        <MoviesSearch />
      </div>
    </Layout>
  );
}
