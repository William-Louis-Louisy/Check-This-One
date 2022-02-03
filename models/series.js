const db = require("../db-config");
const { ObjectId } = require("mongodb");
const collection = db.collection("series");

// GET ALL
async function getSeries() {
  const series = await collection.find().toArray();
  return series;
}
// GET ONE
async function getOneSerie(serieId) {
  const serie = await collection.find({ _id: ObjectId(serieId) }).next();
  return serie;
}
// UPDATE
async function updateSerie(serieId, body) {
  const newAttributes = {
    tmdb_tv_id: body.tmdb_tv_id,
  };
  return collection.updateOne(
    { _id: ObjectId(serieId) },
    {
      $set: newAttributes,
    }
  );
}
// POST
async function createSerie({ tmdb_id }) {
  return collection.insertOne({
    tmdb_tv_id,
  });
}
// DELETE
const deleteSerie = (serieId) => {
  return collection.deleteOne({ _id: ObjectId(serieId) });
};

module.exports = {
  getSeries,
  getOneSerie,
  createSerie,
  deleteSerie,
  updateSerie,
};
