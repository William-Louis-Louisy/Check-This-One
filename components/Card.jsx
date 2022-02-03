/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Card({ url, movie }) {
  const [movieData, setMoviedata] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=0a441cfbeb22431ec2c06b0c759cc525&language=en-US`
      )
      .then((res) => setMoviedata(res.data));
  }, [movie]);
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  return (
    <Link passHref href={url}>
      <div className="cursor-pointer text-knicksBlue hover:text-knicksOrange hover:scale-110 border-2 border-knicksSilver hover:border-knicksOrange py-3 flex flex-col items-center w-4/5 h-[500px] bg-white max-w-[312px] rounded-xl insetShadow hover:shadow-xl duration-300">
        <img
          src={
            movieData.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movieData.poster_path
              : "/poster.jpg"
          }
          alt="movie poster"
          className="h-64 rounded-lg mt-4 border-knicksBlue border-2 insetShadow"
        />
        <h2 className="font-black uppercase text-center text-2xl">
          {movieData.title}
        </h2>
        {movieData.release_date ? (
          <h4 className="font-extralight text-center text-sm">
            {dateFormater(movieData.release_date)}
          </h4>
        ) : (
          ""
        )}

        <h4 className="font-semibold text-center text-base mt-6">
          {movieData.tagline}
        </h4>
      </div>
    </Link>
  );
}
