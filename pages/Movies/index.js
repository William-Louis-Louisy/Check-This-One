import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Movies(movies) {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/movies`, {
        movies: movies,
      })
      .then((res) => setMoviesList(res.data));
  }, [movies]);
  return (
    <Layout pageTitle="Movies">
      <h1 className="text-center font-black text-7xl md:text-8xl text-knicksBlue mt-24">
        M<span className="text-knicksOrange -rotate-6">O</span>VIES
      </h1>
      <div className="flex flex-col items-center my-24 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        {moviesList?.map((movie) => (
          <Card key={movie._id} movie={movie.tmdb_id} url="#" />
        ))}
      </div>
    </Layout>
  );
}
