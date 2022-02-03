import base from "../../../middlewares/common";
import Movies from "../../../models/movies";

const handleGet = async (req, res) => {
  res.send(await Movies.getMovies());
};
async function handlePost(req, res) {
  if (req.body) {
    const newMovie = await Movies.createMovie(req.body);
    res.status(201).send(newMovie);
  }
}
async function handleDelete(req, res) {
  if (req.body) {
    const deletedMovie = await Movies.deleteMovie(req.body);
    res.status(200).send(deletedMovie);
  }
}
export default base().get(handleGet).post(handlePost).delete(handleDelete);
