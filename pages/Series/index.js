import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import CardSeries from "../../components/CardSeries";
import axios from "axios";

export default function Series(series) {
  const [seriesList, setSeriesList] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/series`, {
        series: series,
      })
      .then((res) => setSeriesList(res.data));
  }, [series]);

  return (
    <Layout pageTitle="Series">
      <h1 className="text-center font-black text-7xl md:text-8xl text-knicksBlue mt-24">
        SE<span className="text-knicksOrange -rotate-6">R</span>IES
      </h1>
      <div className="flex flex-col items-center my-24 gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center">
        {seriesList?.map((serie) => (
          <CardSeries key={serie._id} serie={serie.tmdb_tv_id} url="#" />
        ))}
      </div>
    </Layout>
  );
}
