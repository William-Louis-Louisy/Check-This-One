import base from "../../../middlewares/common";
import Series from "../../../models/series";

const handleGet = async (req, res) => {
  res.send(await Series.getSeries());
};
async function handlePost(req, res) {
  if (req.body) {
    const newSerie = await Series.createSerie(req.body);
    res.status(201).send(newSerie);
  }
}
async function handleDelete(req, res) {
  if (req.body) {
    const deletedSerie = await Series.deleteSerie(req.body);
    res.status(200).send(deletedSerie);
  }
}
export default base().get(handleGet).post(handlePost).delete(handleDelete);
