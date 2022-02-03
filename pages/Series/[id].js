/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function SerieDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [serieDetails, setSerieDetails] = useState([]);

  //   const dateFormater = (date) => {
  //     let [yy, mm, dd] = date.split("-");
  //     return [dd, mm, yy].join("/");
  //   };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=0a441cfbeb22431ec2c06b0c759cc525&language=en-US`
      )
      .then((res) => setSerieDetails(res.data));
  }, [id]);

  if (!serieDetails) {
    return "Loading";
  }

  return (
    <Layout pageTitle={"Serie Details"}>
      <div className="flex flex-col items-center my-16 text-knicksBlue">
        <img
          src={
            serieDetails.poster_path
              ? "https://image.tmdb.org/t/p/w500" + serieDetails.poster_path
              : "/poster.jpg"
          }
          alt="serie poster"
          className="w-9/12 md:w-1/4 rounded-lg mt-4 border-knicksBlue border-2 insetShadow"
        />
        <h2 className="font-black text-3xl text-center p-4 uppercase">
          {serieDetails.title}
        </h2>
        <h3 className="font-light text-center px-4">
          Release date: {serieDetails.first_air_date}
        </h3>
        {/* <h3>Genre(s): {serieDetails.genres[Object.keys(serieDetails.genres)[0]].name}</h3> */}
        <p className="my-4 md:mx-56 text-center px-4 text-lg">
          {serieDetails.overview}
        </p>
      </div>
    </Layout>
  );
}
