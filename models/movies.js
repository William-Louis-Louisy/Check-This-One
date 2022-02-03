const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("movies");
// GET ALL
async function getMovies() {
  const movies = await collection.find().toArray();
  return movies;
}
// GET ONE
async function getOneMovie(movieId) {
  const movie = collection.find({ tmdb_id: movieId });
  // console.log("result of get db", movie);
  return movie;
}
// UPDATE
async function updateMovie(movieId, body) {
  const newAttributes = {
    tmdb_id: body.tmdb_id,
  };
  return collection.updateOne(
    { _id: ObjectId(movieId) },
    {
      $set: newAttributes,
    }
  );
}
// POST
async function createMovie({ tmdb_id, isAdded }) {
  return collection.insertOne({
    tmdb_id,
    isAdded,
  });
}
// DELETE
const deleteMovie = (movieId) => {
  return collection.deleteOne({ tmdb_id: parseInt(movieId) });
};
module.exports = {
  getMovies,
  getOneMovie,
  createMovie,
  deleteMovie,
  updateMovie,
};
