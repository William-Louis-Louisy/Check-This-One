import axios from "axios";
import React, { useEffect, useState } from "react";
import SerieCard from "./SerieCard";

export default function SeriesSearch() {
  const [seriesData, setSeriesData] = useState([]);
  const [search, setSearch] = useState("a");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=0a441cfbeb22431ec2c06b0c759cc525&query=${search}&language=en-US`
      )
      .then((res) => setSeriesData(res.data.results));
  }, [search]);
  return (
    <div>
      <div className="form-container">
        <form className="flex flex-row justify-center">
          <input
            type="text"
            placeholder="Enter a serie title"
            className="border-knicksBlue border-2 p-2 mx-2 text-center text-knicksBlue rounded-lg flex justify-center items-center"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <input type="submit" value="SEARCH" /> */}
        </form>
      </div>
      <div className="flex flex-col items-center my-12 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        {seriesData?.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </div>
    </div>
  );
}
