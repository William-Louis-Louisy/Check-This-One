import axios from "axios";

/* eslint-disable @next/next/no-img-element */
export default function MovieCard({ movie }) {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  const handleDelete = (movieId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/movies`, {
        movieId: movieId,
      })
      .then((res) => console.log("delete data", res.data));
  };
  const handlePost = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_HOST_API_URL}/api/movies`, {
        tmdb_id: movie.id,
      })
      .then((res) => console.log("post data", res.data));
  };
  return (
    <div className="cursor-pointer text-knicksBlue hover:text-knicksOrange hover:scale-110 border-2 border-knicksSilver hover:border-knicksOrange py-3 flex flex-col items-center w-4/5 h-[500px] bg-white max-w-[312px] rounded-xl insetShadow hover:shadow-xl duration-300 overflow-hidden">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "/poster.jpg"
        }
        alt="movie poster"
        className="h-64 rounded-lg mt-4 border-knicksBlue border-2 insetShadow"
      />
      <h2 className="font-black uppercase text-center text-2xl">
        {movie.title}
      </h2>
      {movie.release_date ? (
        <h4 className="font-extralight text-center text-sm">
          {dateFormater(movie.release_date)}
        </h4>
      ) : (
        ""
      )}

      <h4 className="font-semibold text-center text-base mt-2 px-4 text-ellipsis overflow-y-scroll">
        {movie.overview}
      </h4>

      <div className="mt-4 mb-2 flex flex-row items-center gap-6">
        <button
          className="border-red-600 border-2 py-2 px-4 rounded-2xl text-red-600 hover:scale-105"
          onClick={() => handleDelete()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          className="border-knicksBlue border-2 py-2 px-4 rounded-2xl text-knicksBlue hover:scale-105"
          onClick={() => handlePost()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
