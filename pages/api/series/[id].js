import base from "../../../middlewares/common";
import Series from "../../../models/series";

async function handleDelete(req, res) {
  if (req.query) {
    const deletedSerie = await Series.deleteSerie(req.query.id);
    res.status(200).send(deletedSerie);
  }
}

export default base().delete(handleDelete);
