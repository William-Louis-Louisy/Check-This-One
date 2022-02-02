/* eslint-disable @next/next/no-img-element */
export default function MovieCard({ movie }) {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
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
    </div>
  );
}