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
  const movie = await collection.find({ _id: ObjectId(movieId) }).next();
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
async function createMovie({ tmdb_id }) {
  console.log("coucou", await collection.find().toArray());

  // return collection.insertOne({
  //   tmdb_id,
  // });
}
// DELETE
const deleteMovie = (movieId) => {
  return collection.deleteOne({ _id: ObjectId(movieId) });
};
module.exports = {
  getMovies,
  getOneMovie,
  createMovie,
  deleteMovie,
  updateMovie,
};
