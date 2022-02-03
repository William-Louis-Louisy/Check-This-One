import base from "../../../middlewares/common";
import Movies from "../../../models/movies";

// async function handleDelete(req, res) {
//   console.log("coucou", req.query.id);
//   if (await Movies.deleteMovie(req.query.id)) res.status(204).send();
//   else res.status(404).send("Movie not found");
// }

const handleGetOne = async (req, res) => {
  console.log("api id movies data", req.query.movieId);
  res.send(await Movies.getOneMovie(parseInt(req.query.movieId)));
};

async function handleDelete(req, res) {
  if (req.query) {
    const deletedMovie = await Movies.deleteMovie(req.query.id);
    res.status(200).send(deletedMovie);
  }
}

export default base().get(handleGetOne).delete(handleDelete);
